import React from "react";
import Layout from "../components/Layout";
import InnerBanner from "../components/InnerBanner";
import BlogCards from "../components/BlogCards";
import { Col, Container, Row } from "react-bootstrap";

function Blogs() {
  return (
    <Layout>
      <InnerBanner
        heading={"Latest Article"}
        text="Read our latest articles and updates on healthcare."
      />
      <section className="blogs-wrapper py-5">
        <Container>
          <Row>
            <Col md={12}>
              <BlogCards />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Blogs;
