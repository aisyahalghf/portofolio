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
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};

const DetailProject = ({ data, mode, handleClose, open }) => {
  console.log(data);
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
                <h1 className=" font-extrabold text-2xl ">Empty Carafes</h1>
                <h2 id="modal-modal-description">
                  Experience remorse writing at its amazing peak.
                </h2>
              </div>

              <img
                className="rounded-xl"
                src={data.img}
                alt=""
                height="100px"
              />

              <div>
                <h1 className=" font-bold text-lg">About</h1>
                <Typography id="modal-modal-description">
                  Empty Carafes is a content platform which allows readers to
                  engage in a wide range of dynamic and innovative ideas
                  expressed through different art forms.
                </Typography>
              </div>
              <div>
                <h1 className=" font-bold text-lg">Technologies</h1>
                <Button disabled variant="outlined" size="small">
                  Javascript
                </Button>
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
            <div className="flex flex-col gap-5">
              <div>
                <h1 className=" font-extrabold text-2xl ">Empty Carafes</h1>
                <h2 id="modal-modal-description" className=" text-stone-500">
                  Experience remorse writing at its amazing peak.
                </h2>
              </div>
              <img src={data.img} alt="" />
              <div>
                <h1 className=" font-bold text-lg">About</h1>
                <Typography
                  className=" text-stone-500"
                  id="modal-modal-description"
                >
                  Empty Carafes is a content platform which allows readers to
                  engage in a wide range of dynamic and innovative ideas
                  expressed through different art forms.
                </Typography>
              </div>
              <div>
                <h1 className=" font-bold text-lg">Technologies</h1>
                <Button disabled variant="outlined" size="small">
                  Javascript
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default DetailProject;
