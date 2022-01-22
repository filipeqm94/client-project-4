import Chat from './Chat';
import MessageBox from './MessageBox';
import { useState } from 'react';

function ChatArea() {
  const [chatRooms, setChatRooms] = useState([
    {
      name: '',
      chat_room_group_id: 'test',
    },
  ]);

  const chatSocket = new WebSocket(
    process.env.REACT_APP_WS_URL + chatRooms[0].chat_room_group_id + '/'
  );

  chatSocket.onmessage = function (e) {
    console.log('<<<<< On Message >>>>>');
    console.log(e);
    const data = JSON.parse(e.data);
    document.querySelector('#chat-text-area').textContent +=
      data.message + '\n';
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
      <Chat />
      <MessageBox chatSocket={chatSocket} />
    </div>
  );
}

export default ChatArea;
