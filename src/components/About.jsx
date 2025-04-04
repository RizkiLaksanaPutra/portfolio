import { motion } from "framer-motion";
import { FaCode, FaScrewdriverWrench } from "react-icons/fa6";

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
      className="my-6 flex h-full w-5/6 flex-col justify-center gap-8 lg:h-1/2 lg:w-3/4"
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
            className="text-left font-satoshi lg:text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            Hi! I'm Rizki Laksana Putra, a passionate entry-level frontend
            Developer based in South Tangerang City, Indonesia. I'm a recent
            Computer Science graduate but forever a student of the industry. I
            specialize in the frontend primarily React.js, but I enjoy working
            with whatever tools best suit the job.
          </motion.p>
          <motion.p
            className="text-left font-satoshi lg:text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            Currently, I am seeking opportunities to grow as a frontend
            developer with a dynamic team that values creativity, innovation,
            and a commitment to excellence. I am eager to contribute to projects
            that challenge my skills and allow me to grow alongside with
            professionals in a supportive and forward-thinking environment.
          </motion.p>
          <motion.p
            className="text-left font-satoshi lg:text-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            Besides frontend development, I also have expertise in data analysis
            and machine learning, which I acquired during my university studies
            and several bootcamps. I have a solid understanding of data
            processing, predictive modeling, and implementing machine learning
            algorithms to generate reliable insights.
          </motion.p>
        </div>
        <div className="flex w-full flex-col gap-6 md:w-1/3">
          <motion.div
            className="z-10 flex flex-col gap-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FaCode />
              Technical Skills
            </h2>
            <ul className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <li key={skill}>
                  <SkillButton>{skill}</SkillButton>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="z-10 flex flex-col gap-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FaScrewdriverWrench />
              Tools
            </h2>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li key={tool}>
                  <SkillButton>{tool}</SkillButton>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
