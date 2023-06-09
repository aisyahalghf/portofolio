import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};

const DetailProject = ({ data, mode, handleClose, open }) => {
  return (
    <div>
      {mode === "dark" ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          variant="rounded"
        >
          <Box sx={style}>
            <div className="flex justify-end text-white ">
              <CancelPresentationIcon onClick={handleClose} />
            </div>
            <div className="flex flex-col gap-5  text-white">
              <div>
                <h1 className=" font-extrabold text-2xl ">{data.title}</h1>
              </div>
              <img className="rounded-xl " src={data.img} alt="" />
              <div>
                <h1 className=" font-bold text-lg">About</h1>
                <Typography id="modal-modal-description">
                  {data.about}
                </Typography>
              </div>
              <div>
                <h1 className=" font-bold text-lg mb-2">Technologies</h1>
                <div className=" flex flex-wrap  gap-3">
                  {data?.tech?.map((val) => (
                    <Button disabled variant="outlined" size="small">
                      {val}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex justify-end">
              <CancelPresentationIcon onClick={handleClose} />
            </div>
            <div className="flex flex-col gap-5 text-justify ">
              <div>
                <h1 className=" font-extrabold text-2xl "> {data.title}</h1>
              </div>
              <img
                className=" border border-slate-200 rounded-md shadow shadow-slate-200 "
                src={data.img}
                alt=""
              />
              <div>
                <h1 className=" font-bold text-lg">About</h1>
                <Typography
                  className=" text-stone-500"
                  id="modal-modal-description"
                >
                  {data.about}
                </Typography>
              </div>
              <div>
                <h1 className=" font-bold text-lg mb-1">Technologies</h1>
                <div className=" flex flex-wrap  gap-3">
                  {data?.tech?.map((val) => (
                    <Button disabled variant="outlined" size="small">
                      {val}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h1 className=" font-bold text-lg  ">Website and Github</h1>
                <div className=" text-stone-500">
                  <a className=" hover:underline " href={`${data.Link}`}>
                    {data.Link}
                  </a>
                  <div className=" flex flex-col ">
                    {data?.github?.map((val, idx) => (
                      <a
                        key={idx.toLocaleString()}
                        className=" hover:underline  "
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
      )}
    </div>
  );
};

export default DetailProject;
