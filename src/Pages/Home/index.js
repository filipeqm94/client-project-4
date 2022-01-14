import React from 'react';
import Navbar from '../Navbar';
import ChatArea from '../ChatArea';
import SideBar from '../SideBar';

function Home() {
  return (
    <div>
      <h1>Welcome to Chatter</h1>
      <Navbar />
      <ChatArea />
      <SideBar />
    </div>
  );
}

export default Home;
