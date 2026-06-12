const ExperiencesSection = () => {
    const experiences = [
        {
            image: '/assets/fwd.jpg',
            company: 'FWD Insurance Indonesia',
            position: 'Agency Strategy (Data Analytics & Reporting)',
            role: 'Internship',
            date: 'Nov 2025 - May 2026',
            duration: '6 Months',
            tasks: [
                'Managed tracking and reporting for 4 monthly and 9 quarterly agency contests, delivering accurate and timely insights to 5+ stakeholders',
                'Developed and maintained 6 Power BI dashboards covering agency performance KPIs, submission and issuance performance, agent persistency, monthly contests, and quarterly contests, reducing manual reporting effort and improving reporting efficiency',
                'Analyzed agency sales performance trends across 8 agency groups, 7 BDMs, and 2 types of agent hierarchy structures by consolidating and processing over 400,000 records from 6 data sources on a regular basis to support performance evaluation and data-driven decision making',
                'Collaborated with 5+ stakeholders from cross-functional teams to provide data support for 3 agency events',
            ],
        },
        {
            image: '/assets/dreamaxtion.jpg',
            company: 'Dreamaxtion',
            position: 'Frontend Developer',
            role: 'Freelance',
            date: 'Jun 2025 - Sep 2025',
            duration: '4 Months',
            tasks: [
                'Developed employee attendance web with core features such as attendance tracking, time off requests, and employee report',
                'Collaborated with stakeholders to translate business requirements into functional web solutions',
                'Integrated REST APIs and validated operational data to ensure system reliability and data accuracy',
                'Improved user experience through optimized workflows, form validation, and error handling',
            ],
        },
        {
            image: '/assets/kemdikbud.png',
            company: 'Kemendikdasmen',
            position: 'Frontend Developer',
            role: 'Internship',
            date: 'Sep 2024 - Nov 2024',
            duration: '3 Months',
            tasks: [
                'Built a chatbot web using React, Next.js, Tailwind CSS, Langchain, and Google Gemini API',
                'Create topic-switching feature between regulatory and knowledge domains',
                'Optimized AI response performance by integrating Faiss library, reducing response time from 8 to 4 seconds',
                'Configured VPS to host the chatbot website',
            ],
        },
    ];

    return (
        <section className="h-full w-5/6 lg:h-1/2 lg:w-3/4" id="experiences">
            <h1 className="text-4xl font-bold text-left lg:text-6xl mb-8">Experiences</h1>
            <div className="flex flex-col gap-8">
                {experiences.map((experience, index) => (
                    <div className="flex gap-3 font-satoshi" key={index}>
                        <div className="size-12 shrink-0">
                            <img src={experience.image} />
                        </div>
                        <div>
                            <div className="mb-3">
                                <h3 className="text-xl font-bold">{experience.company}</h3>
                                <p>
                                    {experience.position} | {experience.role}
                                </p>
                                <p>
                                    {experience.date} | {experience.duration}
                                </p>
                            </div>
                            <ul className="list-disc list-inside">
                                {experience.tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperiencesSection;