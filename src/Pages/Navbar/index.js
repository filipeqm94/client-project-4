import './styles.scss';
import Profile from '../Profile';
import ChatList from '../ChatList';
import Options from '../Options';
import chatterLogo from '../../assets/images/chatter-logo.png';

function Navbar({ handleClick }) {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <div id="logo-holder">
          <h1 className="home-logo">
            <em>Chatter</em>
          </h1>
        </div>
      </div>
      {/* <Profile /> */}
      <ChatList handleClick={handleClick} />
      <Options />
    </div>
  );
}

export default Navbar;
