import React, { useEffect, useState } from 'react';

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Username: {user.username}<br />
            Full Name: {user.name}<br />
            Company: {user.company.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
