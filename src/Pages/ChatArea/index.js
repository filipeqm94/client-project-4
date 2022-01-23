import { useState } from 'react';

import { useAuthState } from '../../Context';

import Chat from './Chat';
import MessageBox from './MessageBox';

function ChatArea() {
  const [chatRooms, setChatRooms] = useState([
    {
      name: '',
      chat_room_group_id: 'test',
    },
  ]);
  const [messages, setMessages] = useState([]);

  const state = useAuthState();

  const chatSocket = new WebSocket(
    process.env.REACT_APP_WS_URL + chatRooms[0].chat_room_group_id + '/'
  );

  chatSocket.onopen = function (event) {
    chatSocket.send(
      JSON.stringify({ type: 'user_info', data: state.username })
    );
  };

  chatSocket.onmessage = function (e) {
    console.log('<<<<< On Message >>>>>');
    console.log(e);
    const data = JSON.parse(e.data);
    console.log(data);
    // setMessages([...messages, data])
  };

  chatSocket.onclose = function (e) {
    console.error('Chat socket closed unexpectedly');
  };

  return (
    <div className="chat-area-container">
      <div className="chat-area-info">
        <h3>prof img</h3>
        <h3>Victor W.</h3>
      </div>
      <Chat messages={messages} user={state.username} />
      <MessageBox chatSocket={chatSocket} />
    </div>
  );
}

export default ChatArea;
