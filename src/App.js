import React from "react";
import "./styles/App.css";
import { Resume } from "./components/resume";
import { Sidebar } from "./components/sidebar";

export const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Resume />
    </div>
  );
};
