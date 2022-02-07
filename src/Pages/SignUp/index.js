import { useState } from 'react';

import { useAuthDispatch, useAuthState } from '../../Context';
import { signup } from '../../Context';

import '../Login/styles.scss';
import ghLogo from '../../assets/images/gh-logo.png';

function SignUp() {
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
    confirmPwd: '',
    email: '',
    confirmEmail: '',
    primaryLanguage: '',
    learningLanguage: '',
  });

  const dispatch = useAuthDispatch();
  const { errorMessage } = useAuthState();

  function handleChange({ target }) {
    setSignupForm((prevSignupForm) => ({
      ...prevSignupForm,
      [target.name]: target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const {
      username,
      password,
      confirmPwd,
      email,
      confirmEmail,
      primaryLanguage,
      learningLanguage,
    } = signupForm;

    if (
      !username ||
      password !== confirmPwd ||
      email !== confirmEmail ||
      !primaryLanguage ||
      !learningLanguage
    ) {
      return;
    }
    signup(dispatch, {
      username,
      password,
      email,
      primary_language: primaryLanguage,
      learning_language: learningLanguage,
    });
  }

  return (
    <div className="login-container">
      <div className="content-side">
        <div className="screen-shot-area">
          <div>
            <h1 id="logo">Chatter</h1>
            <h3>carousel</h3>
            <h1>About Us</h1>
            <p>
              Hi! We're Filipe Marques (portfolio link) and Victor Wang
              (portfolio link), creators of Chatter. Our goal was to create a
              lightweight app that anyone could just pick up and use anytime.
              Find people from all walks of life and give the language you're
              learning a little practice. Send a quick message and maybe even
              meet a new friend. We hope you enjoy using Chatter!
            </p>
            <div>
              <img />
              <img />
            </div>
          </div>
          <div>
            <h1>Roadmap</h1>
            <p>
              More features are coming your way. Check out our development board
              to see what we're working on. If you have any suggestions, you can
              find our contact information below.
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              Got questions or feedback? Send us a message, we'd love to
              connect!
            </p>
          </div>
        </div>
        <footer>
          <div>
            <a
              href="https://github.com/filipeqm94/client-project-4"
              target=" _blank"
            >
              <img src={ghLogo} alt="GitHub Logo" />
              <h4>source code</h4>
            </a>
          </div>
        </footer>
      </div>
      <div className="login-side">
        <div className="login-side-top">
          <h1>Create an account</h1>
          <p>
            Sign up to get started. Your Primary Language will be the language
            you're most comfortabe with.
          </p>
        </div>
        <div className="login-area">
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              required
              maxLength="16"
              value={signupForm.username}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              minLength="8"
              value={signupForm.password}
              onChange={handleChange}
            />
            {signupForm.password !== signupForm.confirmPwd ? (
              <p>Passwords must match</p>
            ) : null}
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPwd"
              required
              value={signupForm.confirmPwd}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={signupForm.email}
              onChange={handleChange}
            />
            {signupForm.email !== signupForm.confirmEmail ? (
              <p>Emails must match</p>
            ) : null}
            <label>Confirm Email</label>
            <input
              type="email"
              name="confirmEmail"
              required
              value={signupForm.confirmEmail}
              onChange={handleChange}
            />
            <label>Primary Language</label>
            <select onChange={handleChange} name="primaryLanguage" required>
              <option value="">Please choose a language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="portuguese">Portuguese</option>
            </select>
            <label>Learning Language</label>
            <select onChange={handleChange} name="learningLanguage" required>
              <option value="">Please choose a language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="portuguese">Portuguese</option>
            </select>
            <input id="submit-btn" type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
