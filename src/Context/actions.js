import axiosInstance from './axios';

const currentUser = {};
const chat = {};

export const loginUser = async (dispatch, payload) => {
  dispatch({ type: 'REQUEST_LOGIN' });
  axiosInstance
    .post('login/', payload)
    .then((res) => {
      if ('response' in res) throw res.response;
      console.log('\n<<<<< Login Success >>>>>\n', res);
      const { access, refresh } = res.data;
      const { username, primary_language, learning_language } = JSON.parse(
        atob(refresh.split('.')[1])
      );
      const user = {
        username,
        primary_language,
        learning_language,
        access,
        refresh,
      };
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    })
    .catch((error) => {
      console.log('\n<<<<< Login Error >>>>>\n', error);
      
      // dispatch({ type: 'LOGIN_ERROR'}); //error
    });
};

export const logout = async (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
};

export const getUserChatList = async (dispatch) => {
  try {
    let response = await axiosInstance.get('/chats');
    let data = await response.json();

    dispatch({ type: 'GET_USER_CHATS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

// combined add/remove chat with other users
export async function updateUserChatList(dispatch, payload) {
  try {
    let response = await axiosInstance.put(`update/${currentUser.id}`, payload);
    let data = await response.json();

    dispatch({ type: 'UPDATE_USER_CHATS', payload: data });
  } catch (error) {
    console.error(error);
  }
}

export const getChatMessages = async (dispatch) => {
  try {
    let response = await axiosInstance.get(`${chat.id}/`);
    let data = await response.json();

    dispatch({ type: 'GET_CHAT_MESSAGES', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createMessage = async (dispatch, payload) => {
  try {
    let response = await axiosInstance.post(`${chat.id}/new`, payload);
    let data = response.json();

    dispatch({ type: 'CREATE_MESSAGE', payload: data });
  } catch (error) {
    console.error(error);
  }
};
