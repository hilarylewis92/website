import React, { Component } from "react";
import "../styles/Sidebar.css";

export const Sidebar = () => {
    return (
        <div className="menu">
            <div className="menu-content">
                {/* <a className="menu-link">
                    <h3 className="menu-title">Portfolio</h3>
                </a> */}
                <a className="menu-link">
                    <h3 className="menu-title">Resume</h3>
                    <svg
                        className="menu__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="15"
                        viewBox="-52.5 0 120 15"
                    >
                        <path d="M4.182 13.166v.438h6.636v-.694H4.182M13.56 1.396H1.515c-.45 0-.816.326-.816.776v8.777c0 .448.366.917.816.917h3.61c.246.14.413.402.413.705l-.002.01h4l-.002-.01c0-.303.167-.565.413-.705h3.608c.45 0 .742-.47.742-.918V2.17c0-.45-.292-.776-.74-.776zm-.308 9.112h-.514c-.17 0-.31-.102-.31-.272 0-.17.14-.27.31-.27h.514c.17 0 .308.1.308.27s-.138.272-.308.272zM1.38 9.01V2.076h12.178V9.01H1.38z" />
                        <line
                            fill="none"
                            stroke="#000000"
                            x1="-42.5"
                            y1="7.25"
                            x2="-4.5"
                            y2="7.25"
                        />
                        <line
                            fill="none"
                            stroke="#000000"
                            x1="19.5"
                            y1="7.25"
                            x2="57.5"
                            y2="7.25"
                        />
                    </svg>
                    <h6 className="menu-subtitle subtitle">
                        View my experience
                    </h6>
                </a>
                {/* <a className="menu-link">
                    <h3 className="menu-title">Contact</h3>
                </a> */}
            </div>
        </div>
    );
};
