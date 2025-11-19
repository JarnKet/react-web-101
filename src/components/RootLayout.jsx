import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <main className="container">
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
