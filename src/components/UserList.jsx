import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ editUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const deleteUser = (userId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => console.error("Error deleting user:", error));
  };

  return (
    <div className="row">
      {users.map(user => (
        <div key={user.id} className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-primary" onClick={() => editUser(user)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
