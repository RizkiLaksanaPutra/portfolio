'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import NavMenu from '@/components/Navbar/NavMenu';

export default function Home() {
    return (
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col font-overused text-accent-400">
            <Navbar />
            <NavMenu />

            <main className="mx-auto w-5/6 max-w-5xl py-12 lg:w-3/4">
                <section className="mb-10">
                    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-accent-300">Case Study</p>

                    <h1 className="text-4xl font-bold leading-tight lg:text-6xl">Insurance Agency Performance Dashboard</h1>

                    <p className="mt-3 max-w-3xl font-satoshi text-lg leading-relaxed text-accent-300">
                        Interactive insurance agency performance dashboard developed during my internship at FWD Insurance
                        Indonesia to support executive performance monitoring and data-driven decision making.
                    </p>
                </section>

                {/* Content */}
                <article className="font-satoshi text-accent-300 mb-4">
                    <div className="space-y-10">
                        {/* Context */}
                        <section className="space-y-2">
                            <div className="border-b border-secondary-400 pb-4">
                                <h2 className="text-3xl font-bold text-accent-400">Context</h2>
                            </div>

                            <div className="space-y-6 text-lg leading-8">
                                <p>
                                    During my internship as an Agency Strategy (Data Analytics & Reporting) Intern at FWD
                                    Insurance Indonesia, I was involved in supporting agency performance monitoring and reporting
                                    activities. To support executive decision-making, I developed an interactive Power BI
                                    dashboard that provides a consolidated view of agency performance across key business
                                    indicators.
                                </p>

                                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
                                    <p className="font-medium text-amber-300">
                                        Disclaimer: I recreated this only for portfolio purpose, this dashboard uses dummy data
                                        and does not represent my previous or any insurance company performances.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Challenge */}
                        <section className="space-y-8">
                            <div className="border-b border-secondary-400 pb-4">
                                <h2 className="text-3xl font-bold text-accent-400">Challenge</h2>
                            </div>

                            <figure className="overflow-hidden rounded-2xl border border-secondary-400">
                                <img src="/assets/sketch-1.png" alt="Dashboard Sketch" className="w-full" />
                            </figure>

                            <div className="space-y-6 text-lg leading-8">
                                <p>
                                    One of the main challenges was that the required data originated from multiple sources and
                                    reporting files. Business metrics such as sales production, active agents, recruitment,
                                    productivity, and manpower were maintained in separate datasets, often with different
                                    structures and update cycles. As a result:
                                </p>

                                <ul className="list-disc space-y-2 pl-6">
                                    <li>Performance reporting required significant manual effort</li>
                                    <li>Data consolidation was time-consuming</li>
                                    <li>Executives had limited visibility into real-time agency performance</li>
                                    <li>Identifying performance gaps against targets was not always straightforward</li>
                                </ul>

                                <p>
                                    The challenge was to transform fragmented operational data into a centralized and easily
                                    consumable performance monitoring solution.
                                </p>
                            </div>
                        </section>

                        {/* Process */}
                        <section className="space-y-10">
                            <div className="border-b border-secondary-400 pb-4">
                                <h2 className="text-3xl font-bold text-accent-400">Process</h2>
                            </div>

                            {/* Data Collection */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold text-accent-400">1. Data Collection & Consolidation</h3>

                                <ul className="list-disc space-y-2 pl-6 text-lg leading-8">
                                    <li>Gathered performance data from multiple reporting sources</li>
                                    <li>Standardized KPI definitions and reporting structures</li>
                                    <li>Consolidated datasets into a unified reporting model</li>
                                </ul>
                            </div>

                            {/* Data Transformation */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-accent-400">2. Data Transformation</h3>

                                <ul className="list-disc space-y-2 pl-6 text-lg leading-8">
                                    <li>Built data models and relationships in Power BI</li>
                                </ul>

                                <figure className="overflow-hidden rounded-2xl border border-secondary-400">
                                    <img src="/assets/model.jpg" alt="Power BI Data Model" className="w-full" />
                                </figure>

                                <ul className="list-disc space-y-2 pl-6 text-lg leading-8">
                                    <li>Developed calculated measures for business KPIs</li>
                                </ul>

                                <figure className="overflow-hidden rounded-2xl border border-secondary-400">
                                    <img src="/assets/measure.png" alt="DAX Measures" className="mx-auto w-full max-w-md" />
                                </figure>
                            </div>

                            {/* Dashboard Development */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-accent-400">3. Dashboard Development</h3>

                                <p className="text-lg leading-8">Designed an executive-level dashboard featuring:</p>

                                <ul className="list-disc space-y-2 pl-6 text-lg leading-8">
                                    <li>KPI scorecards</li>
                                    <li>Target achievement gauges</li>
                                    <li>Month-over-month performance comparison</li>
                                    <li>Historical trend analysis</li>
                                    <li>Dynamic KPI selection</li>
                                    <li>Performance benchmarking against targets</li>
                                </ul>

                                <figure className="overflow-hidden rounded-2xl border border-secondary-400">
                                    <img src="/assets/agency-dashboard.png" alt="Agency Dashboard" className="w-full" />
                                </figure>
                            </div>
                        </section>

                        {/* Impact */}
                        <section className="space-y-8">
                            <div className="border-b border-secondary-400 pb-4">
                                <h2 className="text-3xl font-bold text-accent-400">Impact</h2>
                            </div>

                            <p className="text-lg leading-8">
                                The dashboard streamlined agency performance reporting by establishing a centralized source of
                                truth for key business metrics. As a result, management and executives gained faster access to
                                performance information, improved visibility into agency operations, and greater ability to
                                monitor target achievement. The solution also reduced manual effort in report preparation, enabled
                                quicker identification of underperforming areas, and supported more informed, data-driven
                                decision-making across the business.
                            </p>
                        </section>

                        {/* Wish */}
                        <section className="space-y-8">
                            <div className='border-b pb-4 border-secondary-400 '>
                                <h2 className="text-3xl font-bold text-accent-400">I Wish I Could Show More</h2>
                            </div>

                            <div className="space-y-6 text-lg leading-8">
                                <p>
                                    This dashboard represents only a small part of what I worked on during my internship at FWD
                                    Insurance Indonesia. Beyond agency performance monitoring, I also contributed to several other
                                    reporting and analytics initiatives, including policy submission and issuance dashboards,
                                    agent persistency analysis, and agency contest tracking.
                                </p>

                                <p>
                                    However, due to data confidentiality and the complexity of recreating enterprise reporting
                                    solutions without access to the original datasets, most of these projects cannot be publicly
                                    demonstrated. While I wish I could showcase more of that work, I remain grateful for the
                                    opportunity to apply data analytics in a real business environment and contribute to
                                    decision-making processes within the insurance industry.
                                </p>
                            </div>
                        </section>
                    </div>
                </article>
            <Footer />
            </main>
        </div>
    );
}
