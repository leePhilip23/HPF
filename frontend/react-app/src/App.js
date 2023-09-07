// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChatBotPage from './components/chatbot/ChatBotPage'; // Import your ChatBotPage component
import HomePage from './components/home/HomePage'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/chatbot" element={<ChatBotPage/>} />
          {/* Define other routes here */}
        </Routes>
    </Router>
  );
}

export default App;
