import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../../Context/context';
import { login } from '../../Context';

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
    login(dispatch, loginForm);
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
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
