import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <Row className="mt-4">
      {users.map((user) => (
        <Col md={4} key={user.id} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{user.firstName} {user.lastName}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <Button variant="warning" size="sm" className="me-2" onClick={() => onEdit(user)}>
                Edit
              </Button>
              <Button variant="danger" size="sm" onClick={() => onDelete(user.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserList;
