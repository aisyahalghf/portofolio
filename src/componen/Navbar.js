import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ handleClick }) => {
  const theme = useTheme();

  const color = () => {
    if (theme.palette.mode === "dark") {
      return "text-white bg-[#0f0f0f]";
    } else {
      return "text-stone-500 bg-white";
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="  shadow shadow-slate-200 sticky top-0 z-10 ">
      <div className={color()}>
        <div className=" flex justify-between  h-20  container mx-auto flex-wrap items-center md:h-32 px-3 md:px-0   ">
          <Link to="/">
            <h1 className=" text-4xl  font-shadow  ">APA.</h1>
          </Link>

          <div className="flex  items-center gap-2   ">
            <div className="md:hidden">
              <IconButton
                onClick={(e) => handleClick(theme.palette.mode)}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </div>

            <button
              onClick={handleMenuToggle}
              type="button"
              className="inline-flex items-center   text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <div className={color()}>
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-10 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  items-center">
                <div className="hidden sm:block ">
                  <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  items-center">
                    <li className="flex gap-1 ">
                      <Link to="/about">
                        <h1>About</h1>
                      </Link>
                    </li>

                    <li>
                      <Link to="/project">
                        <h1>Project</h1>
                      </Link>
                    </li>

                    <li>
                      <Link to="/contact">
                        <h1>Contact</h1>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resume">
                        <h1>Resume</h1>
                      </Link>
                    </li>
                    <li>
                      <div>
                        <IconButton
                          onClick={(e) => handleClick(theme.palette.mode)}
                          color="inherit"
                        >
                          {theme.palette.mode === "dark" ? (
                            <Brightness7Icon />
                          ) : (
                            <Brightness4Icon />
                          )}
                        </IconButton>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className=" block sm:hidden">
                  <ul className="font-medium flex flex-col px-10 md:p-0 md:flex-row md:space-x-8 md:mt-0 w-full items-center  gap-2 ">
                    <li className="flex gap-1 ">
                      <Link to="/about">
                        <h1>About</h1>
                      </Link>
                    </li>

                    <li>
                      <Link to="/project">
                        <h1>Project</h1>
                      </Link>
                    </li>

                    <li>
                      <Link to="/contact">
                        <h1>Contact</h1>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resume">
                        <h1>Resume</h1>
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
