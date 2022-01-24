import { useAuthState } from '../../Context/context';

function SideBar({ setChatSocket, chatSocket }) {
  const { username, usersList } = useAuthState();

  function handleClick(targetUser) {
    // if there is an existing socket, close it
    if (chatSocket) {
      chatSocket.close();
    }

    // formulate room name
    const chatRoomName = [username, targetUser].sort().join('_');
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
