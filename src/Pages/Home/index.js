import React from 'react';
import Navbar from '../Navbar';
import ChatArea from '../ChatArea';
import SideBar from '../SideBar';
import { useState } from 'react';

function Home() {
  const [chatSocket, setChatSocket] = useState();
  const [chatRoom, setChatRoom] = useState('');
  const [messages, setMessages] = useState([]);

  if (chatSocket !== undefined) {
    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };
  }

  return (
    <div className="main">
      <Navbar />
      <ChatArea
        chatSocket={chatSocket}
        setChatSocket={setChatSocket}
        chatRoom={chatRoom}
        messages={messages}
        setMessages={setMessages}
      />
      <SideBar
        chatSocket={chatSocket}
        setChatSocket={setChatSocket}
        setChatRoom={setChatRoom}
      />
    </div>
  );
}

export default Home;
