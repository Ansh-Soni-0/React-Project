import React, { useRef, useState } from "react";

const ChatForm = ({chatHistory , setChatHistory , generateBotResponce}) => {

    
    const [userMessage , setUserMessage] = useState("");

    // const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
       
        if(!userMessage) return;

        setUserMessage("");

        // console.log(userMessage.trim());

        // update the chat history with the user's message
        setChatHistory(history => [...history , { role:"user" , text:userMessage.trim() }])


        
        setTimeout(() => {
            // add a (thinking...) placeholder for the bot's response
            setChatHistory(history => [...history , { role:"model" , text:"Thinking..." }])

            //call the funtion to generate the bot's responce
            generateBotResponce([...chatHistory , {role:"user" , text:userMessage.trim()}]);
        }, 600);
             
       
    }
  return (
    <form 
    onSubmit={handleFormSubmit}
    action="#" 
    className="chat-form">
      <input
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        // ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />

      <button 
      className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
