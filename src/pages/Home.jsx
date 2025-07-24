import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import './Home.css'

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error)
      setError("Something went wrong while fetching users");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="home-container container">
      <h1 className="text-center my-4 display-5 fw-bold">Users</h1>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <div className="user-grid row">
          {users.map((user) => (
            <div className="col-md-4 col-sm-6 mb-4" key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
