import React from "react";
import "../styles/Sidebar.css";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <div className="menu">
      <div className="icon-wrapper">
        <a href="mailto:hilarylewis92@gmail.com" target="_blank">
          <AiFillMail className="icon" size={25} />
        </a>
        <a href="https://github.com/hilarylewis92" target="_blank">
          <AiFillGithub className="icon" size={25} />
        </a>
        <a href="https://www.linkedin.com/in/hilarylewis92/" target="_blank">
          <AiFillLinkedin className="icon" size={25} />
        </a>
      </div>
      <div className="menu-content">
        <a className="menu-link">
          <h3 className="menu-title">Portfolio</h3>
          <h6 className="menu-subtitle">Things I've built</h6>
        </a>
        <hr />

        <a className="menu-link">
          <h3 className="menu-title">Resume</h3>
          <h6 className="menu-subtitle">My Experiences</h6>
        </a>
        <hr />

        <a className="menu-link">
          <h3 className="menu-title">Contact</h3>
          <h6 className="menu-subtitle">Get my attention</h6>
        </a>
      </div>
    </div>
  );
};
