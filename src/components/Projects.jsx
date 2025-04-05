import SkillButton from "./SkillButton";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Project({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="z-10 flex flex-col gap-4 lg:flex-row lg:gap-8"
    >
      {children}
    </motion.div>
  );
}

export default function ProjectSection() {
  return (
    <section
      className="my-6 h-full w-5/6 flex flex-col items-center justify-center gap-8 lg:h-1/2 lg:w-3/4"
      id="projects"
    >
      <div className="flex flex-col w-full gap-2 lg:gap-4">
        <h1 className="text-center text-4xl font-bold lg:text-left lg:text-6xl">
          Projects
        </h1>
        <p className="text-center font-satoshi lg:text-left lg:text-lg">
          Check out some of the projects I've been working
        </p>
      </div>
      <div className="w-full flex flex-col gap-8">
        <Project>
          <img
            src="/assets/chatbot-ptp.webp"
            alt="Chatbot PTP"
            className="h-60 rounded-xl object-cover lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Chatbot PTP</h3>
            <p className="font-satoshi leading-relaxed">
              A project I worked on during my internship at Pusdatin Kemdikbud,
              where I built a chatbot website using Next.js, Langchain, and the
              Google Gemini API. The goal was to improve public access to
              information about the PTP (Pengembang Teknologi Pendidikan)
              institution. It was also my first React-based project, where I
              explored Next.js, API integration, and Tailwind CSS for styling.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>React.js</SkillButton>
              <SkillButton>Next.js</SkillButton>
              <SkillButton>Tailwind CSS</SkillButton>
              <SkillButton>Langchain</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <button className="bg-accent-400 font-satoshi text-secondary-200">
                <Link
                  href="https://github.com/christianrazul/cv-architect"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </button>
              <button className="bg-accent-400 font-satoshi">
                <Link href="https://cv-architect.vercel.app/" target="_blank">
                  Live Demo
                </Link>
              </button>
            </div>
          </div>
        </Project>
      </div>
    </section>
  );
}
