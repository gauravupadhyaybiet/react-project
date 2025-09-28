import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComp />
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;



