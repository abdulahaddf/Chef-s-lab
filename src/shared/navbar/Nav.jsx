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
    <div className="navbar bg-purple-100 justify-around ">
      <div className="">
        <Link
          to="/"
          className="text-purple-600  font-extrabold normal-case text-4xl"
        >
          Chef Recipe
        </Link>
      </div>
      <div className="flex font-bold text-xl text-purple-600 ">
        <div className="mr-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black" : "text-purple-600"
            }
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black" : "text-purple-600"
            }
            to="/blog"
          >
            {" "}
            Blog
          </NavLink>
        </div>
      </div>
      <div>
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
  <div className="absolute bottom-2 left-0 hover:left-10 w-full opacity-0 hover:opacity-100">
    <p className="text-black text-md font-medium w-24">{user?.displayName}</p>
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
