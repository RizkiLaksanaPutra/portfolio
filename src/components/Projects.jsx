'use client';

import { useRouter } from 'next/navigation';
import SkillButton from './SkillButton';
import LinkButton from './LinkButton';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Project({ project }) {
    const router = useRouter();
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
            onClick={() => router.push(`/project/${project.slug}`)}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="z-10 flex flex-col p-2 rounded-2xl gap-4 lg:flex-row lg:gap-8 transition-colors hover:bg-secondary-400 hover:cursor-pointer"
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
            slug: 'insurance-agency-performance-dashboard',
            title: 'Insurance Agency Performance Dashboard',
            image: '/assets/agency-performance.png',
            description: 'Interactive insurance agency performance dashboard featuring KPI scorecards, target attainment monitoring, trend analysis, and operational metrics to support performance evaluation and business decision-making',
            skills: ['SQL', 'Excel', 'Power BI'],
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
