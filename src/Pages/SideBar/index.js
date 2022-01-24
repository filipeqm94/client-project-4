import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthState, useAuthDispatch } from '../../Context/context';
import axiosInstance from '../../Context/axios';
import { setUsersList } from '../../Context/actions';

function SideBar({ setChatSocket, chatSocket, setChatRoom }) {
  const { username, usersList } = useAuthState();
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    axiosInstance
      .get('test/')
      .then((res) => {
        if ('response' in res) throw res;
        console.log('<<<<< Auth Success >>>>>');
        setUsersList(dispatch, res.data)
      })
      .catch((error) => {
        console.log('<<<<< Auth Error >>>>>');
        localStorage.clear();
        navigate('/login');
      });
  }, []);

  function handleClick(targetUser) {
    // if there is an existing socket, close it
    if (chatSocket) {
      chatSocket.close();
    }

    // formulate room name
    const chatRoomName = [username, targetUser].sort().join('_');
    setChatRoom(chatRoomName)
    const usernames = chatRoomName.split('_');
    const newChatSocket = new WebSocket(
      process.env.REACT_APP_WS_URL + chatRoomName + '/'
    );

    setChatSocket(newChatSocket);
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

  return (
    <div className="sidebar-container">
      {usersList.map(({ username }) => (
        <button key={username} onClick={() => handleClick(username)}>
          {username}
        </button>
      ))}
    </div>
  );
}

export default SideBar;
