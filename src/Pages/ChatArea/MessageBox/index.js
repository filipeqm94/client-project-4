import { useState } from 'react';

import {useAuthState} from "../../../Context/context"

function MessageBox({ chatSocket, setMessages }) {
  const [chatMessage, setChatMessage] = useState('');
  const {username} = useAuthState()

  const changeHandler = (ev) => {
    setChatMessage(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    chatSocket.send(
      JSON.stringify({
        type: 'chat_message',
        message: chatMessage,
        sender: username,
      })
    );
  };

  return (
    <div className="msg-box-container">
      <div className="msg-box-form">
        <p id="chat-text-area"></p>
        <form>
          <input
            className="msg-body"
            placeholder="Message Victor W."
            onChange={changeHandler}
          />
          <button type="submit" value="Send" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
