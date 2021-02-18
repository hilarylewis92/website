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
      <h6 className="menu-name">Hilary Lewis</h6>
    </div>
  );
};

// {
//   "title": "Front End Web Developer",
//   "company": "FleetCreature",
//   "date": {
//     "from": "January 2017",
//     "to": "June 2017"
//   },
//   "description": "Utilized TDD to lead a group of developers in the creation of a scheduling application. In charge of cross browser testing, fixing bugs, and styling multiple web applications.",
//   "skillsList": [
//     "TDD",
//     "React/Redux",
//     "JavaScript",
//     "Wordpress",
//     "Accessibility",
//     "Sass/CSS3/Bootstrap"
//   ]
// },
// {
//   "title": "Lead Campus Instructor",
//   "company": "Girls Who Code",
//   "date": {
//     "from": "May 2017",
//     "to": "August 2017"
//   },
//   "description": "Taught high school girls the fundamentals of computer science, HTML, CSS, and JavaScript.",
//   "skillsList": [
//     "Teaching",
//     "JavaScript",
//     "CSS3",
//     "HTML5",
//     "Computer Science"
//   ]
// },
// {
//   "title": "Algebra Teacher",
//   "company": "Manitou Springs School District",
//   "date": {
//     "from": "July 2014",
//     "to": "June 2016"
//   },
//   "description": "Designed and implemented the math department’s curriculum centered around technology.",
//   "skillsList": ["Teaching", "Mathematics", "Swift", "Computer Science"]
// }
