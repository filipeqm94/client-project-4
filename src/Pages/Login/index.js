import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../../Context/context';
import { loginUser } from '../../Context';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  let navigate = useNavigate();

  console.log(loading);
  console.log(errorMessage);

  async function handleLogin(ev) {
    ev.preventDefault();
    setLoginForm({
      ...loginForm,
      [ev.target.name]: ev.target.value,
    });
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      let response = await loginUser(dispatch, loginForm);
      if (response.type != 'error') {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={loginForm.username}
            onChange={handleLogin}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={loginForm.password}
            onChange={handleLogin}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
