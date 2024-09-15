import React, { useState } from 'react';
import './Chatbox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="chatbox-container">
      {/* Header */}
      <div className="chatbox-header">
        <h2>Fruit.AI Chat</h2>
      </div>

      {/* Chat messages area */}
      <div className="chatbox-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbox-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
