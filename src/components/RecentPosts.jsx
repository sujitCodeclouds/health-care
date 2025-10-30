// src/components/RecentPosts.jsx
import React from "react";
import { Link } from "react-router-dom";
import blogData from "../services/blogData";
import { Card } from "react-bootstrap";

const RecentPosts = () => {
  // Get the 4 most recent posts (latest by date)
  const recentPosts = [...blogData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <div className="recent-posts">
      <h4 className="mb-4 border-bottom pb-2">Recent Posts</h4>

      {recentPosts.map((post) => (
        <Card key={post.id} className="mb-4 border-0 recent-post-card">
          <div className="d-flex">
            <div className="recent-post-thumbnail">
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="img-fluid rounded"
                />
              </Link>
            </div>
            <div className="recent-post-content">
              <Link
                to={`/blogs/${post.slug}`}
                className="text-dark text-decoration-none"
              >
                {post.title.length > 50
                  ? post.title.slice(0, 50) + "..."
                  : post.title}
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RecentPosts;
