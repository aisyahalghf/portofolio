import ImageCard from "../componen/ImageCard";

const Project = ({ mode }) => {
  const data = [
    {
      img: "https://drive.google.com/uc?export=view&id=1OyciYIi8C4VLE8-B2HPngs0cWvGqUWgL",
      title: "GoKu App",
      Link: "",
      github: ["https://github.com/ridhozhr10/JCWDOL00807"],
      tech: [
        "ReactJS",
        "Javascript",
        "Redux",
        "ExpressJS",
        "Sequelize ORM",
        "MySQL",
        "JWT",
        "express Bearer Token",
        "Bcrypt",
        "NodeJS",
        "React-Router-Dom",
        "Google Charts",
        "Multer",
        "HandleBars",
        "NodeMailer",
        "Tailwind",
        "Chakra UI",
      ],
      about:
        "GoKu is an Online Grocery Web App that is an e-commerce application that enables online purchases with store location options. These stores have branches in different locations and sell the same products. Users are divided into customers (buyers) and admins (store managers). This application has customizable discount features that can be applied during the purchase of items.",
    },
    {
      img: "https://drive.google.com/uc?export=view&id=1diCOerxX3O5i54BTuVq62nu3skm0f9v-",
      title: "Portfolio",
      Link: "https://portofolio-ten-lovat.vercel.app/",
      github: ["https://github.com/aisyahalghf/portofolio"],
      tech: [
        "ReactJS",
        "Javascript",
        "NodeJS",
        "React-Router-Dom",
        "Email-js",
        "Tailwind",
        "Material UI",
      ],
      about: `Showcase the projects I have developed and provide comprehensive information about my background and abilities. Through this portfolio, I can present a diverse range of works in the field of Web Development. Furthermore, the portfolio serves as a platform to introduce myself at a more personal level, including my work experience, education, and skills. As a result, the portfolio aims to offer insights into my capabilities and instill confidence in potential collaborators who are interested in working with me.`,
    },
    {
      img: "https://drive.google.com/uc?export=view&id=1LSX6atcd-IvobKMaxvOQ_fKcusIlCzpb",
      title: "White Buss App",
      Link: "",
      github: [
        "https://github.com/aisyahalghf/buss-app",
        "https://github.com/aisyahalghf/buss-API",
      ],
      tech: [
        "ReactJS",
        "Javascript",
        "ExpressJS",
        "Sequelize ORM",
        "MySQL",
        "JWT",
        "express Bearer Token",
        "Bcrypt",
        "NodeJs",
        "React-Router-Dom",
        "Multer",
        "HandleBars",
        "NodeMailer",
        "Tailwind",
        "Chakra UI",
      ],
      about:
        "White Buss App is a web application where users can book a travel bus and choose their seats. Users can also make payments directly by submitting a photo proof of payment.",
    },
    {
      img: "https://drive.google.com/uc?export=view&id=1cau8TuhW4jpL6sQ_0WV_LVGJEsDvv3TX",
      title: "Hashtagram",
      Link: "",
      github: [
        "https://github.com/aisyahalghf/hastagram-app",
        "https://github.com/aisyahalghf/hastagram-api",
      ],
      tech: [
        "React.js",
        "Javascript",
        "ExpressJS",
        "Redux",
        "Sequelize ORM",
        "MySQL",
        "JWT",
        "express Bearer Token",
        "Bcrypt",
        "NodeJS",
        "React-Router-Dom",
        "Multer",
        "HandleBars",
        "NodeMailer",
        "Tailwind",
        "Chakra UI",
      ],
      about:
        "Hashtagram is a Web App where users can register and log in. They can upload photos, delete and edit them. Users can also interact with other users by writing comments in the comment section.",
    },
    {
      img: "https://drive.google.com/uc?export=view&id=1sBYgSk-xfiGBCzRDKG7e0tXJXeKONdXV",
      title: "SendSage App",
      Link: "https://send-sage.vercel.app",
      tech: [
        "ReactJS",
        "Javascript",
        "ExpressJS",
        "NodeJS",
        "Tailwind",
        "Chakra UI",
      ],
      github: [
        "https://github.com/aisyahalghf/rajaOngkir-API",
        "https://github.com/aisyahalghf/rajaOngkir-App",
      ],
      about:
        "SendSage is specifically designed for effortless checking of intercity shipping costs. By utilizing the free open API provided by Raja Ongkir, users can easily access accurate and up-to-date shipping rates.",
    },
    {
      img: "https://drive.google.com/uc?export=view&id=1SjNjV49RzT5gi0bqxkBfH_HKj9HrvpYk",
      title: "Website TK Al-Danazar",
      Link: "https://tk-aldanazar-pamulihan.vercel.app/",
      tech: ["ReactJS", "Javascript", "Node", "Tailwind", "Chakra UI"],
      github: ["https://github.com/aisyahalghf/tk-aldanazar-pamulihan"],
      about:
        "This website can be used by users to get the latest information about registration or activities at Al-Danazar Kindergarten. This website is still in the development stage for the parent dashboard. ",
    },
    {
      img: "https://drive.google.com/uc?export=view&id=17hV3pwMVXYvcIYUpCWDKpIrTkVX2nPpV",
      title: "TodoList",
      Link: "",
      tech: ["ReactJS", "Javascript", "Node", "Tailwind", "Chakra UI"],
      github: [
        "https://github.com/aisyahalghf/todolist-react.js",
        "https://github.com/aisyahalghf/todolist-API-express",
      ],
      about:
        "Build a web application that is useful to help users manage their time and ensure that they have completed their work on time.",
    },
    {
      img: "https://drive.google.com/uc?export=view&id=1lzOWddeGo9chMrxmWNnIHlOHHe3Lb8PT",
      title: "Starbucks Clone",
      Link: "",
      tech: ["ReactJS", "Javascript", "Node", "Tailwind", "Chakra UI"],
      github: [
        "https://github.com/aisyahalghf/starbucks-app",
        "https://github.com/aisyahalghf/starbucks-API",
      ],
      about:
        "Develop a Starbucks website clone that can handle many daily active users and develop features that can handle a large number of transactions per day",
    },
  ];

  return (
    <section className="container mx-auto flex justify-center mt-10 h-[100vh] px-5 md:px-0 xl:px-5">
      <div className="flex flex-col gap-10">
        <div className=" font-extrabold text-5xl  ">Project.</div>
        <ImageCard itemData={data} mode={mode} />
      </div>
    </section>
  );
};

export default Project;
