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
<<<<<<< HEAD
    <div className="msg-box-container">
      <div className="msg-box-form">
        <form>
          <input className="msg-body" placeholder="Message Victor W." />
          <input type="submit" value="Send" />
=======
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
>>>>>>> 84c6f85 (co coding testing)
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
