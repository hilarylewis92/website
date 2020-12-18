import React, { Component } from "react";
import "../styles/Resume.css";
import "../styles/Grids.css";
const workExperience = require("../data/experience.json");
const contactInfo = require("../data/contact.json");
const educationInfo = require("../data/education.json");
const skills = require("../data/skills.json");
const communityInfo = require("../data/community.json");

export const Portfolio = () => {
  return (
    <div className="Resume">
      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
              <div className="heading">
                <h1 className="heading-title">My Portfolio</h1>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h2 className="resume-heading">Overview</h2>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-category">
                    <p className="resume-intro">Things I've built</p>
                  </div>
                  <div className="spacer" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h2 className="resume-heading">Things I've Built</h2>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-category">
                    Currently Under Construction
                    {/* {workExperience.map((experience) => {
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
                    })} */}
                  </div>
                  <div className="spacer" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h2 className="resume-heading">Technical Expertise</h2>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-position">
                    <div className="row">
                      {skills.map((skill) => {
                        return (
                          <div className="col-xs-12 col-lg-4">
                            <h4>{skill.category}</h4>
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
                  <h2 className="resume-heading">Education</h2>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-category">
                    {educationInfo.map((educationItem, i) => {
                      return (
                        <div className="resume-position">
                          <h4>
                            {educationItem.title}
                            <small className="resume-role">
                              {educationItem.subTitle}
                            </small>
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                  <div className="spacer" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h2 className="resume-heading">Community Work</h2>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <div className="resume-category">
                    {communityInfo.map((communityItem, i) => {
                      return (
                        <div className="resume-position">
                          <h4>
                            {communityItem.title}
                            <small className="resume-role">
                              {communityItem.subTitle} | {communityItem.dates}
                            </small>
                          </h4>
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
