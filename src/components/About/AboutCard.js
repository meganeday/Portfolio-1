import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Megan Elizabeth Day</span>
            <br />I'm a Fullstack Software Engineer from <span className="purple"> Chicago, IL</span>
            <br />
            <br />I graduated from Columbia College Chicago in 2018 with a BA in Writing for Performance. I never thought I would find something I was more passionate about than writing--that is until early on in 2020 when I challenged myself to learn a new skill: coding.
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
              <ImPointRight /> Creative Writing of All Sorts 📝
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
