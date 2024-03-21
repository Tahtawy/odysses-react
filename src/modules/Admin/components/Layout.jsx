import { useEffect } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="grid grid-cols-[19%_79%]">
      <aside className="flex flex-col gap-3 p-3">
        <Link className="bg-blue-600 text-white px-4 py-3" to="/home">
          Home
        </Link>
        <Link className="bg-blue-600 text-white px-5 py-4" to="/dashboard">
          Dashboard
        </Link>
      </aside>
      <div className="bg-white h-screen p-3">
        <Outlet />
      </div>
    </div>
  );
};
