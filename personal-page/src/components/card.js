import { useState } from "react";
import { Button } from "react-bootstrap";

function Card({ project }) {
  const [contentDisplayed, setContentDisplayed] = useState(false);

  const cardEntered = () => {
    setContentDisplayed(true);
  };

  const cardExited = () => {
    setContentDisplayed(false);
  };

  console.log(project);
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${project.project_image})` }}
      onMouseEnter={cardEntered}
      onMouseLeave={cardExited}
    >
      <div
        className={`${contentDisplayed ? "overlay" : ""}`}
        style={{
          backgroundColor: "rgb(79, 93, 117, 0.8)",
        }}
      >
        <div className="card-title">
          <h3>{project.project_title}</h3>
        </div>
        {contentDisplayed ? (
          <div className="card-content">
            <div className="card-breifing">
              <p>{project.brief_description}</p>
            </div>
            <Button className="details">More Details</Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
