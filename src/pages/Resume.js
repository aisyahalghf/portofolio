import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <section className="container mx-auto flex justify-center mt-10 h-fit  ">
      <div className=" flex flex-col items-start gap-5">
        <h1 className="text-4xl font-shadow font-extrabold  ">My Resume.</h1>
        <h1 className="text-stone-500">
          Reach out to me via{" "}
          <Link className=" font-extrabold " to="/">
            contact
          </Link>{" "}
          page.
          <a
            className=" font-extrabold  "
            href="https://drive.google.com/file/d/1KztghtedpEHidyrSGnt8428EKaoR8k0g/view"
          >
            {" "}
            view{" "}
          </a>
          the resume{" "}
        </h1>
        <div className=" flex flex-col gap-5">
          <a href="https://drive.google.com/file/d/1KztghtedpEHidyrSGnt8428EKaoR8k0g/view">
            {" "}
            <img
              className="w-[700px]  h-[1000px]"
              src="https://drive.google.com/uc?export=view&id=1KztghtedpEHidyrSGnt8428EKaoR8k0g"
              alt=""
            />
          </a>

          <div className="mb-10 text-stone-500 font-semibold  hover:font-extrabold hover:animate-bounce ">
            <Link to="/">
              {" "}
              Are you convince to contact me now ? <ArrowRightAltIcon />{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
