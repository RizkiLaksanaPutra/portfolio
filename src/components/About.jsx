import { motion } from 'framer-motion';
import {
    FaCode,
    FaScrewdriverWrench,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaVuejs,
    FaGithub,
    FaFigma,
} from 'react-icons/fa6';
import { SiNextdotjs, SiNuxtdotjs, SiTailwindcss, SiMysql, SiPostman, SiDbeaver } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import SkillButton from './SkillButton';

export default function About() {
    const technicalSkills = [
        {
            text: 'HTML',
            icon: <FaHtml5 className="text-orange-500" />,
        },
        {
            text: 'CSS',
            icon: <FaCss3Alt className="text-blue-500" />,
        },
        {
            text: 'Javascript',
            icon: <FaJs className="text-yellow-400" />,
        },
        {
            text: 'Vue.js',
            icon: <FaVuejs className="text-green-500" />,
        },
        {
            text: 'React.js',
            icon: <FaReact className="text-cyan-400" />,
        },
        {
            text: 'Nuxt.js',
            icon: <SiNuxtdotjs className="text-green-600" />,
        },
        {
            text: 'Next.js',
            icon: <SiNextdotjs className="text-white" />,
        },
        {
            text: 'Tailwind CSS',
            icon: <SiTailwindcss className="text-sky-400" />,
        },
        {
            text: 'Node.js',
            icon: <FaNodeJs className="text-green-600" />,
        },
        {
            text: 'MySQL',
            icon: <SiMysql className="text-blue-600" />,
        },
    ];

    const tools = [
        {
            text: 'Visual Studio Code',
            icon: <BiLogoVisualStudio className="text-blue-500" />,
        },
        {
            text: 'Github',
            icon: <FaGithub className="text-white" />,
        },
        {
            text: 'Figma',
            icon: <FaFigma className="text-white" />,
        },
        {
            text: 'Postman',
            icon: <SiPostman className="text-orange-500" />,
        },
        {
            text: 'Dbeaver',
            icon: <SiDbeaver className="text-gray-800" />,
        },
    ];

    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: index * 0.1,
                duration: 1,
                type: 'spring',
            },
        }),
    };

    return (
        <section className="flex h-full w-5/6 flex-col justify-center gap-8 lg:h-1/2 lg:w-3/4" id="about">
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
                        Hi! I'm Rizki Laksana Putra, a passionate Frontend Developer based in South Tangerang, Indonesia. I'm a
                        recent Information System graduate from Mercu Buana University but I consider myself a lifelong learner in
                        the industry. I specialize in the frontend primarily with Vue.js but can also use React.js depending on
                        project needs, which i mainly learned through hands-on projects from internships and{' '}
                        <a href="https://www.theodinproject.com/" className="underline" target="_blank">
                            The Odin Project
                        </a>{' '}
                        course.
                    </motion.p>
                    <motion.p
                        className="text-left font-satoshi lg:text-lg"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={6}
                    >
                        Currently, I am seeking opportunities to grow as a frontend developer with a dynamic team that values
                        creativity, innovation, and a commitment to excellence. I am eager to contribute to projects that
                        challenge my skills and allow me to grow alongside with professionals in a supportive and forward-thinking
                        environment.
                    </motion.p>
                    <motion.p
                        className="text-left font-satoshi lg:text-lg"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={7}
                    >
                        Besides frontend development, I also have expertise in data analysis and machine learning, which I
                        acquired during my university studies and several bootcamps. I have a solid understanding of data
                        processing, predictive modeling, and implementing machine learning algorithms.
                    </motion.p>
                </div>
                <div className="flex w-full flex-col gap-6 md:w-1/3">
                    <motion.div
                        className="z-10 flex flex-col gap-4"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={5}
                    >
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <FaCode />
                            Technical Skills
                        </h2>
                        <ul className="flex flex-wrap gap-2">
                            {technicalSkills.map((skill) => (
                                <li key={skill.text}>
                                    <SkillButton icon={skill.icon} text={skill.text} />
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        className="z-10 flex flex-col gap-4"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={6}
                    >
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <FaScrewdriverWrench />
                            Tools
                        </h2>
                        <ul className="flex flex-wrap gap-2">
                            {tools.map((tool) => (
                                <li key={tool.text}>
                                    <SkillButton icon={tool.icon} text={tool.text} />
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
