import React from "react";
import { Card } from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div>
     
      <Card style={{ width: "18rem" }} className="mt-5 ms-5 ">
        <Card.Body>
          <Card.Title className="text-center">Users Info</Card.Title>
          <Card.Text>First Name: {user.name.firstname}</Card.Text>
          <Card.Text>Last Name: {user.name.lastname}</Card.Text>
          <Card.Text>Name: {user.username}</Card.Text>
          <Card.Text>Email: {user.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
