import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import "./css/Hero.css";

function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-section text-dark">
      <Container fluid className="px-5 py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold">Achieve Your Dream IELTS Band</h1>
            <p className="lead">
              Join our expert-led courses, AI-driven practice, and mock tests to boost your IELTS preparation.
            </p>
            <Button variant="primary" size="lg" className="mt-3">Get Started</Button>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            {!scrolled ? (
              <Tilt glareEnable tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
                <img
                  src="https://img.freepik.com/free-vector/online-test-concept-illustration_114360-7390.jpg"
                  alt="IELTS Banner"
                  className="img-fluid rounded shadow rgb-glow"
                />
              </Tilt>
            ) : (
              <img
                src="https://img.freepik.com/free-vector/online-test-concept-illustration_114360-7390.jpg"
                alt="IELTS Banner"
                className="img-fluid rounded shadow rgb-glow"
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;









