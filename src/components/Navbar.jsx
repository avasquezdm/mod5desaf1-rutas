import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faCake } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
        <Navbar bg="danger" variant="dark">
        <Container className="justify-content-between">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            <FontAwesomeIcon icon={faHome} className="me-1" />
            Home
          </Link>

          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <FontAwesomeIcon icon={faEnvelope} className="me-1" />
            Contacto
          </Link>

          <Navbar.Brand className="ms-auto">
            <FontAwesomeIcon icon={faCake} className="me-1" />
            Happy Cake
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  );
}
