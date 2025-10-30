import React from "react";
import Layout from "../components/Layout";
import InnerBanner from "../components/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";
import searchDoctorIcon from "../assets/images/search-doctor-icon.svg";
import onlinePharmacyIcon from "../assets/images/online-pharmacy-icon.svg";
import consultationIcon from "../assets/images/consultation-icon.svg";
import detailsIcon from "../assets/images/details-info-icon.svg";
import emergencyIcon from "../assets/images/emergency-care-icon.svg";
import trackingIcon from "../assets/images/tracking-icon.svg";
import decoration from "../assets/images/decoration-3.svg";

function Services() {
  return (
    <Layout>
      <InnerBanner
        heading="Our Services"
        text="Explore the wide range of healthcare services we offer to meet your needs."
      />
      <section className="services-wrapper">
        <Container>
          <Row
            xs={1}
            sm={2}
            md={2}
            lg={3}
            className="g-4 g-md-5 position-relative"
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
        </Container>
      </section>
    </Layout>
  );
}

export default Services;
