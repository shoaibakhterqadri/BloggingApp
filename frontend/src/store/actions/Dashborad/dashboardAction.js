import axios from "axios";
export const dashboard_index_data_get = () => async (dispatch) => {
  try {
    const {
      data: { userView, articleCount, categoryCount, tagCount, subAdminCount },
    } = await axios.get(
      "https://ill-tan-tuna-sock.cyclic.app/rest-api/get-dashboard-index-data",
      { withCredentials: true }
    );
    dispatch({
      type: "DASHBOARD_INDEX_DATA_GET",
      payload: {
        userView,
        articleCount,
        categoryCount,
        tagCount,
        subAdminCount,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const get_notification = (id) => async (dispatch) => {
  try {
    const {
      data: { notification },
    } = await axios.get(
      `https://ill-tan-tuna-sock.cyclic.app/rest-api/get-notification/${id}`,
      { withCredentials: true }
    );
    dispatch({
      type: "NOTIFICATION_GET_SUCCESS",
      payload: notification,
    });
  } catch (error) {}
};
export const seen_notification = (id) => async (dispatch) => {
  try {
    await axios.get(
      `https://ill-tan-tuna-sock.cyclic.app/rest-api/seen-notification/${id}`,
      { withCredentials: true }
    );
  } catch (error) {
    console.log(error.response.data);
  }
};

export const delete_notification = (id) => async (dispatch) => {
  try {
    const {
      data: { message },
    } = await axios.get(
      `https://ill-tan-tuna-sock.cyclic.app/rest-api/delete-notification/${id}`,
      { withCredentials: true }
    );
    console.log(message);
    dispatch({
      type: "NOTIFICATION_DELETE_SUCCESS",
      payload: {
        message,
      },
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getSubAdmins = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://ill-tan-tuna-sock.cyclic.app/rest-api/sub-admins",
      { withCredentials: true }
    );
    dispatch({
      type: "GET_SUB_ADMINS_SUCCESS",
      payload: data.subAdmins,
    });
    dispatch(getSubAdminsCount(data.subAdmins.length));
  } catch (error) {
    console.error(error);
  }
};

export const blockUnblockSubAdmins =
  (subAdminId, accessStatus) => async (dispatch) => {
    try {
      await axios.put(
        `https://ill-tan-tuna-sock.cyclic.app/rest-api/update-sub-admin-access/${subAdminId}`,
        { accessStatus },
        { withCredentials: true }
      );
      dispatch({
        type: "BLOCK_UNBLOCK_SUB_ADMIN",
        payload: { subAdminId, accessStatus },
      });
      console.log(subAdminId, accessStatus);
    } catch (error) {
      console.error(error.message);
    }
  };

const getSubAdminsCount = (count) => ({
  type: "GET_SUB_ADMINS_COUNT",
  payload: count,
});
