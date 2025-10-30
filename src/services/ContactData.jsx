import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ContactData = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEntries =
      JSON.parse(localStorage.getItem("contactEntries")) || [];
    setEntries(savedEntries);
  }, []);

  const handleDelete = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem("contactEntries", JSON.stringify(updatedEntries));
  };

  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 border-bottom pb-2">
        Submitted Contact Entries
      </h3>

      {entries.length === 0 ? (
        <div className="text-center">
          <p>No submissions found.</p>
          <Button variant="secondary" onClick={() => navigate("/contact")}>
            Go Back
          </Button>
        </div>
      ) : (
        <>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{index + 1}</td>
                  <td>{entry.firstName}</td>
                  <td>{entry.lastName}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.email}</td>
                  <td>{entry.date}</td>
                  <td>{entry.time}</td>
                  <td>{entry.message}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(entry.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default ContactData;
