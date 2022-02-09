import './styles.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthState, useAuthDispatch } from '../../Context/context';
import axiosInstance from '../../Context/axios';
import {
  setUsersList,
  setActiveChat,
  setChatRoom,
  setChatSocket,
} from '../../Context/actions';

function SideBar() {
  const {
    username,
    usersList,
    primary_language,
    learning_language,
    chatSocket,
  } = useAuthState();
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(
        `getusers/?primary_language=${primary_language}&learning_language=${learning_language}`
      )
      .then((res) => {
        if ('response' in res) throw res;
        setUsersList(dispatch, res.data);
      })
      .catch(() => {
        localStorage.clear();
        navigate('/login');
      });
  }, []);

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

  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <h3>Chatters speaking</h3>
        <button>
          <h4>{learning_language?.toUpperCase()}</h4>
        </button>
      </div>

      <div className="sidebar-users-holder">
        {usersList.map(({ username }) => (
          <button
            className="sidebar-users"
            key={username}
            onClick={() => handleClick(username)}
          >
            {username}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
