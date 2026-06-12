import { motion } from 'framer-motion';
import {
    FaCode,
    FaScrewdriverWrench,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPython,
    FaVuejs,
    FaGithub,
    FaFigma,
    FaDatabase,
} from 'react-icons/fa6';
import {
    SiNextdotjs,
    SiNuxtdotjs,
    SiTailwindcss,
    SiMysql,
    SiPostman,
    SiDbeaver,
    SiLooker,
    SiGooglebigquery,
    SiGooglesheets,
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { RiFileExcel2Fill } from 'react-icons/ri';
import SkillButton from './SkillButton';

export default function About() {
    const technicalSkills = [
        {
            text: 'SQL',
            icon: <FaDatabase className="text-blue-600" />,
        },
        {
            text: 'Python',
            icon: <FaPython className="text-blue-300" />,
        },
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
    ];

    const tools = [
        {
            text: 'Microsoft Excel',
            icon: <RiFileExcel2Fill className="text-green-600" />,
        },
        {
            text: 'Google Sheet',
            icon: <SiGooglesheets className="text-green-600" />,
        },
        {
            text: 'Google Bigquery',
            icon: <SiGooglebigquery className="text-blue-300" />,
        },
        // {
        //     text: 'Visual Studio Code',
        //     icon: <BiLogoVisualStudio className="text-blue-500" />,
        // },
        // {
        //     text: 'Github',
        //     icon: <FaGithub className="text-white" />,
        // },
        // {
        //     text: 'Figma',
        //     icon: <FaFigma className="text-white" />,
        // },
        // {
        //     text: 'Postman',
        //     icon: <SiPostman className="text-orange-500" />,
        // },
        // {
        //     text: 'Dbeaver',
        //     icon: <SiDbeaver className="text-gray-800" />,
        // },
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
                        Hi! I'm Rizki Laksana Putra, a Data Analyst with a background in Information Systems and practical
                        experience in business intelligence, dashboard development, and performance analysis. I
                        specialize in transforming raw data into meaningful insights that support strategic decision-making and
                        operational improvements.
                    </motion.p>
                    <motion.p
                        className="text-left font-satoshi lg:text-lg"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={6}
                    >
                        My experience includes developing analytical dashboards, automating reporting processes, monitoring key
                        business metrics, and analyzing large datasets using SQL, Excel, Power BI, and Looker Studio. Through
                        projects and professional experience in the insurance industry, I have worked closely with stakeholders to
                        identify trends, evaluate performance, and provide actionable recommendations based on data.
                    </motion.p>
                    <motion.p
                        className="text-left font-satoshi lg:text-lg"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={7}
                    >
                        In addition to analytics, I have a foundation in software development and machine learning, enabling me to
                        bridge technical implementation with business objectives. I am passionate about continuous learning and
                        enjoy solving complex problems through data, critical thinking, and structured analysis.
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
                            Programming Language
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
