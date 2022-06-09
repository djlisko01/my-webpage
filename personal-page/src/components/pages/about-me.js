import { Container, Col, Row } from "react-bootstrap";
import SocialIcons from "../social-links";

function AboutMe() {
  return (
    <div id="aboutme">
      <Container>
        <Row>
          <Col className="mid-ht-txt">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              vero iste eaque et aut ipsa tempore, a voluptate unde qui sunt
              assumenda ab eum nobis repellat nisi dolores eos odio? Tempore
              obcaecati magnam exercitationem qui eaque! Totam, eum nihil
              laudantium enim impedit corrupti ad perspiciatis in, possimus,
              dolorum esse earum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error vero iste eaque et aut ipsa tempore, a
              voluptate unde qui sunt assumenda ab eum nobis repellat nisi
              dolores eos odio? Tempore obcaecati magnam exercitationem qui
              eaque! Totam, eum nihil laudantium enim impedit corrupti ad
              perspiciatis in, possimus, dolorum esse earum.
            </p>
            <SocialIcons />
          </Col>
          <Col>My Photo Here</Col>
          <Row className="skills" style={{ "margin-top": "4rem" }}>
            <Col>
              <h2>Skills</h2>
            </Col>
            <Col>
              <h2>Education</h2>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
