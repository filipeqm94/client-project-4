import './styles.scss';
import { useEffect } from 'react';
import { useAuthState, useAuthDispatch } from '../../Context';
import axiosInstance from '../../Context/axios';
import { setChatRoomMessages } from '../../Context/actions';
import Chat from './Chat';
import MessageBox from './MessageBox';
import userIcon from '../../assets/images/user.png';

function ChatArea() {
  const { user_id, activeChat, chatRoom } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (chatRoom) {
      axiosInstance
        .get(`/getmessages/${chatRoom}/`)
        .then((res) => setChatRoomMessages(dispatch, res.data.reverse()))
        .catch((error) => console.log(error));
    }
  }, [chatRoom]);

  return (
    <div className="chat-area-container">
      <div className="chat-area-info">
        <div className="user-img-holder">
          <img src={userIcon} alt="user" />
          <h3>{activeChat}</h3>
        </div>
      </div>
      <Chat id={user_id} />
      <MessageBox />
    </div>
  );
}

export default ChatArea;
