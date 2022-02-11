import React from 'react';
import Navbar from '../Navbar';
import ChatArea from '../ChatArea';
import SideBar from '../SideBar';
import { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../../Context';
import {
  setChatRoomMessages,
  setActiveChat,
  setChatRoom,
  setChatSocket,
} from '../../Context/actions';

function Home() {
  const { chatSocket, username } = useAuthState();
  const dispatch = useAuthDispatch();

  function handleClick(targetUser) {
    // if there is an existing socket, close it
    if (chatSocket) {
      chatSocket.close();
    }
    setActiveChat(dispatch, targetUser);
    // formulate room name
    const chatRoomName = [username, targetUser].sort().join('_');
    setChatRoom(dispatch, chatRoomName);
    const usernames = chatRoomName.split('_');
    const newChatSocket = new WebSocket(
      process.env.REACT_APP_WS_URL + chatRoomName + '/'
    );

    setChatSocket(dispatch, newChatSocket);
    newChatSocket.addEventListener('open', (event) => {
      newChatSocket.send(
        JSON.stringify({
          type: 'open_chat',
          user_one: usernames[0],
          user_two: usernames[1],
        })
      );
    });
  }

  if (chatSocket != false) {
    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setChatRoomMessages((prevMessages) => [...prevMessages, data]);
    };
  }
  return (
    <div className="main">
      <Navbar handleClick={handleClick} />
      <ChatArea chatSocket={chatSocket} />
      <SideBar chatSocket={chatSocket} handleClick={handleClick} />
    </div>
  );
}

export default Home;
