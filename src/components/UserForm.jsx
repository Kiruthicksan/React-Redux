import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="form-control mb-2"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control mb-2"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn btn-primary">
        {initialData ? 'Update' : 'Add'} User
      </button>
    </form>
  );
};

export default UserForm;
