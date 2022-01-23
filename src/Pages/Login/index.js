import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../../Context/context';
import { loginUser } from '../../Context';

function Login(props) {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  async function handleLogin(ev) {
    ev.preventDefault();
    setLoginForm({
      ...loginForm,
      [ev.target.name]: ev.target.value,
    });
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    loginUser(dispatch, loginForm);
  }

  return (
    <div>
      Login
      {loading ? <p>Loading</p> : null}
      <p>{errorMessage ? errorMessage : null}</p>
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
