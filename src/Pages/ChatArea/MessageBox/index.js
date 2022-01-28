import { useState } from 'react';

import {useAuthState} from "../../../Context/context"

function MessageBox({ chatSocket }) {
  const [chatMessage, setChatMessage] = useState('');
  const {user_id} = useAuthState()

  const changeHandler = (ev) => {
    setChatMessage(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    chatSocket.send(
      JSON.stringify({
        type: 'chat_message',
        sender: user_id,
        message: chatMessage,
      })
    );
  };

  return (
    <div className="msg-box-container">
      <div className="msg-box-form">
        <p id="chat-text-area"></p>
        <form>
          <textarea onChange={changeHandler} className='message-box'>

          </textarea>
          <button type="submit" value="Send" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
