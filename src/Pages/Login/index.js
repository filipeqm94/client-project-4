import './styles.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../../Context/context';
import { login } from '../../Context';

import screenShot from '../../assets/images/screenshot-1.png';

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
      <div className="login-side">
        <div className="login-side-top">
          <h1>
            Welcome to <em>Chatter</em>
          </h1>
          <p>
            Learning a new language? Practice by chatting with proficient
            speakers and make new connections along the way!
          </p>
        </div>
        <div className="login-area">
          {loading ? <p>Loading</p> : null}
          <p>{errorMessage ? errorMessage : null}</p>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              name="username"
              type="text"
              value={loginForm.username}
              onChange={handleLogin}
            />
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={loginForm.password}
              onChange={handleLogin}
            />
            <input type="submit" value="Submit" id="submit-btn" />
          </form>
        </div>
        <div className="sign-up-area">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      <div className="content-side">
        <img src={screenShot} id="screen-shot" />
      </div>
    </div>
  );
}

export default Login;
