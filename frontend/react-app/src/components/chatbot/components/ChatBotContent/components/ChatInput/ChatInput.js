import React from 'react';
import './ChatInput.css';


function ChatInput({ text }) {
  return (
    <div className="chat-input-container">
        <div className="chat-input">
            {text}
        </div>
        <div className="chat-input-circle">
        </div>
    </div>
    
  );
}

export default ChatInput;
