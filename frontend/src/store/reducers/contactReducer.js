const initialState = {
    contactData: null,
    error: null,
    errorMessage: '',
    successMessage: '',
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CONTACT_SUCCESS':
            return {
                ...state,
                contactData: action.payload,
                error: null,
                errorMessage: '',
                successMessage:"Contact Form is Submitted"
            };
        case 'CONTACT_FAIL':
            return {
                ...state,
                contactData: null,
                errorMessage: action.payload,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default contactReducer;
