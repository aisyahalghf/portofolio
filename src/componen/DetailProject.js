import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

const DetailProject = ({ data, mode, handleClose, open }) => {
  const color = () => {
    if (mode === "dark") {
      return "text-white";
    } else {
      return "text-stone-500";
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={color()}
    >
      <Box
        className=" w-full h-fit  md:h-fit xl:w-[800px] p-2 pb-5 md:p-4 rounded-lg md:rounded-[16px] "
        sx={style}
      >
        <div className="flex justify-end">
          <CancelPresentationIcon onClick={handleClose} />
        </div>
        <div className="flex flex-col gap-5 text-justify ">
          <div>
            <h1 className=" font-extrabold text-2xl "> {data.title}</h1>
          </div>
          <div className=" flex justify-center">
            <img
              className=" border border-slate-200 rounded-md shadow shadow-slate-200 w-[400px] h-[200px] md:w-[700px] md:h-[400px] "
              src={data.img}
              alt=""
            />
          </div>
          <div>
            <h1 className=" font-bold text-lg">About</h1>
            <p className=" text-[10px] md:text-sm" id="modal-modal-description">
              {data.about}
            </p>
          </div>
          <div>
            <h1 className=" font-bold text-lg mb-1">Technologies</h1>
            <div className=" flex flex-wrap  gap-2 ">
              {data?.tech?.map((val) => (
                <div className="border border-slate-200 px-2 rounded-sm text-[10px] md:text-sm">
                  {val}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className=" font-bold text-lg  ">Website and Github</h1>
            <div>
              <a
                className=" hover:underline text-[10px] md:text-sm "
                href={`${data.Link}`}
              >
                {data.Link}
              </a>
              <div className=" flex flex-col ">
                {data?.github?.map((val, idx) => (
                  <a
                    key={idx.toLocaleString()}
                    className=" hover:underline  text-[10px] md:text-sm   "
                    href={`${val}`}
                  >
                    {val}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DetailProject;
