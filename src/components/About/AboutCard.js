import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Megan Day</span>
            . I'm a Fullstack Software Engineer from <span className="purple"> Chicago, IL.</span>
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra.
            <br />
            <br />
            Beyond coding, I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Board Games, especially Ticket to Ride
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Houses in The Sims 4
            </li>
            <li className="about-activity">
              <ImPointRight /> Creative Writing (blogs, plays, novels)
            </li>
            <li className="about-activity">
              <ImPointRight /> My 2 cats, Bea &amp; Denna
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
