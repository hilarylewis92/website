import React, { Component } from "react";
import "./styles/App.css";
import Resume from "./components/resume";
import Sidebar from "./components/sidebar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <Resume />
            </div>
        );
    }
}

export default App;
