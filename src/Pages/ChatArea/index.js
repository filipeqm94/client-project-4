import Chat from './Chat';
import MessageBox from './MessageBox';

function ChatArea() {
  return (
    <div className='chat-area-container'>
      <div className='chat-area-info'>
        <h3>prof img</h3>
        <h3>Victor W.</h3>
      </div>
      <Chat />
      <MessageBox />
    </div>
  );
}

export default ChatArea;
