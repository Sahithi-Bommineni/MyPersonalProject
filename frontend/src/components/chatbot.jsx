import "../style/homepage.css";

function Chatbot(){
    return (
        <>
        <div className="chatbot-container">
            <div className="chatbot-header">Assistant Chat</div>
            <div className="chat-messages" id="chatMessages">
                
            </div>
            <div className="chat-input-container">
                <input type="text" className="chat-input" placeholder="Type your message..." id="chatInput"/>
                <button className="send-btn">Send</button>
            </div>
        </div>
        </>
        
    );
}

export default Chatbot;
