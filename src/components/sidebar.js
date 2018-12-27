import React, { Component } from "react";
import "../styles/Sidebar.css";

class Sidebar extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-content">
                    <a className="menu-link">
                        <h3 className="menu-title">Portfolio</h3>
                    </a>
                    <a className="menu-link">
                        <h3 className="menu-title">Resume</h3>
                    </a>
                    <a className="menu-link">
                        <h3 className="menu-title">Contact</h3>
                    </a>
                </div>
            </div>
        );
    }
}

export default Sidebar;
