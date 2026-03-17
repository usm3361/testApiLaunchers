import { useEffect } from "react";
import {useUsersStore } from "../store/usersStore"

export function UsersPage() {
  const { users, fetchUsers, deleteUser } = useUsersStore();

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="users-page">
      <h2>Users</h2>
      {users.map((u) => (
        <div key={u._id}>
          Name: {u.username} | Type: {u.user_type}
          <button onClick={() => deleteUser(u._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
