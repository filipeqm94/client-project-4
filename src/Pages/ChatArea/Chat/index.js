import './styles.css'

function Chat({ messages, user }) {
  return (
    <div className="chat-msg-container">
      {messages.map((message) => {
        return (
          <div className={user === message.user ? "sender" : "receiver"}>
            <h3>{message.user}:</h3>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Chat;
