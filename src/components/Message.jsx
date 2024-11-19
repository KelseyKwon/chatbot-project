import React from "react";
import botku from '../img/botku.png'
import studentku from '../img/studentku.png'
import "./Message.css";

function Message({ text, time, isUser }) {
    const renderTextWithLinks = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, index) => {
            if (urlRegex.test(part)) {
                return (
                    <a
                        key={index}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="message-link"
                    >
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <div className={`message-container ${isUser ? "user" : "bot"}`}>
            <img
                className="message-avatar"
                src={isUser ? studentku : botku}
                alt="avatar"
            />
            <div className="message-bubble">{renderTextWithLinks(text)}</div>
            <span className="message-time">{time}</span>
        </div>
    );


}

export default Message;
