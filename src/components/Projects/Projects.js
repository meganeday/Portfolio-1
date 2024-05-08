import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import impasta from "../../Assets/Projects/impasta-app.png";
import appointment from "../../Assets/Projects/appointment-app.png";
import garden from "../../Assets/Projects/garden-app.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "#0E0906" }}>
          Here are a few projects I've worked on recently 🎨 💻
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impasta}
              isBlog={false}
              title="Impasta Syndrome"
              description="An app for storing and sorting through gluten-free recipes. Built with HTML, CSS, React.js, Postgres, Ruby on Rails, and JSON Web Token."
              link="https://github.com/meganhubbert/impasta-syndrome-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appointment}
              isBlog={false}
              title="Groomsmart"
              description="An app for managing your pets' grooming appointments. Built with HTML, CSS, React.js, Postgres, Ruby on Rails, and JSON Web Token."
              link="https://github.com/jamave-bot/GroomSmart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={garden}
              isBlog={false}
              title="My Garden Center"
              description="An app for keeping track of your houseplants and organizing their care instructions. Built with HTML, CSS, React.js, Ruby, and Sinatra."
              link="https://github.com/vep002/phase3-project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
