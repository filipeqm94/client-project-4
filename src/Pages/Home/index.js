import React from 'react';
import Navbar from '../Navbar';
import ChatArea from '../ChatArea';
import SideBar from '../SideBar';
import { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../../Context';
import { setChatRoomMessages } from '../../Context/actions';

function Home() {
  const { chatSocket } = useAuthState();
  const dispatch = useAuthDispatch();

  if (chatSocket != false) {
    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setChatRoomMessages((prevMessages) => [...prevMessages, data]);
    };
  }
  return (
    <div className="main">
      <Navbar />
      <ChatArea chatSocket={chatSocket} />
      <SideBar chatSocket={chatSocket} />
    </div>
  );
}

export default Home;
