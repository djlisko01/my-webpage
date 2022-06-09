import React from "react";

function ResumeItem(props) {
  return (
    <li className="job-content">
      <div>
        <span className="job-title"> {props.position} </span> <br />
        <span className="company"> {"PACT pharma"} </span>
        <span className="job-date">
          {props.start_date} - {props.end_date}
        </span>{" "}
        <br />
      </div>
      <p className="job-description">{props.description}</p>
    </li>
  );
}

export default ResumeItem;
