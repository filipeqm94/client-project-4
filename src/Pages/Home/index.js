import React from 'react';
import Navbar from '../Navbar';
import ChatArea from '../ChatArea';
import SideBar from '../SideBar';
import { useState } from 'react';

function Home() {
  const [chatSocket, setChatSocket] = useState();
  const [chatRoom, setChatRoom] = useState('');

  if (chatSocket !== undefined) {
    chatSocket.onmessage = function (e) {
      console.log(e);
    };
  }
  return (
    <div className="main">
      <Navbar />
      <ChatArea
        chatSocket={chatSocket}
        setChatSocket={setChatSocket}
        chatRoom={chatRoom}
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
