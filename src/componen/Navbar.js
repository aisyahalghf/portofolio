import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";

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

  const fullScreen =
    "font-medium flex flex-col md:p-0  rounded-lg border py-4 shadow shadow-slate-200 md:shadow-none  md:flex-row md:space-x-8 md:mt-0 md:border-0  items-center";

  const mobileScreen =
    "font-medium flex flex-col px-10 md:p-0 md:flex-row md:space-x-8 md:mt-0 w-full items-center  gap-2 ";

  return (
    <nav className='shadow shadow-slate-200 sticky top-0 z-10  '>
      <div className={color()}>
        <div className=' flex justify-between  h-20  container mx-auto flex-wrap items-center md:h-32 px-3 2xl:px-0 '>
          <Link to='/'>
            <h1 className='text-4xl font-shadow'>APA.</h1>
          </Link>

          <div className='flex  items-center gap-2   '>
            <div className='md:hidden'>
              <IconButton
                onClick={(e) => handleClick(theme.palette.mode)}
                color='inherit'
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
              type='button'
              className='inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              aria-controls='navbar-default'
              aria-expanded={isMenuOpen}
            >
              <span className='sr-only'>Open main menu</span>
              <Icon className={`${color()} text-3xl`} icon='fe:app-menu' />
            </button>
          </div>

          <div
            className={` absolute  top-14 w-40 right-2 md:relative md:top-0 md:right-0 ${
              isMenuOpen ? "" : "hidden"
            } w-full md:block md:w-auto`}
            id='navbar-default'
          >
            <div className={color()}>
              <ul className='font-medium flex flex-col  mt-10  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  items-center'>
                <ul className={`${mobileScreen} sm:${fullScreen}`}>
                  <li className='flex gap-1 '>
                    <Link to='/about'>
                      <h1>About</h1>
                    </Link>
                  </li>

                  <li>
                    <Link to='/project'>
                      <h1>Project</h1>
                    </Link>
                  </li>

                  <li>
                    <Link to='/contact'>
                      <h1>Contact</h1>
                    </Link>
                  </li>
                  <li>
                    <Link to='/resume'>
                      <h1>Resume</h1>
                    </Link>
                  </li>
                  <li>
                    <div className=' hidden md:flex '>
                      <IconButton
                        onClick={(e) => handleClick(theme.palette.mode)}
                        color='inherit'
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
