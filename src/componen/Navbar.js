import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";

const Navbar = ({ handleClick }) => {
  const theme = useTheme();

  return (
    <>
      {theme.palette.mode === "dark" ? (
        <>
          <nav className="  shadow shadow-slate-200 sticky top-0 z-10  bg-[#0F0F0F]">
            <div className=" flex justify-between text-stone-500 h-20 items-center container mx-auto  ">
              <Link to="/">
                <h1 className=" text-4xl  font-shadow text-white">APA.</h1>
              </Link>
              <div className=" grid grid-cols-5  gap-5 items-center  text-white">
                <Link to="/about">
                  <h1>About</h1>
                </Link>
                <Link to="/project">
                  <h1>Project</h1>
                </Link>
                <Link to="/contact">
                  <h1>Contact</h1>
                </Link>
                <Link to="/resume">
                  <h1>Resume</h1>
                </Link>
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
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="  shadow shadow-slate-200 sticky top-0 z-10 bg-white ">
            <div className=" flex justify-between text-stone-500 h-20 items-center container mx-auto  ">
              <Link to="/">
                <h1 className=" text-4xl  font-shadow text-black">APA.</h1>
              </Link>
              <div className=" grid grid-cols-5 gap-5 items-center  text-stone-500 ">
                <Link to="/about">
                  <h1>About</h1>
                </Link>
                <Link to="/project">
                  <h1>Project</h1>
                </Link>
                <Link to="/contact">
                  <h1>Contact</h1>
                </Link>
                <Link to="/resume">
                  <h1>Resume</h1>
                </Link>
                <div className="flex  items-center gap-1">
                  <IconButton onClick={handleClick} color="inherit">
                    {theme.palette.mode === "dark" ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )}
                  </IconButton>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
