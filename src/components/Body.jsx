import React from "react";
import ChatContainer from "./ChatContainer";
import "./Body.css"
import botku from '../img/botku.png'

function Body() {
    return (
        <div className="body-container">
            <div className="welcome-container">
                <img
                    className="welcome-image"
                    src={botku}
                    alt="Mascot"
                />
                <p className="welcome-text">응원한다KU가 모든걸<br />답해줄께KU!</p>
                <div className="button-container">
                    <button className="action-button">응원단 소개</button>
                    <button className="action-button">위치</button>
                    <button className="action-button">일정 및 행사</button>
                    <button className="action-button">입단 문의</button>
                    <button className="action-button">후원 문의</button>
                    <button className="action-button">무대 소개 영상</button>
                </div>
            </div>
            <ChatContainer />
        </div>
    );
}

export default Body;