import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import Navbar from "../componen/Navbar";
import { Icon } from "@iconify/react";
import { useTheme } from "@mui/material/styles";

const Resume = ({ func }) => {
  const pdfUrl = `https://xfxbklalncxxnvexsatq.supabase.co/storage/v1/object/public/resume/CV_Aisyah_Putri_Alghifari.pdf?t=2024-01-16T04%3A11%3A32.735Z`;
  const imageUrl = `https://xfxbklalncxxnvexsatq.supabase.co/storage/v1/object/public/resume/cv_aisyah.jpg?t=2024-01-17T04%3A11%3A36.274Z`;
  const pdfDownloadUrl = `https://docs.google.com/uc?export=download&id=1uZngiy5DD6vuVQ4CYu0zNiS_cRxyO3dO`;

  const theme = useTheme();
  const mode = theme.palette.mode;
  const darkColor = `bg-[#121212]`;
  const lightColor = `bg-[#fff]`;

  return (
    <section>
      <Navbar handleClick={func} />
      <div className='container mx-auto flex justify-center px-3 md:px-0 min-h-[100vh]  '>
        <div className='flex flex-col items-start'>
          <div
            className={` py-10 w-full sticky top-20 md:top-32 ${
              mode === "dark" ? "z-10 border-t-2 border-t-slate-400" : ""
            }  ${mode === "dark" ? darkColor : lightColor} `}
          >
            <h1 className='text-4xl font-shadow font-extrabold mb-5'>
              My Resume.
            </h1>
            <h1 className='text-stone-500'>
              Reach out to me via{" "}
              <Link className=' font-extrabold ' to='/'>
                contact
              </Link>{" "}
              page.
              <a
                className='font-extrabold'
                href={pdfUrl}
                target='_blank'
                rel='noreferrer'
              >
                {" "}
                view{" "}
              </a>
              the resume{" "}
            </h1>
          </div>

          <div className='w-fit h-fit md:w-[700px] md:h-[500] l:w-[800px] l:h-[1030px] border border-slate-200 rounded-sm '>
            <div
              className={`absolute  w-[90%] md:w-[600px] l:w-[800px] text-white  hover:bg-gray-700 hover:opacity-60 p-2 pr-5 py-5 flex justify-end gap-5`}
            >
              <a href={pdfDownloadUrl}>
                <Icon
                  icon='octicon:download-16'
                  className=' text-base md:text-xl'
                />
              </a>

              <a href={`${pdfUrl}/print.pdf`} target='_blank' rel='noreferrer'>
                <Icon
                  icon='ph:printer-duotone'
                  className=' text-base md:text-xl'
                />
              </a>
            </div>

            <a href={pdfUrl} target='_blank' rel='noreferrer'>
              <img className='w-[100%] ' src={imageUrl} alt='' loading='lazy' />
            </a>
          </div>

          <div className=' flex flex-col gap-5 mt-10'>
            <div className='mb-10 text-stone-500 font-semibold  hover:font-extrabold hover:animate-bounce '>
              <Link to='/'>
                {" "}
                Are you convince to contact me now ? <ArrowRightAltIcon />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
