import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { user, dispatch } = useAuthContext();

  const handleLogout = () => {
    //dispatch logout
    dispatch({ type: "LOGOUT" });
    //local storage user delete
    localStorage.removeItem("user");
  };

  return (
    <header className="py-10 flex justify-between">
      <div className="logo">
        <Link
          to={"/"}
          className="text-xl font-semibold text-violet-500 hover:text-violet-600 duration-300"
        >
          Envelop
        </Link>
      </div>

      <nav>
        {!user && (
          <div className="flex gap-5 ">
            <Link
              className="hover:text-violet-500 hover:underline underline-offset-2 duration-300"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="hover:text-violet-500 hover:underline underline-offset-2 duration-300"
            >
              Register
            </Link>
          </div>
        )}

        {user && (
          <div className="flex gap-3 items-center justify-center">
            <p>
              Logged In as: <span className="text-violet-500">sakib</span>
            </p>

            <button
              onClick={handleLogout}
              className="bg-rose-500 text-rose-50 hover:bg-rose-600 duration-300 rounded-md py-2 px-5"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
