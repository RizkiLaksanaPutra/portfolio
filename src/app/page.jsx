import Navbar from "./components/Navbar/NavbarDesktop/Navbar";
import NavMenu from "./components/Navbar/NavbarMobile/NavMenu";

export default function Home() {
  return (
    <div className="relative mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-6 bg-primary-200 font-overused text-accent-400 lg:gap-28 2xl:gap-24 2xl:px-12 3xl:gap-16">
      <Navbar />
      <NavMenu />
    </div>
  );
}
