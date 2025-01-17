import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();

  const ascSorted = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  const descSorted = sort(users).desc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {ascSorted.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
