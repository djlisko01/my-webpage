import { useState } from "react";
import { Button } from "react-bootstrap";

function Card() {
  const [contentDisplayed, setContentDisplayed] = useState(false);

  const cardEntered = () => {
    setContentDisplayed(true);
  };

  const cardExited = () => {
    setContentDisplayed(false);
  };

  return (
    <div className="card" onMouseEnter={cardEntered} onMouseLeave={cardExited}>
      <div
        className={`${contentDisplayed ? "overlay" : ""}`}
        style={{
          "background-color": "rgb(79, 93, 117, 0.8)",
          "background-image": `url("../../public/imgs/water_sprite_lake.JPG")`,
        }}
      >
        <div className="card-title">
          <h3>Project Title</h3>
        </div>
        {contentDisplayed ? (
          <div className="card-content">
            <div className="card-breifing">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, aliquid?
              </p>
            </div>
            <Button className="details">More Details</Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
