import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>IELTS Institute</h5>
            <p className="text-muted">Helping you achieve your global dreams.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>📧 contact@ieltsinstitute.com</p>
            <p>📍 New Delhi, India</p>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <p className="text-center text-muted mb-0">
          © {new Date().getFullYear()} IELTS Institute. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;





