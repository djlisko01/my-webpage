import { Container, Row, Col } from "react-bootstrap";
import Card from "../card.js";

function Projects() {
  let cards = [];

  for (let i = 0; i < 5; i++) {
    cards.push(
      <Col lg={4} style={{ padding: "2px" }}>
        <Card />
      </Col>,
    );
  }

  return (
    <div id="projects">
      <Container>
        <Row style={{ "padding-top": "5rem" }}>
          <h2>Projects</h2>
          {cards}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
