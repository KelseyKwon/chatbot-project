import React from "react";

import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="input-container">
                <input
                    className="input-box"
                    placeholder="물어보고 싶은것을 보내주세요."
                />
                <button className="input-button">입력</button>
            </div>
        </div>
    );
}

export default Footer;
