import React from "react";

function InnerBanner({ heading, text }) {
  return (
    <section className="inner-banner">
      <div className="container">
        <h1 className="mb-3">{heading}</h1>
        <p className="lead">{text}</p>
      </div>
    </section>
  );
}

export default InnerBanner;
