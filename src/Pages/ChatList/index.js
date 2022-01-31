import maleIcon from '../../assets/images/male.png';
import femaleIcon from '../../assets/images/female.png';

function ChatList() {
  return (
    <div className="chatlist-container">
      <div className="chat-group">
        {/* ex: friends (saved users), active chats */}
        <h3>Chats</h3>
        <div className="chat-group-btns">
          <button className="active-group-btn">active</button>
          <button className="closed-group-btn">closed</button>
        </div>
        <div className="chat-preview">
          <div className="user-img-holder">
            <img src={maleIcon} alt="user icon" />
          </div>
          <div className="chat-info">
            <h3 className="chat-info-name">Victor W.</h3>
            {/* chat preview - truncated */}
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="chat-preview">
          <div className="user-img-holder">
            <img src={maleIcon} alt="user icon" />
          </div>
          <div className="chat-info">
            <h3 className="chat-info-name">Filipe M.</h3>
            {/* chat preview - truncated */}
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="chat-preview">
          <div className="user-img-holder">
            <img src={femaleIcon} alt="user icon" />
          </div>
          <div className="chat-info">
            <h3 className="chat-info-name">Anne B.</h3>
            {/* chat preview - truncated */}
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
