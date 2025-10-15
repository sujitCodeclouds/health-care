import React from "react";
import blogData from "../services/blogData";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

function BlogCards() {
  return (
    <>
      <Row className="blog-list g-5">
        {blogData.slice(0, 3).map((post) => (
          <Col key={post.id} xs={12} md={6} lg={4}>
            <Card className="blog-card">
              <Card.Img variant="top" src={post.thumbnail} />
              <Card.Body>
                <Card.Title as={"h3"}>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <Link to={`/blog/${post.id}`} className="read-more-btn">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BlogCards;
