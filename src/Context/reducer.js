import {
  SEND_REQUEST,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  SET_USERS,
  SET_ACTIVE_CHAT,
  SET_USER_CHATS,
  SET_CHAT_ROOM,
  SET_CHAT_ROOM_USER,
  SET_CHAT_ROOM_MESSAGES,
  SET_CHAT_SOCKET,
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
    case SET_USER_CHATS:
      return {
        ...state,
        userChatList: action.payload,
      };
    case SET_CHAT_ROOM_USER:
      return {
        ...state,
        chatRoomUser: action.payload,
      };
    case SET_CHAT_ROOM:
      return {
        ...state,
        chatRoom: action.payload,
      };
    case SET_CHAT_SOCKET:
      return {
        ...state,
        chatSocket: action.payload,
      };
    case SET_CHAT_ROOM_MESSAGES:
      return {
        ...state,
        chatRoomMessages: action.payload,
      };
    case SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.payload,
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
