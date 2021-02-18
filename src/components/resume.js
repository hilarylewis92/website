import React, { Component } from "react";
import "../styles/Resume.css";
import "../styles/Grids.css";
const workExperience = require("../data/experience.json");
const educationInfo = require("../data/education.json");
const skills = require("../data/skills.json");
const communityInfo = require("../data/community.json");

export const Resume = () => {
  return (
    <div className="Resume">
      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="resume-header">Resume | My Experiences</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h4 className="resume-heading">Overview</h4>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-category">
                    <p className="resume-intro">
                      As a creative Front End Engineer, I value using both my
                      left and right brain. My technical skills help me solve
                      challenging problems and write efficient code, while my
                      creative side encourages me to develop clean and unique
                      user interfaces.
                    </p>
                  </div>
                  <div className="spacer" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h3 className="resume-heading">Work Experience</h3>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-category">
                    {workExperience.map((experience) => {
                      return (
                        <div className="resume-position">
                          <h3>
                            {experience.title}
                            <small className="resume-role">
                              {experience.company} | {experience.date.from} -
                              {experience.date.to}
                            </small>
                          </h3>
                          <p className="resume-description">
                            {experience.description}
                          </p>
                          <h6 className="heading-subtitle tech-stack">
                            {experience.skillsList.map((skill, i) => {
                              return (
                                <span>
                                  {skill}
                                  {i === experience.skillsList.length - 1 ? (
                                    ""
                                  ) : (
                                    <span className="hidden-sm-down"> • </span>
                                  )}
                                </span>
                              );
                            })}
                          </h6>
                        </div>
                      );
                    })}
                  </div>
                  <div className="spacer" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h3 className="resume-heading">Technical Expertise</h3>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-position">
                    <div className="row">
                      {skills.map((skill) => {
                        return (
                          <div className="col-xs-12 col-lg-4">
                            <h3>{skill.category}</h3>
                            <ul className="resume-list">
                              {skill.skillsList.map((item) => (
                                <li>{item}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    <div className="spacer" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h3 className="resume-heading">Education</h3>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-category">
                    {educationInfo.map((educationItem, i) => {
                      return (
                        <div className="resume-position">
                          <h3>
                            {educationItem.title}
                            <small className="resume-role">
                              {educationItem.subTitle}
                            </small>
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                  <div className="spacer" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h3 className="resume-heading">Community Work</h3>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-category">
                    {communityInfo.map((communityItem, i) => {
                      return (
                        <div className="resume-position">
                          <h3>
                            {communityItem.title}
                            <small className="resume-role">
                              {communityItem.subTitle} | {communityItem.dates}
                            </small>
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
