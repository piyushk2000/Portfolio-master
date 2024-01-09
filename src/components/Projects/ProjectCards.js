import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className="project-card-view">
      {/* Conditionally render either an image or a video based on the presence of videoLink prop */}
      {props.videoLink ? (
        <div className="ratio ratio-16x9" style={{ marginBottom: "10px" }}>
          <iframe src={props.videoLink} title="Project Video" allowFullScreen></iframe>
        </div>
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}

      <Card.Body style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: "1 0 auto" }}>
          <Card.Title>{props.title}</Card.Title>
          {/* Show only the first 100 characters of the description */}
          <Card.Text style={{ textAlign: "justify" }}>
            {showMore ? props.description : `${props.description.slice(0, 150)}...`}
          </Card.Text>

          {/* Show more button */}
          {props.description.length > 100 && (
            <Button variant="link" onClick={toggleShowMore}>
              {showMore ? "Show Less" : "Show More"}
            </Button>
          )}

          {/* Other Card.Text elements */}
          <Card.Text style={{ textAlign: "justify" }}>
            {props.Test}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.id}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.pass}
          </Card.Text>
        </div>

        {/* Move GitHub and Demo buttons to the bottom */}
        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
