import { useState } from 'react';

import { useAuthDispatch } from '../../Context';
import { signup } from '../../Context';

import './styles.css';

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
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            required
            maxLength="16"
            value={signupForm.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            required
            minLength="8"
            value={signupForm.password}
            onChange={handleChange}
          />
        </label>
        {signupForm.password !== signupForm.confirmPwd ? (
          <p>Passwords must match</p>
        ) : null}
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPwd"
            required
            value={signupForm.confirmPwd}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={signupForm.email}
            onChange={handleChange}
          />
        </label>
        {signupForm.email !== signupForm.confirmEmail ? (
          <p>Emails must match</p>
        ) : null}
        <label>
          Confirm Email:
          <input
            type="email"
            name="confirmEmail"
            required
            value={signupForm.confirmEmail}
            onChange={handleChange}
          />
        </label>
        <label>
          Primary Language:
          <select onChange={handleChange} name="primaryLanguage" required>
            <option value="">Please choose a language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="portuguese">Portuguese</option>
          </select>
        </label>
        <label>
          Learning Language:
          <select onChange={handleChange} name="learningLanguage" required>
            <option value="">Please choose a language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="portuguese">Portuguese</option>
          </select>
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
