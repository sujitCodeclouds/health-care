import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import footerlogo from "../assets/images/footer logo.svg";
import footershape from "../assets/images/footer-shape-1.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="site-footer position-relative">
        <Container>
          <Row className="mb-80">
            <Col xs={12} md={4}>
              <div className="footer-block">
                <Link className="pb-3 d-inline-block" to="/">
                  <img
                    src={footerlogo}
                    alt="healthcare logo"
                    width={186}
                    height={86}
                  />
                </Link>
                <p className="m-0">
                  Health Care provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone.
                </p>
              </div>
            </Col>
            <Col xs={12} md={{ span: 7, offset: 1 }}>
              <Row>
                <Col md={4}>
                  <h4>Company</h4>
                  <ul className="footer-links">
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h4>Region</h4>
                  <ul className="footer-links">
                    <li>
                      <Link to="/">Indonesia</Link>
                    </li>
                    <li>
                      <Link to="/">Singapore</Link>
                    </li>
                    <li>
                      <Link to="/">Hongkong</Link>
                    </li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h4>Help</h4>
                  <ul className="footer-links">
                    <li>
                      <Link to="/">Help center</Link>
                    </li>
                    <li>
                      <Link to="/">Contact support</Link>
                    </li>
                    <li>
                      <Link to="/">Instructions</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="copyright-text">
                &copy; {new Date().getFullYear()} Healthcare. All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="footer-decoration">
          <img src={footershape} alt="shape" className="shape-1" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
