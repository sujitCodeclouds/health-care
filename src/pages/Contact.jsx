import React from "react";
import Layout from "../components/Layout";
import InnerBanner from "../components/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarked,
  FaMobile,
} from "react-icons/fa";
import { FaArrowLeft, FaLocationDot, FaLocationPin } from "react-icons/fa6";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <Layout>
      <InnerBanner
        heading="Contact Us"
        text="Get in touch with us for any inquiries or support."
      />
      <section className="contact-wrapper">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <h2 className="brd-left">We’re open to talk to good people.</h2>
              <p>
                <strong>
                  We are here to assist you. Reach out to us through any of the
                  following methods:
                </strong>
              </p>
              <div className="pt-4">
                <div className="contact-item mb-3 mb-md-5">
                  <div className="contact-item-icon">
                    <FaLocationDot size={22} />
                  </div>
                  <div className="contact-item-content">
                    <p className="mb-1">
                      Envato Pty Ltd, PO Box 16122 Collins Street, West
                      Victoria.
                    </p>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="content-item-link"
                    >
                      See Map <FaArrowRight size={14} />
                    </a>
                  </div>
                </div>
                <div className="contact-item mb-3 mb-md-5">
                  <div className="contact-item-icon">
                    <FaEnvelope size={22} />
                  </div>
                  <div className="contact-item-content">
                    <p className="mb-1">info@healthcare.com</p>
                    <a
                      href="mailto:info@healthcare.com"
                      rel="noopener noreferrer"
                      className="content-item-link"
                    >
                      Say Hello <FaArrowRight size={14} />
                    </a>
                  </div>
                </div>
                <div className="contact-item mb-3 mb-md-5">
                  <div className="contact-item-icon">
                    <FaMobile size={22} />
                  </div>
                  <div className="contact-item-content">
                    <p className="mb-1">+1 (212) 255-5511</p>
                    <a
                      href="tel:+12122555511"
                      rel="noopener noreferrer"
                      className="content-item-link"
                    >
                      Call Now
                      <FaArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Contact;
