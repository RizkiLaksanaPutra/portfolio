import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import HamburgerButton from "./HamburgerButton";

const navLinks = [
  { title: "HOME", to: "#home" },
  { title: "ABOUT", to: "#about" },
  { title: "PROJECTS", to: "#projects" },
  { title: "RESUME", to: "/CV Rizki Laksana Putra.pdf"}
];

const menuVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.3, ease: [0.25, 0.75, 0.5, 1.25] },
  },
  exit: {
    scaleY: 0,
    transition: { duration: 0.3, ease: [0.25, 0.75, 0.5, 1.25] },
  },
};

const navLinkContainerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: 1,
      delay: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.2,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
  exit: {
    y: "30vh",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function NavMenu() {
  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="fixed right-8 top-4 z-50 lg:hidden">
      <HamburgerButton onClick={toggleMenu} isActive={openNav} />
      <AnimatePresence mode="wait">
        {openNav && (
          <motion.div
            className="fixed bottom-0 left-0 h-screen w-full origin-top bg-accent-400 px-8 py-4 text-secondary-500 overflow-hidden"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex h-full flex-col">
              <motion.div className="flex justify-between">
                <Link href="/" onClick={toggleMenu}>
                  <h1 className="min-w-fit text-2xl font-bold">
                    Rizki Laksana Putra
                  </h1>
                </Link>
              </motion.div>

              <motion.div
                variants={navLinkContainerVars}
                className="flex h-full flex-col justify-center gap-y-2 lg:hidden"
                initial="initial"
                animate="open"
                exit="exit"
              >
                {navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <motion.div
                      className="font-overused text-6xl font-bold"
                      variants={mobileLinkVars}
                    >
                      <Link href={link.to} onClick={toggleMenu}>
                        {link.title}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              <div className="flex h-28 flex-col gap-2">
                <div>
                  <h3 className="font-bold">EMAIL ADDRESS</h3>
                  <a
                    href="mailto:rizkilaksana007@gmail.com"
                    target="_blank"
                    className="font-satoshi font-medium text-primary-200"
                  >
                    rizkilaksana007@gmail.com
                  </a>
                </div>
                <ul className="flex gap-x-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rizkilaksana/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINKEDIN
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/RizkiLaksanaPutra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
