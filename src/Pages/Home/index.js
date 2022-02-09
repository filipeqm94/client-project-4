import React from 'react';
import Navbar from '../Navbar';
import ChatArea from '../ChatArea';
import SideBar from '../SideBar';
import { useState } from 'react';
import { useAuthState } from '../../Context';

function Home() {
  const [messages, setMessages] = useState([]);
  const { chatSocket } = useAuthState();

  if (chatSocket != false) {
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
        messages={messages}
        setMessages={setMessages}
      />
      <SideBar chatSocket={chatSocket} />
    </div>
  );
}

export default Home;
