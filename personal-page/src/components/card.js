import { useState } from "react";

function Card() {
  const [contentDisplayed, setContentDisplayed] = useState(false);

  const cardEntered = () => {
    console.log("hover");
    setContentDisplayed(true);
  };

  const cardExited = () => {
    console.log("left");
    setContentDisplayed(false);
  };

  return (
    <div className="card" onMouseEnter={cardEntered} onMouseLeave={cardExited}>
      <span
        className={`card-title ${contentDisplayed ? "overlay" : ""}`}
        style={{
          "background-color": "rgb(79, 93, 117, 0.8)",
          padding: 0,
          "background-image": `url("../../public/imgs/water_sprite_lake.JPG")`,
        }}
      >
        <h3>Project Title</h3>
        <div className="card-content">
          {contentDisplayed ? (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, aliquid?
            </p>
          ) : null}
        </div>
      </span>
    </div>
  );
}

export default Card;
