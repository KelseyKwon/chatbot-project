import React from "react";
import botku from '../img/botku.png'
import studentku from '../img/studentku.png'
import "./Message.css";

function Message({ text, time, isUser }) {
    return (
        <div className={`message-container ${isUser ? "user" : "bot"}`}>
            <img
                className="message-avatar"
                src={isUser ? studentku : botku}
                alt="avatar"
            />
            <div className="message-bubble">{text}</div>
            <span className="message-time">{time}</span>
        </div>
    );
}

export default Message;
