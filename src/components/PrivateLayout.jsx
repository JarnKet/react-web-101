import { Outlet, NavLink, useNavigate } from "react-router";
import { useEffect } from "react";

import { navMenus } from "../config/site";

const PrivateLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="private-layout">
      <aside className="sidebar">
        <h1 onClick={() => navigate("/private/home")}>Web App</h1>
        <ul>
          {navMenus.map((menu) => (
            <li key={menu.href}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={menu.href}
              >
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
