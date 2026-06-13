'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import NavMenu from '@/components/Navbar/NavMenu';

export default function Home() {
    return (
        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-6 bg-primary-200 font-overused text-accent-400 lg:gap-24 2xl:gap-18 3xl:gap-16 2xl:px-12">
            <Navbar />
            <NavMenu />
            <section className="h-full w-5/6 lg:h-1/2 lg:w-3/4">
                <h1 className="text-4xl font-bold text-left lg:text-4xl mb-8">Insurance Agency Performance Dashboard</h1>
                <div className="font-satoshi flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Context</h2>
                    <p>
                        During my internship as an Agency Strategy (Data Analytics & Reporting) Intern at FWD Insurance Indonesia,
                        I was involved in supporting agency performance monitoring and reporting activities. To support executive
                        decision-making, I developed an interactive Power BI dashboard that provides a consolidated view of agency
                        performance across key business indicators.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
