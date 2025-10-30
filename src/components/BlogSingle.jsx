import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Button, Col, Row } from "react-bootstrap";
import blogData from "../services/blogData";
import Layout from "./Layout";
import RecentPosts from "./RecentPosts";
import InnerBanner from "./InnerBanner";
import { FaClock, FaUserAlt } from "react-icons/fa";

const BlogSingle = () => {
  const { slug } = useParams();

  // Find the post that matches the slug
  const post = blogData.find((b) => b.slug === slug);

  if (!post) {
    return (
      <Layout>
        <Container className="text-center my-5">
          <h3>Post not found 😕</h3>
          <Link to="/blogs">
            <Button variant="secondary" className="mt-3">
              Back to Blogs
            </Button>
          </Link>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <InnerBanner heading={post.title} />

      <Container className="my-5">
        <Row>
          <Col lg={8} md={12}>
            <div className="single-post-thumbnail rounded mb-4">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="img-fluid "
              />
            </div>
            <div className="single-post-meta">
              <span className="post-date">
                <FaClock color="#1872e8" size={14} /> {post.date}
              </span>
              <span className="post-author">
                <FaUserAlt color="#1872e8" size={14} /> {post.author}
              </span>
            </div>
            <p>{post.content}</p>
          </Col>
          <Col lg={4} md={12}>
            <RecentPosts />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default BlogSingle;
