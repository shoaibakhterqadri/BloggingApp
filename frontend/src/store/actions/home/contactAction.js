import axios from "axios";

export const contactInfo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://ill-tan-tuna-sock.cyclic.app/rest-api/contact-form",
      data,
      { withCredentials: true }
    );
    dispatch({
      type: "CONTACT_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    console.error("Action's error is " + error);
    dispatch({
      type: "CONTACT_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};
