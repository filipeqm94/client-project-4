import React from 'react';
import Navbar from '../Navbar';
import ChatArea from '../ChatArea';
import SideBar from '../SideBar';
import { useState } from 'react';

function Home() {
  const [chatSocket, setChatSocket] = useState();
  return (
    <div className="main">
      <Navbar />
      <ChatArea chatSocket={chatSocket} setChatSocket={setChatSocket} />
      <SideBar chatSocket={chatSocket} setChatSocket={setChatSocket} />
    </div>
  );
}

export default Home;
