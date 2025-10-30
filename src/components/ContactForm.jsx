import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    const existingData =
      JSON.parse(localStorage.getItem("contactEntries")) || [];

    const newEntry = { id: Date.now(), ...data };
    const updatedData = [...existingData, newEntry];

    localStorage.setItem("contactEntries", JSON.stringify(updatedData));

    reset();

    // setTimeout(() => {
    //   navigate("/contact-data");
    // }, 2000);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="contact-form ">
            <h3>Get in Touch</h3>

            {isSubmitSuccessful && (
              <Alert variant="success" className="text-center">
                Message sent successfully!
              </Alert>
            )}

            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* First + Last Name */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Phone + Email */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Enter a valid email",
                        },
                      })}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Date + Time */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      isInvalid={!!errors.date}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.date?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="time">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type="time"
                      {...register("time", { required: "Time is required" })}
                      isInvalid={!!errors.time}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.time?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Message */}
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message..."
                  {...register("message", { required: "Message is required" })}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid">
                <Button
                  variant="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Submit"}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
