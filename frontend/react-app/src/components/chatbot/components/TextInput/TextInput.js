import React, { useState } from 'react';
import './TextInput.css';
import send from './icons8-send-button-100.png';
import plus from './icons8-plus-100.png';

function QueryForm({ onUserInput }) {
  const [query, setQuery] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.value;
    onUserInput(input); // Call the callback to update userInput in the parent
    setQuery(''); // Clear the input value
  };

  return (
    <div className="text-input-container">
        <img src={plus} alt="plus-sign" className="input-icon"></img>
        <form onSubmit={handleSubmit} className="chatbot-text-input-field-container">
            <textarea
            type="text"
            className="chatbot-text-input-field"
            placeholder="Enter your query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                handleSubmit(e);
                }
            }}
            />
        </form>
        <img src={send} alt="send" className="input-icon"></img>
    </div>
  );
}

export default QueryForm;

