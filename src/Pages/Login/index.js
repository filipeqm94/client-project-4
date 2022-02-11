import './styles.scss';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../../Context/context';
import { login } from '../../Context';
import SignUp from '../SignUp/index';
import screenShot1 from '../../assets/images/screenshot-1.png';
import screenShot2 from '../../assets/images/screenshot-2.png';
import screenShot3 from '../../assets/images/screenshot-3.png';
import userIcon from '../../assets/images/user.png';
import ghLogo from '../../assets/images/gh-logo.png';
import fakeUser1 from '../../assets/images/fake-user-1.png';
import fakeUser2 from '../../assets/images/fake-user-2.png';
import fakeUser3 from '../../assets/images/fake-user-3.png';

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
      <div className="content-side">
        <div className="screen-shot-area">
          <h1 className="logo">
            <em>Chatter</em>
          </h1>
          <div className="screenshots">
            <div id="screen-shot-1">
              <img
                src={fakeUser3}
                alt="Chatter user preview"
                className="screen-shot-user right"
              />
              <img
                src={screenShot3}
                alt="Chatter chat preview"
                id="screen-shot"
              />
            </div>{' '}
            <div id="screen-shot-2">
              <img
                src={fakeUser1}
                alt="Chatter user preview"
                className="screen-shot-user left"
              />
              <img
                src={screenShot1}
                alt="Chatter chat preview"
                id="screen-shot-left"
              />
            </div>
            <div id="screen-shot-3">
              <img
                src={fakeUser2}
                alt="Chatter user preview"
                id="screen-shot-user"
                className="screen-shot-user right"
              />
              <img
                src={screenShot2}
                alt="Chatter chat preview"
                id="screen-shot"
              />
            </div>
          </div>
        </div>
        <footer>
          <div>
            <a
              href="https://github.com/filipeqm94/client-project-4"
              target="_blank" rel='noreferrer'
            >
              <img src={ghLogo} alt="GitHub Logo" />
              <h4>source code</h4>
            </a>
          </div>
        </footer>
      </div>
      <div className="login-side">
        <div>
          <div className="login-side-top">
            <h1>Ready to chat ?</h1>
            <p>
              Welcome to Chatter! Practice by chatting with proficient speakers
              and make new connections along the way.
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
          <div className="sign-up-box">
            <div>
              New to Chatter?
              <Link to="/signup" id="create_acct_btn">
                <h4>Create an account</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
