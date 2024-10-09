import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = ({ user, updateUser }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
      .then(response => {
        updateUser(response.data);
      })
      .catch(error => console.error("Error updating user:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={updatedUser.name}
          onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          value={updatedUser.username}
          onChange={(e) => setUpdatedUser({ ...updatedUser, username: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={updatedUser.email}
          onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-control"
          value={updatedUser.phone}
          onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Company Name</label>
        <input
          type="text"
          className="form-control"
          value={updatedUser.company.name}
          onChange={(e) => setUpdatedUser({ ...updatedUser, company: { name: e.target.value } })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Update User</button>
    </form>
  );
};

export default EditUser;
