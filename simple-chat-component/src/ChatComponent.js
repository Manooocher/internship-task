import React, { useState } from 'react';
import './ChatComponent.css';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handle = () => {
    if (input.trim() === '') return;

    // add user message
    setMessages([...messages, { text: input, sender: 'user' }]);

    // mock system response
    const systemRes = 'its just a MOCK!';
    setMessages(prev => [...prev, { text: systemRes, sender: 'system' }]);

    setInput(''); // clear input
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'user' ? 'user-message' : 'system-message'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ask something..."
          className="input-field"
        />
        <button
          onClick={handle}
          className="send-button"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;