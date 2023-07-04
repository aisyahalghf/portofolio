import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRef, useState } from "react";
import { TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";

const Contact = () => {
  const form = useRef();
  const [sender, setSender] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [dataMessage, setDataMessage] = useState("");
  const [errInputSender, setErrInputSender] = useState("");
  const [errInputSenderMail, setErrInputSenderEmail] = useState("");
  const [errInputDataMessage, setErrInputDataMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleErrorInputSender = () => {
    if (!sender) {
      setErrInputSender("Filled name is required");
    } else {
      setErrInputSender("");
    }
  };

  const handleErrorInputSenderEmail = () => {
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!senderEmail) {
      setErrInputSenderEmail("Filled Email is required");
    } else if (!regexEmail.test(senderEmail)) {
      setErrInputSenderEmail("Not Valid Email");
    } else {
      setErrInputSenderEmail("");
    }
  };

  const handleErrorInputDataMessage = () => {
    const colorForm = document.getElementsByName("dataMessage");
    console.log(colorForm[0].color);
    if (!dataMessage) {
      setErrInputDataMessage("Filled message is required");
    } else {
      setErrInputDataMessage("");
    }
  };

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_EMAIL,
        process.env.REACT_APP_TEMPLATE_EMAIL,
        form.current,
        process.env.REACT_APP_KEY
      )
      .then(
        (result) => {
          Swal.fire("Thank You!", "Your message has been delivered", "success");
          setLoading(false);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Sorry something went wrong!",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section className=" container mx-auto  h-[91vh]  px-5 md:px-20 lg:px-0 w-full  lg:w-[30vw] text-justify  mt-10 ">
      <div className="">
        <h1 className="font-extrabold text-5xl mb-5 ">Contact.</h1>
        <h2>
          Feel free to Contact me by submitting the form below and i will get
          back to you as soon as possible{" "}
        </h2>

        <Box
          component="form"
          className=" flex flex-col justify-center gap-5  py-10   "
          ref={form}
          onSubmit={sendEmail}
        >
          <TextField
            error={errInputSender}
            id="outlined-helperText"
            label="Name"
            size="small"
            helperText={errInputSender}
            name="sender"
            value={sender}
            onBlur={handleErrorInputSender}
            onChange={(e) => {
              setSender(e.target.value);
            }}
          />
          <TextField
            id="outlined-helperText"
            error={errInputSenderMail}
            label="Email"
            size="small"
            helperText={errInputSenderMail}
            name="senderEmail"
            onBlur={handleErrorInputSenderEmail}
            onChange={(e) => {
              setSenderEmail(e.target.value);
            }}
          />
          <TextField
            multiline
            error={errInputDataMessage}
            rows={3}
            onBlur={handleErrorInputDataMessage}
            size="small"
            id="outlined-helperText"
            label="Message"
            helperText={errInputDataMessage}
            name="dataMessage"
            onChange={(e) => {
              setDataMessage(e.target.value);
            }}
          />{" "}
          {!sender || !senderEmail || !dataMessage ? null : (
            <Button
              disabled={
                errInputDataMessage ||
                errInputSender ||
                errInputSenderMail ||
                loading
              }
              type="submit"
              variant="contained"
              color="inherit"
            >
              Submit
            </Button>
          )}
        </Box>
      </div>

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

export default Contact;
