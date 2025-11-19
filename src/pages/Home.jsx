import React from "react";

import { Link } from "react-router";

const Home = () => {
  return (
    <div className="home-page">
      <h2>ສະບາຍດີ, ຍິນດີຕ້ອນຮັບ</h2>

      <div className="menu-container">
        <Link to={"/private/users"}>Users</Link>
        <Link to={"/private/posts"}>Posts</Link>
        <Link to={"/private/photos"}>Photos</Link>
      </div>
    </div>
  );
};

export default Home;
