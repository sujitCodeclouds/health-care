import React from "react";
import Layout from "../components/Layout";
import heroimage from "../assets/images/banner-bg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import heroshape from "../assets/images/decoration.svg";
import ServiceCard from "../components/ServiceCard";
import searchDoctorIcon from "../assets/images/search-doctor-icon.svg";
import onlinePharmacyIcon from "../assets/images/online-pharmacy-icon.svg";
import consultationIcon from "../assets/images/consultation-icon.svg";
import detailsIcon from "../assets/images/details-info-icon.svg";
import emergencyIcon from "../assets/images/emergency-care-icon.svg";
import trackingIcon from "../assets/images/tracking-icon.svg";
import decoration from "../assets/images/decoration-3.svg";
import leadingHealthcare from "../assets/images/leading-healthcare-providers.jpg";
import truestedPartners from "../assets/images/trusted-partner.jpg";
import { Link } from "react-router-dom";
import TestimonialSlider from "../components/TestimonialSlider";
import testimonialData from "../services/data.js";
import BlogCards from "../components/BlogCards.jsx";

function Home() {
  return (
    <>
      <Layout>
        <section className="hero-section">
          <Container>
            <Row className="align-items-center flex-wrap">
              <Col xs={12} md={7}>
                <div className="hero-text">
                  <h1>Your Trusted Partner in Digital Health.</h1>
                  <p>
                    Our virtual healthcare platform connects you with qualified
                    doctors and healthcare professionals anytime, anywhere.
                    Receive expert medical advice, consultations, and
                    personalized care—all from the comfort of your home.
                  </p>
                  <a href="#services" className="btn btn-secondary">
                    Consult today
                  </a>
                </div>
              </Col>
              <Col xs={12} md={5} className="pt-4 pt-md-0">
                <div className="hero-image">
                  <img
                    src={heroimage}
                    alt="healthcare banner"
                    className="img-fluid"
                    width={693}
                    height={598}
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <div className="hero-shape">
            <img src={heroshape} alt="hero shape" className="img-fluid" />
          </div>
        </section>
        <section className="service-section">
          <Container>
            <Row className="text-start text-md-center">
              <Col md={{ span: 10, offset: 1 }}>
                <h2>Our services</h2>
                <p>
                  We provide to you the best choiches for you. Adjust it to your
                  health needs and make sure your undergo treatment with our
                  highly qualified doctors you can consult with us which type of
                  service is suitable for your health.
                </p>
              </Col>
            </Row>
            <Row
              xs={1}
              sm={2}
              md={2}
              lg={3}
              className="g-4 g-md-5 p-60 position-relative"
            >
              <Col>
                <ServiceCard
                  title={"Search doctor"}
                  description={
                    "Choose your doctor from thousands of specialist, general, and trusted hospitals."
                  }
                  icon={searchDoctorIcon}
                />
              </Col>
              <Col>
                <ServiceCard
                  title={"Online pharmacy"}
                  description={
                    "Buy your medicines with our mobile application with a simple delivery system."
                  }
                  icon={onlinePharmacyIcon}
                />
              </Col>
              <Col>
                <ServiceCard
                  title={"Consultation"}
                  description={
                    "Free consultation with our trusted doctors and get the best recomendations."
                  }
                  icon={consultationIcon}
                />
              </Col>
              <Col>
                <ServiceCard
                  title={"Details info"}
                  description={
                    "Free consultation with our trusted doctors and get the best recomendations."
                  }
                  icon={detailsIcon}
                />
              </Col>
              <Col>
                <ServiceCard
                  title={"Emergency care"}
                  description={
                    "You can get 24/7 urgent care for yourself or your children and your lovely family."
                  }
                  icon={emergencyIcon}
                />
              </Col>
              <Col>
                <ServiceCard
                  title={"Tracking"}
                  description={
                    "Track and save your medical history and health data securely."
                  }
                  icon={trackingIcon}
                />
              </Col>
              <div className="service-decoration">
                <img
                  src={decoration}
                  alt="service shape"
                  width={131}
                  height={115}
                />
              </div>
            </Row>
            <Row className="mt-5 mt-md-2">
              <Col className="text-left text-md-center">
                <Link to="/services" className="btn btn-primary">
                  Learn More
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="features-section">
          <Container>
            <Row className="align-items-center flex-wrap pb-5">
              <Col xs={12} md={6} lg={6}>
                <div className="features-image text-center text-md-start mb-4 mb-md-0">
                  <img
                    src={leadingHealthcare}
                    alt="leading healthcare providers"
                    className="img-fluid"
                    width={650}
                    height={477}
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className="features-text ps-0 ps-md-5">
                  <h2>Leading healthcare providers</h2>
                  <p className="mb-2 mb-lg-4">
                    Trafalgar provides progressive, reliable, and affordable
                    healthcare services designed for everyone. Our platform
                    makes it easy to access quality medical care through mobile
                    and online channels, ensuring convenience without
                    compromising on excellence.
                  </p>
                  <Link to="#!" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center flex-row-reverse flex-wrap pt-5">
              <Col xs={12} md={6} lg={6}>
                <div className="features-image text-center text-md-start mb-4 mb-md-0">
                  <img
                    src={truestedPartners}
                    alt="Your trusted partner in better living"
                    className="img-fluid"
                    width={650}
                    height={477}
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className="features-text pe-0 pe-lg-5">
                  <h2>Your trusted partner in better living</h2>
                  <p className="mb-4">
                    Trafalgar provides progressive, reliable, and affordable
                    healthcare services designed for everyone. Our platform
                    makes it easy to access quality medical care through mobile
                    and online channels, ensuring convenience without
                    compromising on excellence.
                  </p>
                  <Link to="#!" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="features-decoration">
            <img
              src={decoration}
              alt="features shape"
              width={131}
              height={115}
            />
          </div>
        </section>
        <section className="testimonial-section">
          <Container>
            <Row>
              <Col xl={{ span: 10, offset: 1 }}>
                <div className="testimonial-box">
                  <h2>What our customers are saying</h2>
                  <TestimonialSlider testimonials={testimonialData} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="blog-section">
          <Container>
            <Row className="text-start text-md-center">
              <Col md={12}>
                <h2>Check out our latest article</h2>
              </Col>
            </Row>

            <BlogCards limit={3} />

            <Row className="mt-2 mt-md-5">
              <Col className="text-left text-md-center">
                <Link to="/blogs" className="btn btn-primary">
                  View All
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export default Home;
