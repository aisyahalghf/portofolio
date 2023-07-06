import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const LandingPage = ({ mode }) => {
  return (
    <section className=" container mx-auto px-5 md:px-20 flex flex-col gap-5 justify-center py-20 md:py-0 md:h-screen">
      {mode === "dark" ? (
        <h1 className="text-5xl font-extrabold animate-text bg-gradient-to-r from-[#532d2d] via-[#a7a5ac] to-[#ffffff] bg-clip-text text-transparent mb-10 md:mb-0  ">
          I'm Aisyah Putri Alghifari
        </h1>
      ) : (
        <h1 className="text-5xl font-extrabold animate-text bg-gradient-to-r from-[#DFBFBF] via-[#4D455D] to-[#18122B] bg-clip-text text-transparent mb-10 md:mb-0  ">
          I'm Aisyah Putri Alghifari
        </h1>
      )}

      <div className=" flex flex-col gap-2 text-justify ">
        <h1>
          Full-stack web developer and recent graduate at Purwadhika Digital
          Technology School. Strong foundation in front-end and back-end
          development, dedicated to creating engaging user experiences. Thrives
          on embracing new technologies and frameworks to stay at the forefront
          of the field. Collaborative and creative problem-solver committed to
          delivering innovative web solutions. Seeking opportunities to
          contribute to a dynamic team and make a lasting impact in the digital
          realm.
        </h1>
        <h1>
          Working with my hands to make magic happen on the internet. Check out
          my{" "}
          {
            <Link className=" font-extrabold " to="/project">
              Project
            </Link>
          }{" "}
          and{" "}
          {
            <Link className=" font-extrabold " to="/resume">
              Resume
            </Link>
          }
          , and for contact information, please refer to the{" "}
          {
            <Link className=" font-extrabold " to="/contact">
              Contact
            </Link>
          }{" "}
          section.
        </h1>
      </div>
      <Link to="/about">
        <h1>
          see more about me <ArrowRightAltIcon className=" animate-pulse  " />{" "}
        </h1>
      </Link>

      <div className=" flex justify-start gap-4 ">
        <a href="https://github.com/aisyahalghf">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/aisyahputrialghifari">
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/Aisyahalghifari">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/aisyah.alghifari.14?mibextid=LQQJ4d">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/aisyahalghf/?igshid=MjEwN2IyYWYwYw%3D%3D">
          <InstagramIcon />
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
