// ChatBotPage.js
import React, { useState, useEffect, useRef } from 'react';
import './ChatBotPage.css';
import gears from '../../icons/icons8-automation-100.png';
import logo from '../../icons/gm-general-motors-new-20212235.jpg';
import menu from '../../icons/icons8-menu-100.png';
import TextInput from './components/TextInput/TextInput.js';
import ChatBotContent from './components/ChatBotContent/ChatBotContent.js';

function ChatBotPage() {

  const [userInput, setUserInput] = useState('');
  const contentContainerRef = useRef(null); // Create a ref for the content container

  const handleUserInput = (input) => {
    setUserInput(input);
  };

  // Scroll to the bottom of the page when userInput changes
  useEffect(() => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTop = contentContainerRef.current.scrollHeight;
    }

    // Scroll to the bottom of the page
    window.scrollTo(0, 10000);
    console.log(document.body.clientHeight);
  }, [userInput]);

  return (
    <div className="chatbot-page">
      <div className="chatbot-header">
        <a href="/home" className="sidebar">
          <img src={menu} alt='menu' className="chatbot-header-menu"></img>
        </a>
        <div className="chatbot-gears-container">
          <img src={gears} alt="gears" className="chatbot-header-gears" ></img>
        </div>
        <div className="chatbot-logo-container">
          <img src={logo} alt="logo" className="chatbot-gm-logo"></img>
        </div>
      </div>
      <div className="chatbot-content-container"> 
        <div className="chatbot-content">
          <ChatBotContent userInput={userInput}/>
        </div>
      </div>
      <div className="chatbot-input">
        <TextInput onUserInput={handleUserInput}/>
      </div>
    </div>
  );
}

export default ChatBotPage;
