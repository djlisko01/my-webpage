import { Container, Row, Col } from "react-bootstrap";
import Card from "../card.js";

function Projects({ projects }) {
  let cards = [];

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    cards.push(
      <Col key={i} lg={4} style={{ padding: "2px" }}>
        <Card project={project} />
      </Col>,
    );
  }

  return (
    <div id="projects">
      <Container>
        <Row style={{ paddingTop: "5rem" }}>
          <h2>Projects</h2>
          {cards}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
