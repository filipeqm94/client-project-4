import './styles.scss';
import { useEffect, useState } from 'react';
import { useAuthState } from '../../Context';
import axiosInstance from '../../Context/axios';
import Chat from './Chat';
import MessageBox from './MessageBox';
import userIcon from '../../assets/images/user.png';

function ChatArea({ chatSocket, chatRoom, messages, setMessages }) {
  const { username, user_id } = useAuthState();

  useEffect(() => {
    if (chatRoom) {
      axiosInstance
        .get(`/getmessages/${chatRoom}/`)
        .then((res) => setMessages(res.data.reverse()))
        .catch((error) => console.log(error));
    }
  }, [chatRoom]);

  return (
    <div className="chat-area-container">
      <div className="chat-area-info">
        <div className="user-img-holder">
          <img src={userIcon} />
          <h3>
            Chatting with <em>Victor W.</em>
          </h3>
        </div>
      </div>
      <Chat messages={messages} user={username} id={user_id} />
      <MessageBox chatSocket={chatSocket} setMessages={setMessages} />
    </div>
  );
}

export default ChatArea;
