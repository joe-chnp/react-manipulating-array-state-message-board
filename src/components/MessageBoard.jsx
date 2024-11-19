import { useState } from 'react';

function MessageBoard() {
  const [messages, setMessages] = useState(['Hello all ! This is first message.']);
  const [text, setText] = useState('');
  const addMessage = (event) => {
    event.preventDefault();
    const newMessages = [...messages];
    newMessages.push(text);
    setMessages(newMessages);
  };
  const deleteMessage = (messageIndex) => {
    const newMessages = [...messages];
    newMessages.splice(messageIndex, 1);
    setMessages(newMessages);
  };
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={text}
            onChange={(event) => {setText(event.target.value)}}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>Submit</button>
      </div>
      <div class="board">
        {messages.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button className="delete-button" onClick={() => {deleteMessage(index)}}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
