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
              title="Childcare Provider"
              date="2018 - 2021"
              content={[
                "Lovingly provided hands-on solutions and care to demanding clients between the ages of 6 months - 9 years.",
                "Carefully followed parents' expectations and requirements with agility; troubleshot care plans accordingly.",
                "Fostered safety and assessed quality of environment for a child with special needs.",
                "Regularly exercised resilience, attention to detail, and de-escalation.",
              ]}
            />
            <Resumecontent
              title="Project Manager &amp; Keyholder"
              date="2016 - 2018"
              content={[
                "Built a custom CRM using Microsoft SharePoint to manage client interaction lifecycle, which increased client retention by 20%.",                "Carefully followed parents' expectations and requirements with agility; troubleshot care plans accordingly.",
                "Analyzed company's online store and utilized Shopify's front-end software to streamline customers' user experience.",
                "Managed robust inventory system to ensure the availability of raw ingredients used for in-house production of skincare and beauty products.",
                "Successfully supervised and collaborated across an 8-person team in preparation and execution of off-site retail events.",
                "Anticipated customer needs and provided high quality service while upholding brand standards and values both in-person and via the company's social media platforms.",
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
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Software Engineering Immersive at Flatiron School"
              date="August 2021"
              content={[
                "15 week intensive coding bootcamp to learn fullstack software engineering.", 
                "Participated in lectures, workshops, & pair programming projects."
              ]}
            />
            <Resumecontent
              title="BA in Writing for Performance at Columbia College Chicago"
              date="May 2018"
              content={["summa cum laude"]}
            />
       
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            {/* <Resumecontent
              title=""
              content={[
                `Graduated summa cum laude from Columbia College Chicago`,
                `Current rank in HackerRank  ${hackerrank}`,
              ]}
            /> */}

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
