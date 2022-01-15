import React from 'react';
import Navbar from '../Navbar';
import ChatArea from '../ChatArea';
import SideBar from '../SideBar';

function Home() {
  return (
    <div className='main'>
      <Navbar />
      <ChatArea />
      <SideBar />
    </div>
  );
}

export default Home;
