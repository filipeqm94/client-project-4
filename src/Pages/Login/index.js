import React, { useState } from 'react';
import axiosInstance from '../../Context/axios';

function Login() {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  function handleChange({ target }) {
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [target.name]: target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('login/', loginForm);
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name='username'
            type='text'
            value={loginForm.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name='password'
            type='password'
            value={loginForm.password}
            onChange={handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Login;
