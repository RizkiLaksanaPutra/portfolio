import SkillButton from './SkillButton';
import LinkButton from './LinkButton';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Project({ project }) {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="z-10 flex flex-col gap-4 lg:flex-row lg:gap-8"
        >
            <img src={project.image} alt={project.title} className="h-60 rounded-xl object-cover lg:h-80 lg:w-1/2" />
            <div className="flex flex-col gap-4 lg:w-1/2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="font-satoshi leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                        <SkillButton key={skill} text={skill} />
                    ))}
                </div>

                <div className="mt-auto flex gap-4">
                    {project.links?.map((link) => (
                        <LinkButton key={link.href}>
                            <Link href={link.href} target="_blank">
                                {link.label}
                            </Link>
                        </LinkButton>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectSection() {
    const projects = [
        {
            title: 'Attendance Dremaxtion',
            image: '/assets/attendance.png',
            description: 'A project I worked on during my internship at Dreamaxtion, where I developed an employee attendance web app featuring attendance tracking, time-off requests, and reporting. I collaborated with the backend team to integrate REST APIs using Axios and improved the user experience through responsive design, validation, and clear error handling.',
            skills: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Axios', 'Node.js', 'Express', 'MySQL'],
        },
        {
            title: 'Chatbot PTP',
            image: '/assets/chatbot-ptp.webp',
            description: 'A project I worked on during my internship at Pusdatin Kemdikbud, where I built a chatbot website using Next.js, Langchain, and the Google Gemini API. The goal was to improve public access to information about the PTP (Pengembang Teknologi Pendidikan) institution. It was also my first React-based project, where I explored React.js, Next.js, API integration, and Tailwind CSS for styling.',
            skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Langchain'],
            links: [
                { label: 'GitHub Repo', href: 'https://github.com/RizkiLaksanaPutra/chatbot-ptp' },
                { label: 'Visit Site', href: 'https://ptpchat.kemdikbud.go.id/chatbot' },
            ],
        },
        {
            title: 'Super Store Dashboard',
            image: '/assets/super-store.webp',
            description: 'A web dashboard project I worked on during MSIB Batch 6 with RevoU, where I studied data analysis and software engineering. The dashboard displays various metrics from static data that can be used for analysis. It was built using HTML, CSS, JavaScript, and Chart.js library to display various charts. This project also strengthened my teamwork skills through collaboration with team members and mentors.',
            skills: ['HTML', 'CSS', 'Javascript', 'Chart.js'],
            links: [
                {
                    label: 'GitHub Repo',
                    href: 'https://github.com/Kampus-Merdeka-Software-Engineering/km-feb24-balikpapan-14',
                },
                { label: 'Visit Site', href: 'https://superstore-balikpapan14.vercel.app/' },
            ],
        },
        {
            title: 'Analytix',
            image: '/assets/analytix.webp',
            description: 'A playground website built for data scientists to explore various machine learning classification algorithms with customizable parameters, and perform descriptive data analysis. Developed as part of the Pameran Hasil Karya Mahasiswa (Student Project Showcase), this project earned our team first place.',
            skills: ['Python', 'Streamlit', 'Scikit Learn', 'Pandas', 'Seaborn'],
            links: [
                { label: 'GitHub Repo', href: 'https://github.com/arenga18/Analytix' },
                { label: 'Visit Site', href: 'https://analytixx.streamlit.app/' },
            ],
        },
        {
            title: 'Todo List',
            image: '/assets/todo-list.webp',
            description: 'An Todo list app that help me solidify my fundamental knowledge of basic React.js and Tailwind CSS. In this To-Do List app, I practiced concepts like lifting state up, passing props between sibling components, and working with local storage.',
            skills: ['React.js', 'Tailwind', 'Local Storage'],
            links: [
                { label: 'GitHub Repo', href: 'https://github.com/RizkiLaksanaPutra/todo-list' },
                { label: 'Visit Site', href: 'https://rizkilaksanaputra.github.io/todo-list/' },
            ],
        },
        {
            title: 'Personal Book Library',
            image: '/assets/library.webp',
            description: 'A personal book library app built with HTML, CSS, and JavaScript, where users can add and manage books with details like title, author, and reading status. I practiced using object constructors, arrays, local storage, and form handling.',
            skills: ['HTML', 'CSS', 'Javascript', 'Local Storage'],
            links: [
                { label: 'GitHub Repo', href: 'https://github.com/RizkiLaksanaPutra/personal-book-library' },
                { label: 'Visit Site', href: 'https://rizkilaksanaputra.github.io/personal-book-library/' },
            ],
        },
        {
            title: 'Tic Tac Toe',
            image: '/assets/tic-tac-toe.webp',
            description: 'A simple Tic-Tac-Toe game developed to strengthen my understanding of JavaScript fundamentals. I used factory functions to encapsulate game logic and player data, making the code more modular, reusable, and easier to maintain.',
            skills: ['HTML', 'CSS', 'Javascript'],
            links: [
                { label: 'GitHub Repo', href: 'https://github.com/RizkiLaksanaPutra/tic-tac-toe' },
                { label: 'Visit Site', href: 'https://rizkilaksanaputra.github.io/tic-tac-toe/' },
            ],
        },
        {
            title: 'Etch A Sketch',
            image: '/assets/etch-a-sketch.webp',
            description: 'A web-based drawing app inspired by the classic Etch-A-Sketch, built with HTML, CSS, and JavaScript. This project helped me practice loops, mouse events, dynamic Flexbox layouts, and DOM manipulation to handle user interactions.',
            skills: ['HTML', 'CSS', 'Javascript'],
            links: [
                { label: 'GitHub Repo', href: 'https://github.com/RizkiLaksanaPutra/etch-a-sketch' },
                { label: 'Visit Site', href: 'https://rizkilaksanaputra.github.io/etch-a-sketch/' },
            ],
        },
    ];

    return (
        <section className="h-full w-5/6 flex flex-col items-center justify-center gap-8 lg:h-1/2 lg:w-3/4" id="projects">
            <div className="flex flex-col w-full gap-2 lg:gap-4">
                <h1 className="text-4xl font-bold lg:text-left lg:text-6xl">Projects</h1>
                <p className="font-satoshi lg:text-left lg:text-lg">
                    Check out some of the projects I've been working
                </p>
            </div>

            <div className="w-full flex flex-col gap-8">
                {projects.map((p) => (
                    <Project key={p.title} project={p} />
                ))}
            </div>
        </section>
    );
}
