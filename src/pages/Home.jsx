import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/users");
        setUsers(response.data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("There is a problem while fetching users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (error) {
    return (
      <div className="text-danger text-center mt-4">
        <h4>{error}</h4>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mt-4">
        <span className="spinner-border" role="status"></span>
        <p>Loading Users</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center mt-3">Users</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
