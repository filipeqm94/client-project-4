import {
  SEND_REQUEST,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  SET_USERS,
} from './reducerActions';

let user = localStorage.getItem('current_user')
  ? JSON.parse(localStorage.getItem('current_user'))
  : '';

// initial state tree
export const initialState = {
  ...user,
  loading: false,
  errorMessage: '',
  usersList: [],
  chatSocket: '',
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        loading: false,
        errorMessage: '',
      };
    case LOGOUT:
      return {
        ...state,
        user: '',
        token: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case SET_USERS:
      return {
        ...state,
        usersList: action.payload,
      };
    case 'SET_SOCKET':
      return {
        ...state,
        chatSocket: action.payload,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
