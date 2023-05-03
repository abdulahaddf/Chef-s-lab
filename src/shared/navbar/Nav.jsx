import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex bg-purple-100 h-20 items-center p-3 ">
      <div className="flex-none">
        <Link
          to="/"
          className="text-purple-600 hover:text-purple-700  font-extrabold normal-case text-4xl"
        >
          Chef's Lab
        </Link>
      </div>

      <div className="flex font-bold text-xl grow justify-center ">
        <div className="mr-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-900" : "text-purple-600"
            }
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-900" : "text-purple-600"
            }
            to="/blog"
          >
            {" "}
            Blog
          </NavLink>
        </div>
      </div>

      <div className="flex-none">
        {user ? (
          <div className="flex items-center">
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-primary btn-sm mr-5"
            >
              Log Out
            </button>
            <div className="relative w-10 rounded-full">
              <img className="rounded-full" src={user?.photoURL} />
              <div className="absolute top-0 hover:top-9 right-0 hover:right-12 opacity-0 hover:opacity-100">
                <p className="text-purple-700 text-md font-medium w-24">
                  {user?.displayName}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn btn-outline btn-primary btn-sm mr-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
