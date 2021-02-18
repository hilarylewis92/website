import React from "react";
import "../styles/Sidebar.css";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <div className="menu">
      <div className="icon-wrapper">
        <AiFillMail className="icon" size={25} />
        <AiFillGithub className="icon" size={25} />
        <AiFillLinkedin className="icon" size={25} />
      </div>
      <div className="menu-content">
        <a className="menu-link">
          <h3 className="menu-title">Things I've built</h3>
        </a>
        <hr />

        <a className="menu-link">
          <h3 className="menu-title">My Experiences</h3>
        </a>
        <hr />

        <a className="menu-link">
          <h3 className="menu-title">Get my attention</h3>
        </a>
      </div>
    </div>
  );
};
