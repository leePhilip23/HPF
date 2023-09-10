import React from 'react';
import './ChatResponse.css';
import gears from './icons8-automation-100.png';

function ChatResponse({ text }) {
  return (
    <div className="chat-response-container">
      <div className="chat-response-circle">
        <img src={gears} alt="gears"></img>
      </div>
      <div className="chat-response">
        {text}
      </div>
    </div>
  );
};

function ChatGreeting () {
  return (
    <ChatResponse text={"Hello I am autobot! How can I help you today?"}/>
  )
};

export default ChatResponse;
export {ChatGreeting};
