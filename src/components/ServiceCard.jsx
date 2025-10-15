import React from "react";
import { Card } from "react-bootstrap";

function ServiceCard({ title, description, icon }) {
  return (
    <Card className="h-100 text-left service-card">
      <Card.Img variant="top" src={icon} alt={title} />
      <Card.Body>
        <Card.Title as={"h3"}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
