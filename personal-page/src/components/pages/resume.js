import { Container } from "react-bootstrap";
import ResumeItem from "../resume-post";

function Resume(props) {
  const refrmt_date = (date) => {
    console.log(date);
    const frmt_date = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });

    return frmt_date;
  };

  return (
    <Container id="resume">
      <h2>Resume</h2>
      <div className="timeline">
        <ul className="job-list">
          {props.resume.map((job, i) => {
            return (
              <ResumeItem
                key={i}
                position={job.job_title}
                description={job.description}
                start_date={refrmt_date(job.start_date)}
                end_date={refrmt_date(job.end_date)}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default Resume;
