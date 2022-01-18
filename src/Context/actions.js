import { axiosInstance } from './axios';

// not sure we need this when we have the rest hooked up
const currentUser = {};
const chat = {};

export const loginUser = async (dispatch, payload) => {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await axiosInstance.post('/login', payload);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', data);
      return data;
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
};

export const logout = async (dispatch) => {
  dispatch({ type: 'LOG_OUT' });
  localStorage.removeItem('currentUser');
  // need to blacklist token
  localStorage.removeItem('token');
};

// get all active chats for the user
export const getUserChatList = async (dispatch) => {
  try {
    let response = await axiosInstance.get('/chats');
    let data = await response.json();

    dispatch({ type: 'GET_USER_CHATS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

// add or remove chats to user chatlist
export async function updateUserChatList(dispatch, payload) {
  try {
    let response = await axiosInstance.put(`update/${currentUser.id}`, payload);
    let data = await response.json();

    dispatch({ type: 'UPDATE_USER_CHATS', payload: data });
  } catch (error) {
    console.error(error);
  }
}

// get chat messages for a specific chat between user_1 and user_2
export const getChatMessages = async (dispatch) => {
  try {
    let response = await axiosInstance.get(`${chat.id}/`);
    let data = await response.json();

    dispatch({ type: 'GET_CHAT_MESSAGES', payload: data });
  } catch (error) {
    console.error(error);
  }
};

// create new message in specific chat between user_1 and user_2
export const createMessage = async (dispatch, payload) => {
  try {
    let response = await axiosInstance.post(`${chat.id}/new`, payload);
    let data = await response.json();

    dispatch({ type: 'CREATE_MESSAGE', payload: data });
  } catch (error) {
    console.error(error);
  }
};
