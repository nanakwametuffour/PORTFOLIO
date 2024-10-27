
import { Tabs } from "./Tabs";
import { motion } from "framer-motion";

export default function About() {


  return (
    <section id="about" className="w-full h-auto">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          X: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" w-44 mx-auto border-b-4 border-[#a452f2] flex p-5 justify-center mb-5"
      >
        <h1 className="text-3xl font-semibold w-full whitespace-nowrap">
          About Me
        </h1>
      </motion.div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full mt-7 ">
        <div className="w-full flex justify-center px-2 ">
          <img
            src="/about-image.webp"
            alt=""
            className=" max-w-[300px] md:max-w-[500px] lg:max-w-[500px] h-auto object-cover"
          />
        </div>
        <div className="w-full flex flex-col p-4 gap-5">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              X: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-base px-5 "
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </motion.p>

          <Tabs />
        </div>
      </div>
    </section>
  );
}
