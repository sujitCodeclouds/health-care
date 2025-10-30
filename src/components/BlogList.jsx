import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy authors and tags for fake data
  const authors = [
    "John Doe",
    "Sarah Lee",
    "Michael Brown",
    "Emily Clark",
    "David Kim",
  ];
  const tags = ["Tech", "Design", "Development", "Lifestyle", "Business"];

  // Fetch dummy blog posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = response.data.slice(0, 6).map((post, index) => ({
        id: post.id,
        title: post.title,
        excerpt: post.body.split(" ").slice(0, 20).join(" ") + "...",
        image: `https://picsum.photos/600/400?random=${index + 1}`, // Random image
        author: authors[index % authors.length],
        date: new Date(Date.now() - index * 86400000).toDateString(), // Dummy date
        tag: tags[index % tags.length],
      }));

      setPosts(postsData);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch blog posts.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Loading blog posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "20px" }}>📰 Latest Blog Posts</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <span
                style={{
                  background: "#eef",
                  color: "#336",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                {post.tag}
              </span>

              <h3 style={{ margin: "10px 0" }}>{post.title}</h3>
              <p style={{ color: "#555", fontSize: "14px" }}>{post.excerpt}</p>

              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  color: "#777",
                }}
              >
                <span>👤 {post.author}</span>
                <span>📅 {post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
