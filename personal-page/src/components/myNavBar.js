import { Nav, Navbar, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";

const NAVLINKS = [
  ["About Me", "#aboutme"],
  ["Resume", "#resume"],
  ["Projects", "#projects"],
];

function MyNavBar() {
  return (
    <Navbar fixed="top">
      <Container>
        <Col>
          <Navbar.Brand href="#homepage">
            <FontAwesomeIcon icon={faMountainSun} />
          </Navbar.Brand>
        </Col>
        {NAVLINKS.map((navLink, i) => {
          return (
            <Nav.Link
              key={i}
              className="navLinks"
              id={navLink[0]}
              href={navLink[1]}
            >
              {navLink[0]}
            </Nav.Link>
          );
        })}
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
