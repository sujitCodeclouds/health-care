import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // adjust threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`site-header ${scrolled ? "header-fixed" : ""}`}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="healthcare logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="top-navbar-nav" />
            <Navbar.Collapse id="top-navbar-nav">
              <Nav className="ms-auto" as={"ul"}>
                <Nav.Item as="li">
                  <Nav.Link className="active" href="/home">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#about">About us</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#services">Testimonials</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#doctors">Contact Us</Nav.Link>
                </Nav.Item>
              </Nav>
              <Navbar.Text>
                <Link className="btn btn-primary" href="#contact">
                  Get in Touch
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
