import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const UserForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ firstName: '', lastName: '', email: '' });
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <h5 className="mb-3">{initialData ? 'Edit User' : 'Add User'}</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {initialData ? 'Update User' : 'Add User'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default UserForm;
