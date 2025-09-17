const ExperiencesSection = () => {
    const experiences = [
        {
            image: '/assets/dreamaxtion.jpg',
            company: 'Dreamaxtion',
            position: 'Frontend Developer',
            role: 'Internship',
            date: 'Jun 2025 - Sep 2025',
            duration: '4 Months',
            tasks: [
                'Converted UI/UX designs from Figma into fully responsive web pages using Vue.js, Nuxt.js, and Tailwind CSS',
                'Developed employee attendance web with core features such as attendance tracking, time off requests, and employee report',
                'Collaborated with backend team to integrate REST API endpoints and built reusable service classes to handle API communication with Axios',
                'Enhanced user experience by implementing loading states, form validation, and error handling with clear feedback messages',
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