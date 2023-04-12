import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="w-full shadow-sm bg-[#f9f9ff] relative">
      <div className="w-[70%] mx-auto flex justify-between items-center py-4">
        <Link to="/">
          <h1 className="font-bold text-xl text-[#9873FF]">
            JOB<span className="text-[#7E90FE]">Quest</span>
          </h1>
        </Link>
        <ul className="md:flex sm:hidden hidden justify-center items-center">
          <li className="mx-3 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#9873FF]" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="mx-3 text-sm">
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? "text-[#9873FF]" : "")}
            >
              Statistics
            </NavLink>
          </li>
          <li className="mx-3 text-sm">
            <NavLink
              to="/applied-job"
              className={({ isActive }) => (isActive ? "text-[#9873FF]" : "")}
            >
              Applied Job
            </NavLink>
          </li>
          <li className="mx-3 text-sm">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-[#9873FF]" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button
          className="md:block sm:hidden hidden bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded text-white text-sm font-medium hover:from-[#9873FF] hover:to-[#7E90FE]"
          onClick={() => navigate("/")}
        >
          Start Applying
        </button>
        <button
          className="md:hidden sm:flex text-3xl flex items-center"
          onClick={() => setOpen(!open)}
        >
          {open ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}
        </button>
      </div>
      {open && (
        <>
          <div className="absolute top-16 w-full bg-[#f9f9ff] h-[400px]">
            <ul className="mx-8 my-3">
              <li className="m-3 text-sm">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#9873FF]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="m-3 text-sm">
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? "text-[#9873FF]" : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li className="m-3 text-sm">
                <NavLink
                  to="/applied-job"
                  className={({ isActive }) =>
                    isActive ? "text-[#9873FF]" : ""
                  }
                >
                  Applied Job
                </NavLink>
              </li>
              <li className="m-3 text-sm">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-[#9873FF]" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <div className="mx-8 ">
              <button
                className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded text-white text-sm font-medium hover:from-[#9873FF] hover:to-[#7E90FE]"
                onClick={() => navigate("/")}
              >
                Start Applying
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
