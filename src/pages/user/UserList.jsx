import { useEffect, useState } from "react";

import { useNavigate } from "react-router";

const UserList = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="user-list-page">
      <h1 className="user-list-title">User List</h1>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <ul className="user-list">
          {users.map((user) => (
            <li
              onClick={() => navigate("/private/users/" + user.id)}
              className="user-list-item"
              key={user.id}
            >
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.email}</div>
              <div className="user-company">{user.company?.name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
