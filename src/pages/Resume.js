import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import Navbar from "../componen/Navbar";
import { Icon } from "@iconify/react";

const Resume = ({ func }) => {
  const pdfUrl = `https://xfxbklalncxxnvexsatq.supabase.co/storage/v1/object/public/resume/CV_Aisyah_Putri_Alghifari.pdf?t=2024-01-16T04%3A11%3A32.735Z#toolbar=0`;

  return (
    <section>
      <Navbar handleClick={func} />
      <div className='container mx-auto flex justify-center mt-10 px-3 md:px-0  '>
        <div className=' flex flex-col items-start gap-5'>
          <h1 className='text-4xl font-shadow font-extrabold'>My Resume.</h1>
          <h1 className='text-stone-500'>
            Reach out to me via{" "}
            <Link className=' font-extrabold ' to='/'>
              contact
            </Link>{" "}
            page.
            <a
              className=' font-extrabold  '
              href='https://xfxbklalncxxnvexsatq.supabase.co/storage/v1/object/public/resume/CV_Aisyah_Putri_Alghifari.pdf?t=2024-01-16T04%3A11%3A32.735Z'
            >
              {" "}
              view{" "}
            </a>
            the resume{" "}
          </h1>
          <div className='w-full h-full md:w-[600px] md:h-[500] l:w-[800px] l:h-[1030px] '>
            <div
              className={`absolute  w-[90%] md:w-[600px] l:w-[800px] text-white  hover:bg-gray-700 hover:opacity-60 p-2 md:p-0 md:py-5 flex flex-col md:flex-row justify-end pr-5  gap-5`}
            >
              <a href='https://docs.google.com/uc?export=download&id=1uZngiy5DD6vuVQ4CYu0zNiS_cRxyO3dO'>
                {" "}
                <Icon
                  icon='octicon:download-16'
                  className=' text-base md:text-xl'
                />
              </a>

              <a href={`${pdfUrl}/print.pdf`}>
                <Icon
                  icon='ph:printer-duotone'
                  className=' text-base md:text-xl'
                />
              </a>
            </div>

            <object
              className=' bg-white  h-[370px] md:h-[740px] l:h-[1030px] w-[100%]'
              data={pdfUrl}
            >
              {" "}
            </object>
          </div>
          <div className=' flex flex-col gap-5'>
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
