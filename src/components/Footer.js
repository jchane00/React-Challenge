import React from "react";
import { IconContext } from "react-icons/lib";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container >
    <IconContext.Provider value={{ size:"3em"}}>
    <footer>
      <Row>
      <Col md={{ span: 4, offset: 10 }} style={{
        width: "20rem", marginBottom: "5rem"
      }}>
        <a href="mailto:jarmaris.chaney@yahoo.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/jchane00" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jarmaris-chaney-4472193a/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      
        </Col>
      </Row>
    </footer>
    </IconContext.Provider>
    </Container>
    
  );

}

export default Footer;