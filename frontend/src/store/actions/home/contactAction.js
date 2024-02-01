import axios from 'axios';

export const contactInfo=(data)=> async (dispatch)=>{
try {
    const response = await axios.post('http://localhost:5000/rest-api/contact-form',data,{withCredentials:true})
    dispatch({
        type:'CONTACT_SUCCESS',
        // payload:response
        // payload:response.data
        payload: {
            successMessage: response.data.successMessage,
        }
    })
} catch (error) {
    console.error("Action's error is "+error);
    // dispatch({
    //     type:'CONTACT_FAIL',
    //     payload: error.response ? error.response.data.errorMessage : 'Something went wrong',
    // })
    dispatch({
        type: 'CONTACT_FAIL',
        payload: {
            error: error.response.data.errorMessage
        }
    })
}
}