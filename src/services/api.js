import axios from 'axios';

// Define the base URL for Axios requests
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch all users
export const fetchUsers = () => axios.get(API_URL);

// Add a new user
export const addUser = (user) => axios.post(API_URL, user);

// Edit a user
export const editUser = (userId, updatedUser) => axios.put(`${API_URL}/${userId}`, updatedUser);

// Delete a user
export const deleteUser = (userId) => axios.delete(`${API_URL}/${userId}`);
