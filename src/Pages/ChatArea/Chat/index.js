import './styles.scss';
import { useEffect } from 'react';

function Chat({ messages, id }) {
  function scrollBottom() {
    const msgContainer =
      document.getElementsByClassName('chat-msg-container')[0];
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  useEffect(() => {
    scrollBottom();
  }, [messages]);

  return (
    <div className="chat-msg-container">
      {messages
        ? messages.map((message, index) => {
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
