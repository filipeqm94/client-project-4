import './styles.css';

function Chat({ messages, user, id }) {
  return (
    <div className="chat-msg-container">
      {messages ? messages.map((message, index) => {
        return (
          <div
            className={`message ${id === message.sender ? 'sender' : 'receiver'}`}
            key={index}
          >
            <h3>{message.user}:</h3>
            <p>{message.message}</p>
          </div>
        );
      }) : null}
    </div>
  );
}

export default Chat;
