import React from "react";
import Message from "./Message";

import "./ChatContainer.css";


function ChatContainer() {
  return (
      <div className="chat-container">
          <Message time="9:00" text="안녕하세요!" isUser={false} />
          <Message time="9:01" text="안녕하세요! 무엇을 도와드릴까요?" isUser={true} />
      </div>
  );
}

export default ChatContainer;