import React from "react";
import Layout from "../components/Layout";
import InnerBanner from "../components/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import aboutImage from "../assets/images/our-team.jpg";
import { FaCheck } from "react-icons/fa6";
import iconOne from "../assets/images/treatment.png";
import iconTwo from "../assets/images/support.png";
import iconThree from "../assets/images/medicine.png";
import iconFour from "../assets/images/care.png";
import BrandCarousel from "../components/BrandCarousel";
function About() {
  return (
    <Layout>
      <InnerBanner
        heading="About Us"
        text="We are a healthcare company dedicated to providing the best services."
      />
      <section className="team-wrapper">
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={6}>
              <div className="team-image overflow-hidden">
                <img src={aboutImage} alt="Our Team" className="img-fluid" />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <h2 className="brd-left">Our Team</h2>
              <p>
                <strong>
                  Our dedicated medical team consists of experienced doctors,
                  nurses, and healthcare professionals who share a common goal —
                  delivering exceptional patient care.
                </strong>
              </p>
              <p>
                Each member of our team brings years of expertise in various
                medical specialties, working together to provide accurate
                diagnoses and effective treatments. We believe that compassion
                and communication are just as important as clinical excellence,
                ensuring every patient feels supported at every stage of their
                healthcare journey.
              </p>
              <ul className="pq-list-check pt-3">
                <li>
                  <FaCheck size={20} />
                  <span>Intervention Success</span>
                </li>
                <li>
                  <FaCheck size={20} />
                  <span>Quality of Care Services</span>
                </li>
                <li>
                  <FaCheck size={20} />
                  <span>Client Satisfaction</span>
                </li>
                <li>
                  <FaCheck size={20} />
                  <span>Happy with Staff</span>
                </li>
                <li>
                  <FaCheck size={20} />
                  <span>Infection Prevention</span>
                </li>
                <li>
                  <FaCheck size={20} />
                  <span>Patient Experience</span>
                </li>
              </ul>
              <div className="pq-contact-box1">
                <span className="pq-contact-area">
                  <h4 className="pq-contact-title">+1 (212) 255-5511</h4>
                  <p className="pq-contact-desciption mb-0">
                    Do you have any question?
                  </p>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="featured-style-wrapper">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }} className="text-md-center mb-4">
              <h2>Joining Hands With Techno Easement</h2>
              <p>
                Our team of registered nurses and skilled healthcare
                professionals provide in-home nursing to help manage and
                coordinate recovery at home.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl={3} lg={6} md={6} sm={12} className="mb-4 mb-xl-0">
              <div className="feature-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src={iconOne} alt="Elderly Care Service" />
                  </div>
                  <h3>Elderly Care Service</h3>
                  <p>
                    Our caregivers assist with daily activities, ensuring
                    comfort and dignity.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={12} className="mb-4 mb-xl-0">
              <div className="feature-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src={iconTwo} alt="24Hr/7 Days Support" />
                  </div>
                  <h3>24Hr/7 Days Support</h3>
                  <p>
                    Leverage agile frameworks to pro vide a robust synopsis for
                    high level.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={12} className="mb-4 mb-xl-0">
              <div className="feature-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src={iconThree} alt="Medical Care" />
                  </div>
                  <h3>Medical Care</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} sm={12} className="mb-4 mb-xl-0">
              <div className="feature-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src={iconFour} alt="Personal Care" />
                  </div>
                  <h3>Personal Care</h3>
                  <p>
                    Our caregivers assist with daily activities, ensuring
                    comfort and dignity.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BrandCarousel />
    </Layout>
  );
}

export default About;
