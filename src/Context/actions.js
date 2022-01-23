import axiosInstance from './axios';

export const loginUser = async (dispatch, payload) => {
  dispatch({ type: 'REQUEST_LOGIN' });
  axiosInstance
    .post('login/', payload)
    .then((res) => {
      const { access, refresh } = res.data;
      const { username, primary_language, learning_language } = JSON.parse(
        atob(refresh.split('.')[1])
      );
      const user = {
        username,
        primary_language,
        learning_language,
      };
      localStorage.setItem('current_user', JSON.stringify(user));
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      window.location.href = '/'
    })
    .catch((error) => {
      dispatch({ type: 'LOGIN_ERROR', error: error.response.data.detail });
    });
};

export const logout = async (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};
