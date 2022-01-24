import { useState } from 'react';

import { useAuthState } from '../../Context';

import Chat from './Chat';
import MessageBox from './MessageBox';

function ChatArea({ chatSocket }) {
  const [messages, setMessages] = useState([]);

  const { username } = useAuthState();
  console.log('chat area --->', chatSocket);

  return (
    <div className="chat-area-container">
      <div className="chat-area-info">
        <h3>prof img</h3>
        <h3>Victor W.</h3>
      </div>
      <Chat messages={messages} user={username} />
      <MessageBox chatSocket={chatSocket} />
    </div>
  );
}

export default ChatArea;
