import React, { useState } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Add custom styling if needed

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h2>Add User</h2>
          <AddUser addUser={addUser} />
        </div>
        <div className="col-md-8">
          <h2>User List</h2>
          {editingUser ? (
            <>
              <h3>Edit User</h3>
              <EditUser user={editingUser} updateUser={updateUser} />
            </>
          ) : (
            <UserList editUser={editUser} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
