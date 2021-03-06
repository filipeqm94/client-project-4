import {
  SEND_REQUEST,
  LOGIN,
  LOGOUT,
  LOGIN_ERROR,
  SET_USERS,
  SET_ACTIVE_CHAT,
  SET_USER_CHATS,
  SET_CHAT_ROOM,
  SET_CHAT_ROOM_USER,
  SET_SOCKET,
  SET_CHAT_ROOM_MESSAGES,
  SET_CHAT_SOCKET,
} from './reducerActions';
import axiosInstance from './axios';

export const login = async (dispatch, payload) => {
  dispatch({ type: SEND_REQUEST });
  axiosInstance
    .post('login/', payload)
    .then((res) => {
      const { access, refresh } = res.data;
      const { username, primary_language, learning_language, user_id } =
        JSON.parse(atob(refresh.split('.')[1]));
      const user = {
        username,
        primary_language,
        learning_language,
        user_id,
      };
      localStorage.setItem('current_user', JSON.stringify(user));
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      dispatch({ type: LOGIN, payload: user });
      window.location.href = '/';
    })
    .catch((error) => {
      dispatch({ type: LOGIN_ERROR, error: error.response.data.detail });
    });
};

export const logout = async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  window.location.href = '/login';
};

export const signup = async (dispatch, payload) => {
  axiosInstance
    .post('signup/', payload)
    .then((res) => {
      if (res.status === 201) window.location.href = '/login';
    })
    .catch((error) => {
      dispatch({ type: 'SIGNUP_ERROR', payload: error.response.data.detail });
    });
};

export const setUsersList = async (dispatch, payload) => {
  dispatch({ type: SET_USERS, payload });
};

export const setActiveChat = async (dispatch, payload) => {
  dispatch({ type: SET_ACTIVE_CHAT, payload });
};

export const setUserChatList = async (dispatch, payload) => {
  dispatch({ type: SET_USER_CHATS, payload });
};

export const setChatRoom = async (dispatch, payload) => {
  dispatch({ type: SET_CHAT_ROOM, payload });
};

export const setChatRoomUser = async (dispatch, payload) => {
  dispatch({ type: SET_CHAT_ROOM_USER, payload });
};

export const setChatRoomMessages = async (dispatch, payload) => {
  dispatch({ type: SET_CHAT_ROOM_MESSAGES, payload });
};

export const setNewMessage = async (dispatch, payload) => {
  dispatch({ type: 'NEW_MESSAGE', payload });
};

export const setChatSocket = async (dispatch, payload) => {
  dispatch({ type: SET_CHAT_SOCKET, payload });
};

export const setSocket = async (dispatch, payload) => {
  dispatch({ type: 'SET_SOCKET', payload });
};
