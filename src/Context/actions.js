import { axiosInstance } from './axios'

const currentUser = {}
const chat = {}

export const loginUser = async (dispatch, payload) => {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    let response = await axiosInstance.post('/login', payload)
    let data = await response.json()

    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data })
      localStorage.setItem('currentUser', data)
      return data
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] })
    return
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error })
  }
}

export const logout = async (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  // need to blacklist token
  localStorage.removeItem('token')
}

export const getUserChatList = async dispatch => {
  try {
    let response = await axiosInstance.get('/chats')
    let data = await response.json()

    dispatch({ type: 'GET_USER_CHATS', payload: data })
  } catch (error) {
    console.error(error)
  }
}

// combined add/remove chat with other users
export async function updateUserChatList(dispatch, payload) {
  try {
    let response = await axiosInstance.put(`update/${currentUser.id}`, payload)
    let data = await response.json()

    dispatch({ type: 'UPDATE_USER_CHATS', payload: data })
  } catch (error) {
    console.error(error)
  }
}

export const getChatMessages = async dispatch => {
  try {
    let response = await axiosInstance.get(`${chat.id}/`)
    let data = await response.json()

    dispatch({ type: 'GET_CHAT_MESSAGES', payload: data })
  } catch (error) {
    console.error(error)
  }
}

export const createMessage = async (dispatch, payload) => {
  try {
    let response = await axiosInstance.post(`${chat.id}/new`, payload);
    let data = response.json();

    dispatch({ type: 'CREATE_MESSAGE', payload: data })
  } catch (error) {
    console.error(error)
  }
}
