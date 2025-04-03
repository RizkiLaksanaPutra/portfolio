"use client";
import { motion } from "framer-motion";

function SkillButton({ children }) {
  return (
    <button className="flex gap-2 rounded-md bg-secondary-300 px-2 py-1 font-satoshi text-accent-400">
      {children}
    </button>
  );
}

export default function About() {
  const technicalSkills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Javascript",
    "React.js",
    "Next.js",
    "Node.js",
    "MySQL",
  ];

  const tools = [
    "Visual Studio Code",
    "Github",
    "Figma",
    "Canva",
    "Microsoft Office",
  ];

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 1,
        type: "spring",
      },
    }),
  };

  return (
    <section
      className="my-6 h-full w-5/6 flex flex-col justify-center gap-8 lg:h-1/2 lg:w-3/4"
      id="about"
    >
      <motion.h1
        className="text-center text-4xl font-bold leading-extratight md:text-left lg:text-6xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        About Me
      </motion.h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-6 md:w-2/3 md:gap-8">
          <motion.p
            className="text-md text-left font-satoshi lg:text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            Hi! I'm Rizki Laksana Putra, a passionate entry-level Web Developer
            based in South Tangerang City, Indonesia. I'm a recent Computer
            Science graduate but forever a student of the industry. I specialize
            in the frontend, primarily ReactJS, but love building with whatever
            tools are right for the job.
          </motion.p>
          {/* <motion.p
            className="text-md text-left font-satoshi lg:text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            Hi! I'm Rizki Laksana Putra, a passionate entry-level Web Developer
            based in South Tangerang City, Indonesia. I'm a recent Computer
            Science graduate but forever a student of the industry. I specialize
            in the frontend, primarily ReactJS, but love building with whatever
            tools are right for the job.
          </motion.p> */}
        </div>
      </div>
    </section>
  );
}
