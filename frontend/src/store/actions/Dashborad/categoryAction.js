import axios from "axios";

export const add_category = (data) => async (dispatch) => {
  dispatch({ type: "SET_LOADER" });
  try {
    const response = await axios.post(
      "https://ill-tan-tuna-sock.cyclic.app/rest-api/add-category",
      data,
      { withCredentials: true }
    );
    dispatch({
      type: "CATEGORY_ADD_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "CATEGORY_ADD_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};

export const get_all_category = (page, searchValue) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://ill-tan-tuna-sock.cyclic.app/rest-api/get-category?page=${page}&&searchValue=${searchValue}`,
      { withCredentials: true }
    );
    dispatch({
      type: "DASHBORAD_CATEGORY_GET_SUCCESS",
      payload: {
        allCategory: response.data.allCategory,
        parPage: response.data.parPage,
        categoryCount: response.data.categoryCount,
      },
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const delete_category = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://ill-tan-tuna-sock.cyclic.app/rest-api/delete-category/${id}`,
      { withCredentials: true }
    );
    dispatch({
      type: "CATEGORY_DELETE_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const edit_category = (categorySlug) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://ill-tan-tuna-sock.cyclic.app/rest-api/edit-category/${categorySlug}`,
      { withCredentials: true }
    );
    dispatch({
      type: "EDIT_CATEGORY_GET_SUCCESS",
      payload: {
        editCategory: response.data.editCategory,
      },
    });
    dispatch({
      type: "EDIT_REQUEST_SET",
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const update_category = (id, data) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `https://ill-tan-tuna-sock.cyclic.app/rest-api/update-category/${id}`,
      data,
      { withCredentials: true }
    );
    dispatch({
      type: "CATEGORY_UPDATE_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "CATEGORY_UPDATE_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};
