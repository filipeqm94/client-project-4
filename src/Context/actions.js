import { axiosInstance } from './axios';

// not sure we need this when we have the rest hooked up
const currentUser = {};
const chat = {};

// async function handleLogin(event) {
//   event.preventDefault()
//   try {
//     const response = await axiosInstance.post('login/', loginForm)
//     axiosInstance.defaults.headers['Authorization'] =
//       'JWT ' + response.data.access
//     localStorage.setItem('access_token', response.data.access)
//     localStorage.setItem('refresh_token', response.data.refresh)
//     // redirect somewhere else once tokens are received
//   } catch (error) {
//     throw error
//   }
// }

// async function handleLogout() {
//   try {
//     const response = axiosInstance.post('logout/', {
//       refresh_token: localStorage.getItem('refresh_token'),
//     })
//     localStorage.removeItem('access_token')
//     localStorage.removeItem('refresh_token')
//     axiosInstance.defaults.headers['Authorization'] = null

//     // redirect somewhere else once logged out
//   } catch (err) {
//     console.error(err)
//   }
// }

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
