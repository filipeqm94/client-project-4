import axios from 'axios';

const baseURL = process.env.REACT_APP_DB_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: localStorage.getItem('access_token')
      ? 'JWT ' + localStorage.getItem('access_token')
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // using the wrong password, can cause throw the
    // Axios interceptor into an infinite loop of trying to
    // get a new refresh token but never getting it.

    // here is a fix that solves this problem and
    // adds a check to the token's expiration time before
    // making a request to begin with

    const originalRequest = error.config;
    // prevent infinite loops
    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + 'token/refresh/'
    ) {
      window.location.href = '/login/';
      return Promise.reject(error);
    }

    if (
      error.response.data.code === 'token_not_valid' &&
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        // exp date in token is expressed in seconds,
        // while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          try {
            const response = await axiosInstance.post('/token/refresh/', {
              refresh: refreshToken,
            });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            axiosInstance.defaults.headers['Authorization'] =
              'JWT ' + response.data.access;
            originalRequest.headers['Authorization'] =
              'JWT ' + response.data.access;
            return await axiosInstance(originalRequest);
          } catch (err) {
            console.log(err);
          }
        } else {
          console.log('Refresh token is expired', tokenParts.exp, now);
          // redirect to login
          window.location.href = '/login/';
        }
      } else {
        console.log('Refresh token not available.');
        // redirect to login
        window.location.href = '/login/';
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
