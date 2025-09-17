import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative z-10 flex w-5/6 flex-col gap-8 py-8 lg:w-3/4">
            <div className="flex w-full flex-wrap gap-8 sm:flex-nowrap">
                <div className="w-full flex-grow lg:w-3/5">
                    <h2 className="text-xl font-bold text-accent-300">NAVIGATION</h2>
                    <ul className="mt-2 space-y-1 font-satoshi">
                        <li>
                            <Link href="#home">Home</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#projects">Projects</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full flex-grow lg:w-1/5">
                    <h2 className="text-xl font-bold text-accent-300">SOCIALS</h2>
                    <ul className="mt-2 space-y-1 font-satoshi">
                        <li>
                            <a href="https://www.linkedin.com/in/rizkilaksana/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/RizkiLaksanaPutra" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <h1 className="text-2xl font-bold">© {new Date().getFullYear()} RIZKI LAKSANA PUTRA</h1>
        </footer>
    );
};

export default Footer;
