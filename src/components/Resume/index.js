import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {
    return (
        <div>
            <h2 className="section-title primary-border">Professional Skillset</h2>
            <div className="grid-wrapper">
                <div className="grid-container">
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fab", "html5"]} size="4x" />
                        <p>HTML</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fab", "css3"]} size="4x" />
                        <p>CSS</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fab", "js"]} size="4x" />
                        <p>JavaScript</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fas", "database"]} size="4x" />
                        <p>SQL and noSQL</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fas", "chart-area"]} size="4x" />
                        <p>GraphQL</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fas", "code-branch"]} size="4x" />
                        <p>REST APIs</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fab", "react"]} size="4x" />
                        <p>React.js</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fab", "node"]} size="4x" />
                        <p>Node.js</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fab", "git-alt"]} size="4x" />
                        <p>Git</p>
                    </div>
                </div>
            </div>
            <h2 className="section-title secondary-border">Tools I Use</h2>
            <div className="grid-wrapper">
                <div className="grid-container">
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fab", "github-square"]} size="4x" />
                        <p>GitHub</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fas", "terminal"]} size="4x" />
                        <p>VS Code</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fab", "aws"]} size="4x" />
                        <p>AWS</p>
                    </div>
                    <div className="grid-item icon">
                        <FontAwesomeIcon icon={["fas", "rocket"]} size="4x" />
                        <p>Heroku</p>
                    </div>
                </div>
            </div>
            <div className="resume">
                <h2 className="section-title primary-border">My Resume</h2>
                <a href="https://docs.google.com/document/d/1IQw02rMpAzm7ZScXtWFaUd6zltB5FjN3eW-jIxcBECo/edit?usp=sharing">Click to View Google Doc
                </a>
                <div className="resume-item">
                    <img className="resume-pic" src={require("../../assets/images/resume-1.png")} />
                    <img className="resume-pic" src={require("../../assets/images/resume-2.png")} />
                </div>

            </div>
        </div>
    );
}

export default Resume;