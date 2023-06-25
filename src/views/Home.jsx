import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6 className="mb-3"> El lugar de los pasteles felices </h6>
      <FontAwesomeIcon icon={faCakeCandles} className="fa-3x" />
    </Container>
  );
};

export default Home;
