import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className=" container mx-auto px-20 mt-10 flex flex-col items-center gap-28  h-screen ">
      <div className="flex flex-col gap-10 items-center">
        <h1 className=" font-extrabold text-5xl ">About Me.</h1>
        <h2>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h2>
      </div>
      <div className=" grid grid-cols-2 gap-20">
        <div className=" flex flex-col justify-between gap-5 ">
          <h1 className=" font-extrabold text-3xl">Get to know me!</h1>
          <p className=" text-justify ">
            I'm a Full-stack Web Developer building the Front-end and back-end
            of Websites and Web Applications that leads to the success of the
            overall product.
            <br /> <br />
            I have partipated in a number of intense technology programming
            where i acquired both technical and soft skills. I also acquired
            high level programming skills from online courses on platforms
            Purwadhika Digital School. I am a self-taught software developer
            with a strong dicipline to learn, improve and evolve. <br /> <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>

          <Link to="/contact">
            <div className=" w-fit flex justify-start border px-5 py-1 rounded-md font-bold hover:bg-stone-200 hover:text-slate-950  ">
              Contact Me
            </div>
          </Link>
          <div>
            <div className=" flex justify-start gap-4   ">
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
          </div>
        </div>

        <div>
          <h1 className=" font-extrabold text-3xl mb-5">What I Can Do</h1>
          <h1 className=" font-extrabold text-xl mb-2">Front-end</h1>
          <p>
            Build client-side apps with continuous learning features for SEO
            optimization. Use technology to support conveniences such as
            React.js, Redux toolkit, and in a CSS framework using Tailwind, Nuka
            Carousel, Material UI or Chakra UI. I continue to learn to develop
            my skills by continuing to read and try new technologies in this
            field.
          </p>
          <h1 className=" font-extrabold text-xl mb-2 mt-3 ">Back-end</h1>
          <p className="mb-5">
            Build scalable and maintainable server applications using
            cutting-edge technologies such as Express. js, Sequalize Orm, and
            for database storage I use MySql and i'm currently learning about
            Docker and Socket.IO. I am very disciplined to keep learning so as
            not to be left behind with the latest technology.
          </p>
          <div className="flex gap-3 flex-wrap  ">
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              Javascript
            </button>
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              Node.js
            </button>

            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              HTML
            </button>
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              Cascading Style Sheets
            </button>
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              React.js
            </button>
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              Express.js
            </button>
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              MySQL
            </button>
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              Squalize
            </button>
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              Redux
            </button>
            <button className="border px-5 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950  ">
              Git
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
