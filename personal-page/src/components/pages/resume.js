import { Container } from "react-bootstrap";
import ResumeItem from "../resume-post";

function Resume(props) {
  return (
    <Container id="resume">
      <h2>Resume</h2>
      <div className="timeline">
        <ul className="job-list">
          {props.resume.map((job) => {
            return (
              <ResumeItem
                position={job.job_title}
                description={job.description}
                start_date={job.start_date}
                end_date={job.end_date}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default Resume;
