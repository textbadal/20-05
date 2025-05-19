import React, { useState } from 'react';
import './LiveChat.css';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="live-chat-container">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h4>Live Support</h4>
            <button onClick={toggleChat}><FaTimes /></button>
          </div>

          <div className="chat-body">
            {messages.length === 0 ? (
              <p className="placeholder">Hi there 👋 How can we help you?</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))
            )}
          </div>

          <form onSubmit={sendMessage} className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      <button className="chat-toggle-btn" onClick={toggleChat}>
        <FaCommentDots size={22} />
      </button>
    </div>
  );
};

export default LiveChat;
