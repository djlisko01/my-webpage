import React from "react";

function ResumeItem(props) {
  return (
    <li className="job-content">
      <p>
        <span className="job-title"> {props.position} </span>
        <span className="job-date">Date Here</span> <br />
      </p>
      <p className="job-description">{props.description}</p>
    </li>
  );
}

export default ResumeItem;
