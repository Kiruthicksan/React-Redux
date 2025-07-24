import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="user-card shadow-sm h-100">
      <Card.Body>
        <Card.Title className="text-center text-primary fw-bold">User Info</Card.Title>
        <Card.Text><strong>First Name:</strong> {user.name.firstname}</Card.Text>
        <Card.Text><strong>Last Name:</strong> {user.name.lastname}</Card.Text>
        <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
