function MessageBox() {
  return (
    <div className='msg-box-container'>
      <div className='msg-box-form'>
        <form>
          <input className='msg-body' placeholder='Message Victor W.' />
          <input type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
}

export default MessageBox;
