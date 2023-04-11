import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-purple-50 md:flex md:items-center md:justify-around py-4 px-2  md:px-0 ">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
        <div className="flex justify-between items-center mx-2 md:mx-0">
          <NavLink to="/"> Job Quest </NavLink>
          <span
            onClick={() => setOpen(!open)}
            className="md:hidden block cursor-pointer"
          >
            {" "}
            <span>
              {open === true ? (
                <XMarkIcon className="h-6 w-6 text-gray-800" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-800" />
              )}
            </span>
          </span>
        </div>
      </div>

      <ul
        className={`flex flex-col md:flex-row z-[-1] md:z-auto md:static md:opacity-100   transition-all ease-in duration-100 ${
          !open ? "opacity-0" : "opacity-100"
        }`}
      >
        <li className="mx-2 my-1 md:my-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "default"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mx-2 my-1 md:my-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "default"
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
        </li>
        <li className="mx-2 my-1 md:my-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "default"
            }
            to="/applied-jobs"
          >
            Applied Jobs
          </NavLink>
        </li>
        <li className="mx-2 my-1 md:my-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "default"
            }
            to="/blogs"
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <Button>Start Applying</Button>
    </nav>
  );
};

export default Header;
