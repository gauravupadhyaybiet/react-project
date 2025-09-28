import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/features")
      .then(res => res.json())
      .then(data => setFeatures(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container id="features" className="py-5">
      <h2 className="text-center fw-bold mb-5">Our Features</h2>
      <Row>
        {features.map(f => (
          <Col md={3} sm={6} key={f.id} className="mb-4">
            <Card className="h-100 text-center p-3 border-0 shadow hover-shadow">
              <div style={{ fontSize: "2.5rem" }}>{f.icon}</div>
              <Card.Body>
                <Card.Title className="fw-bold">{f.title}</Card.Title>
                <Card.Text className="text-muted">{f.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Features;







