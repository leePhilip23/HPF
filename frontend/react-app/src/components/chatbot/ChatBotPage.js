// ChatBotPage.js
import React, { useState } from 'react';
import './ChatBotPage.css';
import gears from '../../icons/icons8-automation-100.png';
import logo from '../../icons/gm-general-motors-new-20212235.jpg';
import TextInput from './components/TextInput/TextInput.js';
import ChatBotContent from './components/ChatBotContent/ChatBotContent.js';

function ChatBotPage() {

  const [userInput, setUserInput] = useState('');

  const handleUserInput = (input) => {
    setUserInput(input);
  };
  return (
    <div className="chatbot-page">
      <div className="chatbot-header">
        <a href="/home" className="sidebar"> Return Home</a>
        <div className="chatbot-gears-container">
          <img src={gears} alt="gears" className="gears" ></img>
        </div>
        <div className="chatbot-logo-container">
          <img src={logo} alt="logo" className="chatbot-gm-logo"></img>
        </div>
      </div>
      <div className="chatbot-content">
        <ChatBotContent userInput={userInput}/>
      </div>

      <div className="chatbot-input">
        <TextInput onUserInput={handleUserInput}/>
      </div>
    </div>
  );
}

export default ChatBotPage;
