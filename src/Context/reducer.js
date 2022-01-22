let user = localStorage.getItem('current_user')
  ? JSON.parse(localStorage.getItem('current_user'))
  : '';

// initial state tree
export const userInitialState = {
  ...user,
  loading: true,
};

export const AuthReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      console.log('Request sent');
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      console.log('<<<<< Success Login >>>>');
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: '',
        token: '',
      };
    case 'LOGIN_ERROR':
      console.log('<<<<< Error Login >>>>>');
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
