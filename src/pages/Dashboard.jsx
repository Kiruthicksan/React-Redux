import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { addUser, updateUser, deleteUser } from '../redux/userSlice';

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
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">📋 User Dashboard</h2>
        <p className="text-muted">Add, update, and manage users with ease.</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h5 className="mb-3 text-primary">{editData ? '✏️ Edit User' : '➕ Add New User'}</h5>
            <UserForm onSubmit={handleAddOrUpdate} initialData={editData} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-white">
            <h5 className="mb-3 text-success">📄 User List</h5>
            <UserList
              users={users}
              onEdit={(user) => setEditData(user)}
              onDelete={(id) => dispatch(deleteUser(id))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
