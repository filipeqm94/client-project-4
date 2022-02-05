import './styles.scss';
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
    <div className="login-container">
      <div className="login-area">
        <div className="login-area-top">
          <h1>
            Welcome to <em>Chatter</em>
          </h1>
          <p>
            Learning a new language? Practice by chatting with proficient
            speakers and make new connections along the way!
          </p>
        </div>
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
      <div className="content-area"></div>
    </div>
  );
}

export default Login;
