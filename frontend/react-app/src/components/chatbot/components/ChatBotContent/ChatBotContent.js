import React, {useState, useEffect}  from 'react';
import './ChatBotContent.css';
import ChatInput from './components/ChatInput/ChatInput.js';
import ChatResponse, {ChatGreeting} from './components/ChatResponse/ChatResponse.js'

function ChatBotContent({ userInput }) {

    const [interactions, setInteractions] = useState([
    ]);
    useEffect(() => {
        if (userInput) {
            handleSubmit();
        }
    }, [userInput]);

    const handleSubmit = async () => {
        try {
        let newInteraction = { input: userInput, response: 'Loading...' };
        setInteractions([...interactions, newInteraction]);

        const response = await fetch('http://127.0.0.1:8000/post_query', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        newInteraction = {input: userInput, response: data.message};
        setInteractions([...interactions, newInteraction]);
        console.log(interactions);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    const inputs = interactions.map((interaction, index) => interaction.input);
    const responses = interactions.map((interaction, index) => interaction.response);
    return (
        <div className="chat-container">
            <div className="chat-greeting">
                <ChatGreeting />
            </div>
            {interactions.map((interaction, index) => (
            <div key={index} className="chat-item">
                <div className="chat-message">
                    {interaction.input && <ChatInput text={interaction.input} /> }
                    <ChatResponse text={interaction.response}/>
                </div>
            </div>
            ))}
        </div>
  );
}

export default ChatBotContent;