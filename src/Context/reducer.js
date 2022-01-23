let user = localStorage.getItem('current_user')
  ? JSON.parse(localStorage.getItem('current_user'))
  : '';

// initial state tree
export const initialState = {
  ...user,
  loading: false,
  errorMessage: ""
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
        errorMessage: "",
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: '',
        token: '',
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
