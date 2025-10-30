import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
        <Navbar
          expand="lg"
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="healthcare logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="top-navbar-nav"
              className={expanded ? "open" : ""}
              onClick={() => setExpanded(!expanded)}
            >
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="top-navbar-nav">
              <Nav className="ms-auto" as={"ul"}>
                <Nav.Item as="li">
                  <Nav.Link
                    as={NavLink}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/"
                  >
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    as={NavLink}
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    About us
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    as={NavLink}
                    to="/services"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Services
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    as={NavLink}
                    to="/blogs"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Blog
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Navbar.Text>
                <Link className="btn btn-primary" to="/contact">
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
