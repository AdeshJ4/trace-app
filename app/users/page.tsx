import React from "react";

interface User {
  id: number;
  name: string;
}

// only accessible in fetch function and not in other third party libraries like axios.
// cache: "no-store" -> Don't store data in cache, fresh data
// next: {revalidate: 10} -> after 10 sec get fresh data
const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
