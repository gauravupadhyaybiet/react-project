import React, { useEffect, useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/testimonials")
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div id="testimonials" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">What Our Students Say</h2>
        <Carousel indicators={false}>
          {testimonials.map(t => (
            <Carousel.Item key={t.id}>
              <div className="text-center">
                <Image src={t.img} roundedCircle width="100" height="100" className="mb-3"/>
                <p className="fst-italic">"{t.text}"</p>
                <h6 className="fw-bold">- {t.name}</h6>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Testimonials;








