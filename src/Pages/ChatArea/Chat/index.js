import './styles.scss';
import { useEffect } from 'react';
import { useAuthState } from '../../../Context';

function Chat({ id }) {
  const { chatRoomMessages } = useAuthState();
  function scrollBottom() {
    const msgContainer =
      document.getElementsByClassName('chat-msg-container')[0];
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  useEffect(() => {
    scrollBottom();
  }, [chatRoomMessages]);

  return (
    <div className="chat-msg-container">
      {chatRoomMessages
        ? chatRoomMessages.map((message, index) => {
            return (
              <div
                className={`message ${
                  id === message.sender ? 'sender' : 'receiver'
                }`}
                key={index}
              >
                <p>{message.message}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Chat;
