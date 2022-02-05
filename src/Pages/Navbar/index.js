import './styles.scss';
import Profile from '../Profile';
import ChatList from '../ChatList';
import Options from '../Options';
import chatterLogo from '../../assets/images/chatter-logo.png';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <h1 id="logo">Chatter</h1>
      </div>
      <Profile />
      {/* <ChatList /> */}
      <Options />
    </div>
  );
}

export default Navbar;
