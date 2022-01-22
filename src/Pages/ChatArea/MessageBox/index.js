import { useState } from 'react';

function MessageBox({ chatSocket }) {
  const [chatMessage, setChatMessage] = useState('');

  const changeHandler = (ev) => {
    setChatMessage(ev.target.value);
  };
  const submitHandler = (ev) => {
    ev.preventDefault();

    chatSocket.send(
      JSON.stringify({
        message: chatMessage,
      })
    );
  };

  return (
    <div className='msg-box-container'>
      <div className='msg-box-form'>
        <p id='chat-text-area'></p>
        <form>
          <input
            className='msg-body'
            placeholder='Message Victor W.'
            onChange={changeHandler}
          />
          <button type='submit' value='Send' onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
