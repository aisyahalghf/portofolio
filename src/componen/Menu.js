import { Icon } from "@iconify/react";
import Animation from "../componen/Animation";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const mode = theme.palette.mode;
  const darkColor = `bg-[#121212]`;
  const lightColor = `bg-[#fff]`;
  return (
    <div>
      <div
        style={{ display: open ? "none" : "" }}
        onClick={() => setOpen(true)}
        className={` text-l md:text-4xl absolute right-5 border-2 rounded-full p-2 top-5 ${
          mode === "dark" ? lightColor : darkColor
        }   z-20`}
      >
        <Icon
          icon='line-md:close-to-menu-alt-transition'
          className={`${mode === "dark" ? "text-[#121212]" : "text-[#fff]"}`}
          rotate={2}
        />
      </div>
      <div
        style={{ display: open ? "" : "none" }}
        onClick={() => setOpen(false)}
        className=' text-l md:text-4xl absolute right-5 md:border-2 md:rounded-full p-2 top-5 md:bg-gray-200 z-20 '
      >
        <Icon
          icon='line-md:menu-to-close-alt-transition'
          className={`${mode === "dark" ? "text-[#121212]" : "text-[#fff]"}`}
          rotate={2}
        />
      </div>

      <div
        style={{ display: open ? "" : "none" }}
        className={`absolute top-0 right-0 w-56 h-56 md:w-96 md:h-96 rounded-bl-full flex flex-col items-end  justify-center ${
          mode === "dark" ? "bg-[#404040]" : "bg-slate-200"
        }   z-10 transition-all duration-2000 ease-in-out`}
      >
        <Animation delay={0.2} duration={0.8} top notEase start='-400%'>
          <div className={` mr-10 md:mr-16`}>
            <Link to='/'>
              <h1 className=' text-xl md:text-3xl  font-bold  hover:text-slate-700'>
                Home
              </h1>
            </Link>
            <Link to='/about'>
              <h1 className=' text-xl md:text-3xl  font-bold  hover:text-slate-700'>
                About
              </h1>
            </Link>
            <Link to='/project'>
              <h1 className=' text-xl md:text-3xl  font-bold  hover:text-slate-700'>
                Project
              </h1>
            </Link>
            <Link to='/resume'>
              <h1 className=' text-xl md:text-3xl   font-bold  hover:text-slate-700'>
                Resume
              </h1>
            </Link>
            <Link to='/contact'>
              <h1 className=' text-xl md:text-3xl   font-bold  hover:text-slate-700'>
                Contact
              </h1>
            </Link>
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default Menu;
