import { Container } from "react-bootstrap";
import ResumeItem from "../resume-post";

function Resume() {
  const jobs = [
    {
      id: 1,
      position: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio tempora culpa autem consequuntur unde repellat blanditiis libero cumque sit.",
      company: "Google",
    },
    {
      id: 2,
      position: "Research Associate II",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio tempora culpa autem consequuntur unde repellat blanditiis libero cumque sit.",
      company: "Pact Pharma",
    },
    {
      id: 3,
      position: "Research Associate",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio tempora culpa autem consequuntur unde repellat blanditiis libero cumque sit.",
      company: "Pact Pharma",
    },
    {
      id: 4,
      position: "Graduate Student",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio tempora culpa autem consequuntur unde repellat blanditiis libero cumque sit.",
      company: "Pact Pharma",
    },
  ];

  return (
    <Container id="resume">
      <h2>Resume</h2>
      <div className="timeline">
        <ul className="job-list">
          {jobs.map((job) => {
            return (
              <ResumeItem
                position={job.position}
                description={job.description}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default Resume;
