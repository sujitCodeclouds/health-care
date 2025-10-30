import React from "react";
import blogData from "../services/blogData";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

function BlogCards({ limit }) {
  const postsToShow = limit ? blogData.slice(0, limit) : blogData;

  return (
    <Row className="blog-list g-5">
      {postsToShow.map((post) => (
        <Col key={post.id} xs={12} md={6} lg={4}>
          <Card className="blog-card h-100 shadow-sm">
            <Card.Img
              variant="top"
              src={post.thumbnail}
              alt={post.title}
              className="rounded-top"
            />
            <Card.Body>
              <Card.Title as="h3">{post.title}</Card.Title>
              <Card.Text>{post.excerpt}</Card.Text>
              <Link to={`/blogs/${post.slug}`} className="read-more-btn">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BlogCards;
