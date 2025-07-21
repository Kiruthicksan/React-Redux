import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{user.name}</strong> — {user.email}
          </div>
          <div>
            <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(user)}>
              Edit
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
