import './styles.scss';
import Profile from '../Profile';
import ChatList from '../ChatList';
import Options from '../Options';
import chatterLogo from '../../assets/images/chatter-logo.png';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <div id="logo-holder">
          <h1 className="logo">
            <em>Chatter</em>
          </h1>
        </div>
      </div>
      <Profile />
      <ChatList />
      <Options />
    </div>
  );
}

export default Navbar;
