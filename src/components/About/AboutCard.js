import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Megan Day 💻 💫</span>
            <br />I'm a Front-End Software Developer from <span className="purple"> Chicago, IL</span>
            <br />
            <br />In 2021, I attended a Software Engineering Bootcamp where I discovered my passion for creating unique, memorable user experiences on the web.
            <br />
            <br />Currently I work as a Salesforce B2C Commerce Front-End Developer helping clients refine and optimize user experiences on their e-commerce platforms.
            <br />
            <br />
            Beyond coding, I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Board Games 🎲
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Houses in The Sims 4 🏡
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Fantasy & Mystery Novels 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> My 2 cats, Bea &amp; Denna 🐱🐱
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "#49ACB7" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
