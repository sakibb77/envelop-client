import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        {/* <div>
          <p>
            Logged In as: <span className="text-violet-500">sakib</span>
          </p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
