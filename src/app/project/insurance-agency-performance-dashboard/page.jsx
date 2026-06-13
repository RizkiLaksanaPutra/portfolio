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
                <div className="font-satoshi flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">Context</h2>
                    <p>
                        During my internship as an Agency Strategy (Data Analytics & Reporting) Intern at FWD Insurance Indonesia,
                        I was involved in supporting agency performance monitoring and reporting activities. To support executive
                        decision-making, I developed an interactive Power BI dashboard that provides a consolidated view of agency
                        performance across key business indicators.
                    </p>
                    <p className=" my-2 p-2 rounded-xl bg-red-300 text-red-600 font-bold">
                        Disclaimer: I recreated this only for portfolio purpose, this dashboard uses dummy data and does not
                        represent my previous or any insurance company performances
                    </p>
                    <h2 className="text-2xl font-bold">Challenge</h2>
                    <img src="/assets/sketch-1.png" alt="sketch" />
                    <p>
                        One of the main challenges was that the required data originated from multiple sources and reporting
                        files. Business metrics such as sales production, active agents, recruitment, productivity, and manpower
                        were maintained in separate datasets, often with different structures and update cycles. As a result:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Performance reporting required significant manual effort</li>
                        <li>Data consolidation was time-consuming</li>
                        <li>Executives had limited visibility into real-time agency performance</li>
                        <li>Identifying performance gaps against targets was not always straightforward</li>
                    </ul>
                    <p>
                        The challenge was to transform fragmented operational data into a centralized and easily consumable
                        performance monitoring solution
                    </p>
                    <h2 className="text-2xl font-bold">Process</h2>
                    <p>To address these challenges, I followed a structured analytics workflow:</p>
                    <p className="text-xl font-bold">Data Collection & Consolidation</p>
                    <ul className="list-disc list-inside">
                        <li>Gathered performance data from multiple reporting sources</li>
                        <li>Standardized KPI definitions and reporting structures</li>
                        <li>Consolidated datasets into a unified reporting model</li>
                    </ul>
                    <p className="text-xl font-bold">Data Transformation</p>
                    <ul className="list-disc list-inside">
                        <li>Built data models and relationships in Power BI</li>
                    </ul>
                    <img src="/assets/model.jpg" alt="" />
                    <ul className="list-disc list-inside">
                        <li>Developed calculated measures for business KPIs</li>
                    </ul>
                    <img className="w-1/6" src="/assets/measure.png" alt="" />
                    <p className="text-xl font-bold">Dashboard Development</p>
                    <p>Designed an executive-level dashboard featuring:</p>
                    <ul className="list-disc list-inside">
                        <li>KPI scorecards</li>
                        <li>Target achievement gauges</li>
                        <li>Month-over-month performance comparison</li>
                        <li>Historical trend analysis</li>
                        <li>Dynamic KPI selection</li>
                        <li>Performance benchmarking against targets</li>
                    </ul>
                    <img src="/assets/agency-dashboard.png" alt="" />
                    <h2 className="text-2xl font-bold">Impact</h2>
                    <p>
                        The dashboard streamlined agency performance reporting by establishing a centralized source of truth for
                        key business metrics. As a result, management and executives gained faster access to performance
                        information, improved visibility into agency operations, and greater ability to monitor target
                        achievement. The solution also reduced manual effort in report preparation, enabled quicker identification
                        of underperforming areas, and supported more informed, data-driven decision-making across the business.
                    </p>
                    <h2 className="text-2xl font-bold">I Wish I Could Show More</h2>
                    <p>
                        This dashboard represents only a small part of what I worked on during my internship at FWD Insurance
                        Indonesia. Beyond agency performance monitoring, I also contributed to several other reporting and
                        analytics initiatives, including policy submission and issuance dashboards, agent persistency analysis,
                        and agency contest tracking.
                    </p>
                    <p>
                        However, due to data confidentiality and the complexity of recreating enterprise reporting solutions
                        without access to the original datasets, most of these projects cannot be publicly demonstrated. While I
                        wish I could showcase more of that work, I remain grateful for the opportunity to apply data analytics in
                        a real business environment and contribute to decision-making processes within the insurance industry.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
