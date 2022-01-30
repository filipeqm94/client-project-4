import maleIcon from '../../assets/images/male.png';

function ChatList() {
  return (
    <div className="chatlist-container">
      <div className="chat-group">
        {/* ex: friends (saved users), active chats */}
        <h3>Chats</h3>
        <button className="active-group-btn">active</button>
        <button className="closed-group-btn">closed</button>
        <div className="chat-preview">
          <div className="user-img-holder">
            <img src={maleIcon} alt="user icon" />
          </div>
          <div className="chat-info">
            <h6>Victor W.</h6>
            {/* chat preview - truncated */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
