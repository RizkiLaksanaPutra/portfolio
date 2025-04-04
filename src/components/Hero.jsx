import { motion } from "framer-motion";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

export default function Hero() {
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  const curtainVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        type: "spring",
      },
    }),
  };

  return (
    <section
      className="my-6 flex h-full w-5/6 flex-col items-center justify-center gap-8 md:flex-row lg:h-1/2 lg:w-3/4 lg:gap-16"
      id="home"
    >
      <div className="order-2 flex flex-col items-center gap-8 md:order-1 md:items-start">
        <motion.h1
          className="w-full text-center text-5xl font-bold md:text-left md:text-6xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Frontend React Developer
        </motion.h1>
        <motion.p
          className="w-3/4 text-center font-satoshi text-lg md:w-10/12 md:text-left md:text-xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          I can help you transform your concept to a Seamless User Experience.
        </motion.p>
        <motion.div
          className="flex justify-center gap-8 lg:justify-start"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <a
            className="font-satoshi text-lg font-medium flex items-center gap-1"
            href="https://www.linkedin.com/in/rizkilaksana/"
            target="_blank"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            className="font-satoshi text-lg font-medium flex items-center gap-1"
            href="https://github.com/RizkiLaksanaPutra"
            target="_blank"
          >
            <FaSquareGithub />
            GitHub
          </a>
        </motion.div>
      </div>
      <div className="order-1 w-40 min-w-60 max-w-80 lg:order-2">
        <motion.div
          className="bottom-0 left-0 right-0 bg-primary-200"
          initial="hidden"
          animate="visible"
          variants={curtainVariants}
          custom={3}
        >
          <img
            src="/assets/profile-picture.webp"
            alt="My picture"
            className="rounded-2xl border border-secondary-700 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
