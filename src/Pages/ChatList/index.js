function ChatList() {
  return (
    <div className='chatlist-container'>
      <div className='chat-group'>
        {/* ex: friends (saved users), active chats */}
        <h3>Active</h3>
        <div className='chat-preview'>
          <h3>users avatars</h3>
          <h3>Victor</h3>
          {/* chat preview - truncated */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
