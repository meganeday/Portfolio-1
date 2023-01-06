import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/day,meganelizabeth-resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Salesforce Ecommerce Frontend Developer"
              date="2021 - present"
              content={[
                "Participated in a 3 month full-stack training program to learn Salesforce B2C Ecommerce for Developers.",                "Carefully followed parents' expectations and requirements with agility; troubleshot care plans accordingly.",
                "Completed all assigned tickets in a timely manner utilizing knowledge of frontend design patterns and frameworks.",
                "Provided QA on all assigned tickets and completed code reviews and QA for team's development solutions.",
                "Debugged frontend issues for post-production clients, which increased client retention by 20%.",
                "Participated in daily scrum calls and weekly sprint planning meetings.",
                "Successfully supervised and collaborated across a 15-person team in preparation and execution of weekly development sprints.",
              ]}
            />
            <Resumecontent
              title="Childcare Provider"
              date="2018 - 2021"
              content={[
                "Lovingly provided hands-on solutions and care to demanding clients between the ages of 6 months - 9 years.",
                "Carefully followed parents' expectations and requirements with agility; troubleshot care plans accordingly.",
                "Fostered safety and assessed quality of environment for a child with special needs.",
                "Regularly exercised resilience, attention to detail, and de-escalation.",
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Certifications & Achievements</h3>
            <Resumecontent
              title="Salesforce Certified B2C Commerce Developer"
              date="October 2022"
              content={[]}
            />
            <Resumecontent
              title="Software Engineering Immersive Bootcamp, Flatiron School"
              date="August 2021"
              content={[]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BA in Writing for Performance at Columbia College Chicago"
              date="May 2018"
              content={["summa cum laude"]}
            />

          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
