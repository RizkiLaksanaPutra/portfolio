import SkillButton from "./SkillButton";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
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
              explored React.js, Next.js, API integration, and Tailwind CSS for
              styling.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>React.js</SkillButton>
              <SkillButton>Next.js</SkillButton>
              <SkillButton>Tailwind CSS</SkillButton>
              <SkillButton>Langchain</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <LinkButton>
                <Link
                  href="https://github.com/RizkiLaksanaPutra/chatbot-ptp"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </LinkButton>
              <LinkButton>
                <Link
                  href="https://ptpchat.kemdikbud.go.id/chatbot"
                  target="_blank"
                >
                  Visit Site
                </Link>
              </LinkButton>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/super-store.webp"
            alt="Super Store"
            className="h-60 rounded-xl object-cover lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Super Store Dashboard</h3>
            <p className="font-satoshi leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              architecto voluptatibus inventore, quas consequuntur ipsam saepe,
              reprehenderit autem repellat facilis maxime ducimus, cum enim
              impedit tenetur dolorem delectus nulla dolores.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>HTML</SkillButton>
              <SkillButton>CSS</SkillButton>
              <SkillButton>Javascript</SkillButton>
              <SkillButton>Chart.js</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <LinkButton>
                <Link
                  href="https://github.com/Kampus-Merdeka-Software-Engineering/km-feb24-balikpapan-14"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </LinkButton>
              <LinkButton>
                <Link
                  href="https://superstore-balikpapan14.vercel.app/"
                  target="_blank"
                >
                  Visit Site
                </Link>
              </LinkButton>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/analytix.webp"
            alt="Analytix"
            className="h-60 rounded-xl object-cover lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Analytix | As Project Manager</h3>
            <p className="font-satoshi leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              architecto voluptatibus inventore, quas consequuntur ipsam saepe,
              reprehenderit autem repellat facilis maxime ducimus, cum enim
              impedit tenetur dolorem delectus nulla dolores.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>Python</SkillButton>
              <SkillButton>Streamlit</SkillButton>
              <SkillButton>Scikit Learn</SkillButton>
              <SkillButton>Pandas</SkillButton>
              <SkillButton>Seaborn</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <LinkButton>
                <Link
                  href="https://github.com/arenga18/Analytix"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </LinkButton>
              <LinkButton>
                <Link href="https://analytixx.streamlit.app/" target="_blank">
                  Visit Site
                </Link>
              </LinkButton>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/todo-list.webp"
            alt="Todo List"
            className="h-60 rounded-xl object-cover lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Todo List</h3>
            <p className="font-satoshi leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              architecto voluptatibus inventore, quas consequuntur ipsam saepe,
              reprehenderit autem repellat facilis maxime ducimus, cum enim
              impedit tenetur dolorem delectus nulla dolores.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>React.js</SkillButton>
              <SkillButton>Tailwind</SkillButton>
              <SkillButton>Local Storage</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <LinkButton>
                <Link
                  href="https://github.com/RizkiLaksanaPutra/etch-a-sketch"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </LinkButton>
              <LinkButton>
                <Link
                  href="https://rizkilaksanaputra.github.io/etch-a-sketch/"
                  target="_blank"
                >
                  Visit Site
                </Link>
              </LinkButton>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/library.webp"
            alt="Personal Book Library"
            className="h-60 rounded-xl object-cover lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Personal Book Library</h3>
            <p className="font-satoshi leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              architecto voluptatibus inventore, quas consequuntur ipsam saepe,
              reprehenderit autem repellat facilis maxime ducimus, cum enim
              impedit tenetur dolorem delectus nulla dolores.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>HTML</SkillButton>
              <SkillButton>CSS</SkillButton>
              <SkillButton>Javascript</SkillButton>
              <SkillButton>Local Storage</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <LinkButton>
                <Link
                  href="https://github.com/RizkiLaksanaPutra/etch-a-sketch"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </LinkButton>
              <LinkButton>
                <Link
                  href="https://rizkilaksanaputra.github.io/etch-a-sketch/"
                  target="_blank"
                >
                  Visit Site
                </Link>
              </LinkButton>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/tic-tac-toe.webp"
            alt="Tic Tac Toe"
            className="h-60 rounded-xl object-cover lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Tic Tac Toe</h3>
            <p className="font-satoshi leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              architecto voluptatibus inventore, quas consequuntur ipsam saepe,
              reprehenderit autem repellat facilis maxime ducimus, cum enim
              impedit tenetur dolorem delectus nulla dolores.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>HTML</SkillButton>
              <SkillButton>CSS</SkillButton>
              <SkillButton>Javascript</SkillButton>
              <SkillButton>Local Storage</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <LinkButton>
                <Link
                  href="https://github.com/RizkiLaksanaPutra/tic-tac-toe"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </LinkButton>
              <LinkButton>
                <Link
                  href="https://rizkilaksanaputra.github.io/tic-tac-toe/"
                  target="_blank"
                >
                  Visit Site
                </Link>
              </LinkButton>
            </div>
          </div>
        </Project>
        <Project>
          <img
            src="/assets/etch-a-sketch.webp"
            alt="Super Store"
            className="h-60 rounded-xl object-cover lg:h-80 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xl font-bold">Etch A Sketch</h3>
            <p className="font-satoshi leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              architecto voluptatibus inventore, quas consequuntur ipsam saepe,
              reprehenderit autem repellat facilis maxime ducimus, cum enim
              impedit tenetur dolorem delectus nulla dolores.
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillButton>HTML</SkillButton>
              <SkillButton>CSS</SkillButton>
              <SkillButton>Javascript</SkillButton>
            </div>
            <div className="mt-auto flex gap-4">
              <LinkButton>
                <Link
                  href="https://github.com/RizkiLaksanaPutra/etch-a-sketch"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </LinkButton>
              <LinkButton>
                <Link
                  href="https://rizkilaksanaputra.github.io/etch-a-sketch/"
                  target="_blank"
                >
                  Visit Site
                </Link>
              </LinkButton>
            </div>
          </div>
        </Project>
      </div>
    </section>
  );
}
