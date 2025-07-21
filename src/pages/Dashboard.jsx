import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { addUser, updateUser, deleteUser } from '../redux/reducer.js';

const Dashboard = () => {
  const users = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();

  const [editData, setEditData] = useState(null);

  const handleAddOrUpdate = (data) => {
    if (editData) {
      dispatch(updateUser({ ...editData, ...data }));
      setEditData(null);
    } else {
      dispatch(addUser(data));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Dashboard</h2>
      <UserForm onSubmit={handleAddOrUpdate} initialData={editData} />
      <UserList
        users={users}
        onEdit={(user) => setEditData(user)}
        onDelete={(id) => dispatch(deleteUser(id))}
      />
    </div>
  );
};

export default Dashboard;
