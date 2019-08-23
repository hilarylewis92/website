import React, { Component } from "react";
import "../styles/Resume.css";
import "../styles/Grids.css";
const workExperience = require("../resume.json");

class Resume extends Component {
    render() {
        return (
            <div className="Resume">
                <section className="section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
                                <div className="heading">
                                    <h1 className="heading-title">
                                        Hilary Lewis
                                    </h1>
                                    <h6 className="heading-subtitle">
                                        <a href="mailto:hilarylewis92@gmail.com">
                                            hilarylewis92@gmail.com
                                        </a>{" "}
                                        <span className="hidden-sm-down">
                                            {" "}
                                            •
                                        </span>{" "}
                                        <a href="tel:3039470034">
                                            303 947 0034
                                        </a>{" "}
                                        <span className="hidden-sm-down">
                                            {" "}
                                            •
                                        </span>{" "}
                                        <a
                                            href="https://github.com/hilarylewis92"
                                            target="_blank"
                                        >
                                            GitHub
                                        </a>{" "}
                                        <span className="hidden-sm-down">
                                            {" "}
                                            •
                                        </span>{" "}
                                        <a
                                            href="https://www.linkedin.com/in/hilarylewis92/"
                                            target="_blank"
                                        >
                                            LinkedIn
                                        </a>{" "}
                                    </h6>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-lg-3">
                                        <h2 className="resume-heading">
                                            Overview
                                        </h2>
                                    </div>
                                    <div className="col-xs-12 col-lg-9">
                                        <div className="resume-category">
                                            <p className="resume-intro">
                                                As a creative Frontend Engineer,
                                                I value using both my left and
                                                right brain. My technical skills
                                                help me solve challenging
                                                problems and write efficient
                                                code, while my creative side
                                                encourages me to develop clean
                                                and unique user interfaces.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-lg-3">
                                        <h2 className="resume-heading">
                                            Work Experience
                                        </h2>
                                    </div>
                                    <div className="col-xs-12 col-lg-9">
                                        <div className="resume-category">
                                            {workExperience.map(experience => {
                                                return (
                                                    <div className="resume-position">
                                                        <h4>
                                                            {experience.title}
                                                            <small className="resume-role">
                                                                {experience.company} | {experience.date.from} -
                                                                {experience.date.to}
                                                            </small>
                                                        </h4>
                                                        <p>{experience.description}</p>
                                                        <h6 className="heading-subtitle tech-stack">
                                                            {experience.skillsList.map((skill, i) => {
                                                                return (
                                                                    <span>
                                                                        {skill}{i === experience.skillsList.length-1 ? "" : <span className="hidden-sm-down">{" "}•{" "}</span>}
                                                                    </span>
                                                                )
                                                            })}
                                                        </h6>
                                                    </div>
                                                )
                                            })}   
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-lg-3">
                                        <h2 className="resume-heading">
                                            Education
                                        </h2>
                                    </div>
                                    <div className="col-xs-12 col-lg-9">
                                        <div className="resume-category">
                                            <div className="resume-position">
                                                <h4>
                                                    B.S Mathematics | Secondary
                                                    Math Education Concentration
                                                    | 3.75
                                                    <small className="resume-role">
                                                        Baylor University
                                                    </small>
                                                </h4>
                                            </div>
                                            <div className="resume-position">
                                                <h4>
                                                    Frontend Engineering
                                                    <small className="resume-role">
                                                        Turing School of
                                                        software and design
                                                    </small>
                                                </h4>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-lg-3">
                                        <h2 className="resume-heading">
                                            Technical Expertise
                                        </h2>
                                    </div>
                                    <div className="col-xs-12 col-lg-9">
                                        <div className="resume-position">
                                            <div className="row">
                                                <div className="col-xs-12 col-lg-4">
                                                    <h4>
                                                        PROFESSIONAL SKILL SET
                                                    </h4>
                                                    <ul className="resume-list">
                                                        <li>HTML5</li>
                                                        <li>
                                                            CSS3/SASS/Styled
                                                            Components
                                                        </li>
                                                        <li>
                                                            JavaScript/TypeScript
                                                        </li>
                                                        <li>React/Redux</li>
                                                        <li>NodeJS</li>
                                                        <li>WordPress</li>
                                                        <li>
                                                            Microservice
                                                            Architecture
                                                        </li>
                                                        <li>REST APIs</li>
                                                        <li>Animations/D3</li>
                                                        <li>
                                                            Project Management
                                                        </li>
                                                        <li>UX/UI</li>
                                                        <li>Git</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-12 col-lg-4">
                                                    <h4>WORKING KNOWLEDGE</h4>
                                                    <ul className="resume-list">
                                                        <li>Angular</li>
                                                        <li>Graphql/Apollo</li>
                                                        <li>MongoDB</li>
                                                        <li>
                                                            NoSQL/PostgreSQL
                                                        </li>
                                                        <li>PHP</li>
                                                        <li>Websockets</li>
                                                        <li>
                                                            NoSQL/PostgreSQL
                                                        </li>
                                                        <li>Docker/Jenkins</li>
                                                        <li>Python</li>
                                                        <li>Golang</li>
                                                        <li>User Testing</li>
                                                        <li>TDD</li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-12 col-lg-4">
                                                    <h4>TOOLS</h4>
                                                    <ul className="resume-list">
                                                        <li>Jira</li>
                                                        <li>VSCode</li>
                                                        <li>Stack Overflow</li>
                                                        <li>Sketch</li>
                                                        <li>Slack</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Resume;
