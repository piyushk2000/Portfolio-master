import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I’m a curious individual with a knack for problem-solving. Having spent a year as a full-stack developer,
            I am now focused on pursuing a career in back-end development and AI. In addition to my technical
            skills, I have honed my leadership and teamwork abilities through managing business operations
            alongside my father. With technical expertise and leadership skills, I’ve also extensively studied
            psychology. This substantial understanding of human behavior enhances my ability to work effectively
            in diverse teams.
        
            <br />
            <br />
           Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watch anime
            </li>
            <li className="about-activity">
              <ImPointRight /> listen to audiobooks
            </li>
            <li className="about-activity">
              <ImPointRight /> listen to podcast
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
