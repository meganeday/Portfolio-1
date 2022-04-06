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
            <br />I'm Front-End Software Engineer from <span className="purple"> Chicago, IL</span>
            <br />
            <br />I graduated from Flatiron School's Fullstack Software Engineering Immersive Bootcamp in 2021, and since then I've been challenging myself to learn the ins and outs of front-end development. I'm extremely passionate about creating unique, memorable web experiences while paying mind to the user and ADA compliance.
            <br />
            <br /> Currently I work as a Front-End Developer utilizing Salesforce Commerce Cloud to help clients refine and optimize user experiences on their online commerce platforms.
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
