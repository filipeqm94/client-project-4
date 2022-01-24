import './styles.css';

function Chat({ messages, user, id }) {
  return (
    <div className="chat-msg-container">
      {messages.map((message, index) => {
        return (
          <div
            className={id === message.sender ? 'sender' : 'receiver'}
            key={index}
          >
            <h3>{message.user}:</h3>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
