import React, { useRef, useEffect } from "react";
import Message from "./Message";

import "./ChatContainer.css";


function ChatContainer({ messages = [], loadPreviousMessages}) {
  const containerRef = useRef();
  const messageEndRef = useRef(); 

  const scrollToBottom = () => {
    if(messageEndRef.current) {
      messageEndRef.current.scrollTop = messageEndRef.current.scrollHeight;
    }
  }
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  return (
    <div
    className="chat-container"
    ref={containerRef} // 컨테이너 참조
>
        {messages.map((message, index) => (
            <Message
                key={index}
                text={message.text}
                isUser={message.isUser}
            />
        ))}
        <div ref={messageEndRef}></div>
    </div>
);
}

export default ChatContainer;