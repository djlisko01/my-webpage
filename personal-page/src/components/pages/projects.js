import { Container, Row, Col } from "react-bootstrap";
import Card from "../card.js";
function Projects() {
  return (
    <div id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <div>
              <Card />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
