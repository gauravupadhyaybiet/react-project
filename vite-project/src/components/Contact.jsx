import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      alert(data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error submitting form!");
    }
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" value={form.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" as="textarea" rows={4} value={form.message} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;

