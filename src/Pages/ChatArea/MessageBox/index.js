import './styles.scss';
import { useState } from 'react';
import { useAuthState, useAuthDispatch } from '../../../Context/context';
import sendIcon from '../../../assets/images/send.png';

function MessageBox() {
  const [chatMessage, setChatMessage] = useState('');
  const { user_id, chatSocket } = useAuthState();

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

    setChatMessage('');
  };

  return (
    <div className="msg-box-container">
      <div className="msg-box-form">
        <p id="chat-text-area"></p>
        <form>
          <textarea
            onChange={changeHandler}
            value={chatMessage}
            className="message-box"
          ></textarea>
          <button type="submit" value="Send" onClick={submitHandler}>
            <img src={sendIcon} alt="send icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
