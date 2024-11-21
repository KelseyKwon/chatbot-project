import React, { useState} from "react";
import ChatContainer from "./ChatContainer";
import Footer from "./Footer"
import "./Body.css"
import botku from '../img/botku.png'

function Body() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const questionsAndAnswers = [
        { question: "응원단 소개", answer: "<모든 건국인들의 청춘과 열정을 수호하는 건국대학교 공식 응원단 악스케이(OX-K)입니다> \n 55년의 전통을 가진 건국대의 응원단으로, 대동제와 신입생을 위한 예비대학을 등 학교 내의 여러 행사에 참가해 공연을 펼치고 있습니다. " },
        { question: "위치", answer: "건국대 학생회관에 위치하고 있습니다. https://maps.app.goo.gl/BS9WuvRoANdurfcx8" },
        { question: "일정 및 행사", answer: "앞으로 예정된 행사는 없습니다." },
        { question: "입단 문의", answer: "인스타그램 @konkuk.oxk에 방문해주세요 ! " },
        { question: "후원 문의", answer: "인스타그램 @konkuk.oxk에 방문해주세요 ! " },
        { question: "무대 소개 영상", answer: "https://youtu.be/K-KnMZ7FiEY?si=wt5XH3JXfm-7nV02" },
    ];

    const handleButtonClick = (question, answer) => {
        const currentTime = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

        // 메시지를 업데이트
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: question, isUser: true, time: currentTime }, 
            { text: answer, isUser: false, time: currentTime },  
        ]);
    };
    
    return (
        <div className="body-container">
        <div className="welcome-container">
            <img
                className="welcome-image"
                src={botku}
                alt="Mascot"
            />
            <p className="welcome-text">응원한다KU가 모든걸<br />답해줄께KU!</p>
        </div>

        <div className="button-container">
            {questionsAndAnswers.map((qa, index) => (
                <button
                    key={index}
                    className="action-button"
                    onClick={() => handleButtonClick(qa.question, qa.answer)}
                >
                    {qa.question}
                </button>
            ))}
        </div>
            <div className="chat-container">
                <ChatContainer messages={messages} />
            </div>
            <Footer onSendMessage={handleSendMessage} />
        </div>
    );
}

export default Body;