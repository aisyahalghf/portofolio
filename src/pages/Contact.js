// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRef } from "react";
import { Button, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { TextareaAutosize } from "@mui/base";

const Contact = () => {
  const form = useRef();

  const whatapp = () => {
    const phoneNumber = "62882002095171";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_92kk59b",
        "template_mrxb2ke",
        form.current,
        "U6eUgm-q87iIlgjGw"
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          console.log(error);
          // show the user an error
        }
      );
  };

  return (
    <section className=" container mx-auto px-20 h-[91vh] ">
      <h1 className="font-extrabold text-5xl ">Contact</h1>
      <h2>
        Feel free to Contact me by click on phone number or submitting the form
        below and i will get back to you as soon as possible{" "}
      </h2>

      <Box component="form" className=" flex flex-col justify-center">
        <TextField
          error
          id="outlined-helperText"
          label="Name"
          helperText="Filled your name"
        />
        <TextField
          error
          id="outlined-helperText"
          label="Email"
          helperText="Filled your email"
        />
        <TextField
          error
          id="outlined-helperText"
          label="Email"
          helperText="Filled your email"
        />
        <TextField
          multiline
          rows={3}
          maxRows={5}
          error
          id="outlined-helperText"
          label="Message"
          helperText="Filled your message"
        />
        <button className=" w-fit flex justify-start border px-5 py-1 rounded-md font-bold hover:bg-stone-200 hover:text-slate-950  ">
          Submit
        </button>
      </Box>

      {/* <div className=" grid grid-cols-2 w-[500px] ">
        <div>
          <p className="h-8">
            {" "}
            <PhoneIphoneIcon /> Phone{" "}
          </p>
          <p className="h-8">
            {" "}
            <MailOutlineIcon /> Email
          </p>
          <p className="h-8">
            {" "}
            <AddLocationAltIcon /> Location
          </p>
          <p className="h-8">Github</p>
          <p className="h-8">LinkedIn</p>
          <p className="h-20">Sosial Media</p>
        </div>
        <div>
          <button onClick={whatapp} className="h-8">
            <WhatsAppIcon /> WhatApp{" "}
          </button>

          <p className="h-8">Bandung</p>
          <p className="h-8">
            <a href="https://github.com/aisyahalghf">
              <GitHubIcon /> Github
            </a>
          </p>
          <p className="h-8">
            <a href="https://www.linkedin.com/in/aisyahputrialghifari">
              <LinkedInIcon /> LinkedIn
            </a>
          </p>
          <div className=" flex flex-col ">
            <p>
              <a href="https://twitter.com/Aisyahalghifari">
                <TwitterIcon /> Twitter
              </a>
            </p>
            <p>
              <a href="https://twitter.com/Aisyahalghifari">
                <FacebookIcon /> Facebook
              </a>
            </p>
            <p>
              <a href="https://twitter.com/Aisyahalghifari">
                <InstagramIcon /> Instagram
              </a>
            </p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div> */}
    </section>
  );
};

export default Contact;
