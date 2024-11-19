import React, { useState } from "react";
import "./Footer.css";

function Footer({ onSendMessage }) {
    const [userInput, setUserInput] = useState("");
    
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = async () => {
        if (userInput.trim()) {
            const message = {
                text: userInput,
                isUser: true,
                time: new Date().toLocaleTimeString(),
            };

            onSendMessage(message);
            setUserInput(""); 

            try {
                const response = await fetch("/api/messages", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message }),
                });

                if (!response.ok) {
                    console.error("메시지 저장 실패");
                }
            } catch (error) {
                console.error("서버 오류:", error);
            }
        }
    };


    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="footer-container">
            <div className="footer-input-wrapper">
            <input
                    type="text"
                    className="footer-input"
                    placeholder="물어보고 싶은 것을 보내주세요."
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <div className="footer-submit-wrapper" onClick={handleSendMessage}>
                    <div className="footer-submit">입력</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
