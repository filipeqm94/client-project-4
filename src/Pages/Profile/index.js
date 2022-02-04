import './styles.scss';
import React from 'react';
import { useAuthState } from '../../Context';

function Profile() {
  const { username, primary_language, learning_language } = useAuthState();

  return (
    <div className="prof-container">
      <div className="prof-top">
        {/* <h3>prof img</h3> */}
        <h3 id="username">{username}</h3>
        <div className="prof-info">
          <p>PRIMARY</p>
          <h3>{primary_language}</h3>
          <p>LEARNING</p>
          <h3>{learning_language}</h3>
        </div>
        {/* <div className="prof-description">
          <h3>Bio:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Profile;
