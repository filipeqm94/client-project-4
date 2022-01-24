import { useState } from 'react';

import { useAuthState, useAuthDispatch } from '../../Context/context';
import { setSocket } from '../../Context/actions';

function SideBar() {
  const [chatSocket, setChatSocket] = useState();

  const { username, usersList } = useAuthState();
  const dispatch = useAuthDispatch();

  function handleClick(targetUser) {
    // if there is an existing socket, close it
    if (chatSocket) {
      console.log('should only see this if socket is open', chatSocket);
      chatSocket.close();
    }

    // formulate room name
    const chat_room_name = [username, targetUser].sort().join('_');
    const socketUrl = process.env.REACT_APP_WS_URL + chat_room_name + '/';

    // set socket with formulated room name
    setChatSocket(new WebSocket(socketUrl));

    // send socket to context state
    setSocket(dispatch, chatSocket);
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
