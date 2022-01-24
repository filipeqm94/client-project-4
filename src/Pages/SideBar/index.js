import { useAuthState } from '../../Context/context';

function SideBar({ setChatSocket, chatSocket }) {
  const { username, usersList } = useAuthState();

  function handleClick(targetUser) {
    // if there is an existing socket, close it
    if (chatSocket) {
      console.log('closing socket ---->', chatSocket);
      chatSocket.close();
    }

    // formulate room name
    const chat_room_name = [username, targetUser].sort().join('_');
    const newChatSocket = new WebSocket(
      process.env.REACT_APP_WS_URL + chat_room_name + '/'
    );

    setChatSocket(newChatSocket);
    newChatSocket.addEventListener('open', (event) => {
      newChatSocket.send(JSON.stringify({ type: 'open_chat' }));
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
