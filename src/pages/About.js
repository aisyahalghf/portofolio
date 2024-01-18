import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import Menu from "../componen/Menu";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const darkColor = `bg-[#121212]`;
  const lightColor = `bg-[#fff]`;

  return (
    <section className=' container mx-auto px-2 md:px-10 lg:px-20  flex flex-col items-center gap-10 xl:gap-28  min-h-[100vh] lg:h-fit xl:h-[100vh]  '>
      <div className=' fixed right-0 z-20'>
        <Menu />
      </div>
      <div
        className={`flex flex-col gap-10 items-center sticky top-10 z-10  py-10 ${
          mode === "dark" ? darkColor : lightColor
        }`}
      >
        <h1 className=' font-extrabold text-3xl md:text-5xl '>About Me.</h1>
        <h2 className=' text-center md:text-start '>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h2>
      </div>
      <div className=' grid grid-cols-2 items-start md:items-stretch gap-5 md:gap-10 lg:gap-20 '>
        <div className=' flex flex-col justify-between gap-5 '>
          <h1 className=' font-extrabold text-lg md:text-3xl'>
            Get to know me!
          </h1>
          <p className=' text-justify text-[10px] md:text-base   '>
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

          <Link to='/contact'>
            <div className=' w-fit flex justify-start border text-xs md:text-base px-2 md:px-5 py-1 rounded-md font-bold hover:bg-stone-200 hover:text-slate-950  '>
              Contact Me
            </div>
          </Link>
          <div>
            <div className=' flex justify-start gap-1 md:gap-4   '>
              <a href='https://github.com/aisyahalghf'>
                <GitHubIcon fontSize='small' />
              </a>
              <a href='https://www.linkedin.com/in/aisyahputrialghifari'>
                <LinkedInIcon fontSize='small' />
              </a>
              <a href='https://twitter.com/Aisyahalghifari'>
                <TwitterIcon fontSize='small' />
              </a>
              <a href='https://www.facebook.com/aisyah.alghifari.14?mibextid=LQQJ4d'>
                <FacebookIcon fontSize='small' />
              </a>
              <a href='https://www.instagram.com/aisyahalghf/?igshid=MjEwN2IyYWYwYw%3D%3D'>
                <InstagramIcon fontSize='small' />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className=' font-extrabold text-lg md:text-3xl mb-5 '>
            What I Can Do
          </h1>
          <h1 className=' font-extrabold text-sm md:text-xl mb-2'>Front-end</h1>
          <p className=' text-[10px] md:text-base text-justify '>
            Build client-side apps with continuous learning features for SEO
            optimization. Use technology to support conveniences such as
            React.js, Redux toolkit, and in a CSS framework using Tailwind, Nuka
            Carousel, Material UI or Chakra UI. I continue to learn to develop
            my skills by continuing to read and try new technologies in this
            field.
          </p>
          <h1 className=' font-extrabold text-sm md:text-xl mb-2 mt-3 '>
            Back-end
          </h1>
          <p className='mb-5 text-[10px] md:text-base text-justify'>
            Build scalable and maintainable server applications using
            cutting-edge technologies such as Express. js, Sequalize Orm, and
            for database storage I use MySql and i'm currently learning about
            Docker and Socket.IO. I am very disciplined to keep learning so as
            not to be left behind with the latest technology.
          </p>
          <div className='flex gap-1 md:gap-3 flex-wrap  '>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5  '>
              Javascript
            </button>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5 '>
              Node.js
            </button>

            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5  '>
              HTML
            </button>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5 '>
              CSS
            </button>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5  '>
              React.js
            </button>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5 '>
              Express.js
            </button>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5  '>
              Git
            </button>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5  '>
              MySQL
            </button>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5  '>
              Squalize
            </button>
            <button className='border px-1 py-1 rounded-md  hover:bg-stone-200 hover:text-slate-950 text-xs md:text-base md:px-5  '>
              Redux
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
