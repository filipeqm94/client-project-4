import React, { useState } from 'react';
import { loginUser, useAuthState, useAuthDispatch } from '../../Context';

function Login(props) {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const dispatch = useAuthDispatch();

  async function handleLogin(target) {
    target.preventDefault();
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [target.name]: target.value,
    }));

    try {
      let response = await loginUser(dispatch, loginForm);
      if (!response.user) {
        return props.history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      Login
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            name='username'
            type='text'
            value={loginForm.username}
            onChange={handleLogin}
          />
        </label>
        <label>
          Password:
          <input
            name='password'
            type='password'
            value={loginForm.password}
            onChange={handleLogin}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Login;
