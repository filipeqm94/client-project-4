import './styles.scss';
import maleIcon from '../../assets/images/male.png';
import femaleIcon from '../../assets/images/female.png';
import { useAuthState } from '../../Context';

function ChatList({ handleClick }) {
  const { userChatList } = useAuthState();
  console.log(userChatList);
  return (
    <div className="chatlist-container">
      <div className="chat-group">
        {/* ex: friends (saved users), active chats */}
        <h3>Active Chats</h3>
        {/* <div className="chat-group-btns">
          <button className="active-group-btn">active</button>
          <button className="closed-group-btn">closed</button>
        </div> */}
        {userChatList
          ? userChatList.map((username) => {
              return (
                <div
                  className="chat-preview"
                  onClick={() => handleClick(username)}
                >
                  <div className="user-img-holder">
                    <img src={maleIcon} alt="user icon" />
                  </div>
                  <div className="chat-info">
                    <h3 className="chat-info-name">{username}</h3>
                    {/* chat preview - truncated */}
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ChatList;
