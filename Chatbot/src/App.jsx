import { useState ,useRef, useEffect } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {

  const [chatHistory , setChatHistory] = useState([]);
  const chatBodyRef = useRef();


  const generateBotResponce = async (history) => {

    //helper function to update chat history
    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking...") , {role: "model" , text}]);
    }

    // foramte chat history for api request 
    history = history.map(({role , text}) => ({role , parts : [{text}]}));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({contents : history})
    }
    
    try {
      // get url from .env file 
      const API_URL = import.meta.env.VITE_API_URL;

      const responce = await fetch(API_URL , requestOptions)
      const data = await responce.json()

      if(!responce.ok) throw new Error(data.error.message || "something went wrong!")

      // console.log(data)

      //clean and update the chat with bot's responce history
      const apiResponceText = data.candidates[0].content.parts[0].text.replace(/[^a-zA-Z0-9\s]/g, '').trim();

      // console.log(apiResponceText)

      updateHistory(apiResponceText);

    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    //auto scroll whneever chat history updated
    chatBodyRef.current.scrollTo({ top : chatBodyRef.current.scrollHeight , behavior: "smooth" })
  }, [chatHistory]);
  

   return (
    <div className="container">
      <div className="chatbot-popup">


        {/* chatbot header  */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>

          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>


        </div>


        {/* chatbot body  */}
        <div 
        ref={chatBodyRef}
        className="chat-body">

          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋 <br /> How can i help you today?
            </p>
          </div>
          


          {/* render the chat history dynamically  */}
          {
            chatHistory.map((chat , idx) => {
              return (
                  <ChatMessage
                  key={idx} 
                  chat={chat}
                  />
              )
            })
          }

        </div>


        {/* chatbot footer  */}
        <div className="chat-footer">
          <ChatForm 
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateBotResponce={generateBotResponce}
          />
        </div>


      </div>
    </div>
  );
};

export default App;
