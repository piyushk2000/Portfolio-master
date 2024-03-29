import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatapp from "../../Assets/Projects/chatapp.png";
import shop from "../../Assets/Projects/shop.png";
import vibe from "../../Assets/Projects/vibe.png";

function Projects() {
  return (
    <Container fluid className="project-section">

      <Row className="justify-content-center">
        <Col xs={10} md={6}>
          <div className="ratio ratio-16x9" style={{ width: "100%", height: "100%", margin: "auto", display: "block", marginBottom: "40px" }}>
            <iframe src="https://www.youtube.com/embed/qepivEFTvwo?si=J2-M20IKJU_xDSVz" title="YouTube video player" allowFullScreen></iframe>
          </div>
        </Col>
      </Row>

      <Particle />
      <Container style={{marginTop:"50px"}}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vibe}
              isBlog={false}
              // videoLink={"https://www.youtube.com/embed/qepivEFTvwo?si=J2-M20IKJU_xDSVz"}
              title="VibeVault & VibeMatch"
              description="A personal creation: It's a two-in-one app. This MERN stack application allows users to rate and follow a wide range of media, and maintain a list, similar to MAL or IMDb, but for everything including books, anime, shows, and movies. 
              It also features VibeMatch, which uses a FastAPI backend to match users based on their media preferences it's like Tinder, but matchmaking is based on your media likes"
              ghLink="https://github.com/piyushk2000/vibeVault"
              demoLink="https://vibe-vault-gamma.vercel.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat App"
              description=" Realtime chat app with React, Node.js ,socket.io , websocket, Mongodb and Express"
              ghLink="https://github.com/piyushk2000/chat-app"
              demoLink="https://vibe-vault-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="E-Shop"
              description="Built an ecommerce platform using Django, React with, JWT authentication, Redux, and admin capabilities"
              ghLink="https://github.com/piyushk2000/django_shop"
              demoLink="https://django-shop-nine.vercel.app/#/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;