"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import NavMenu from "@/components/Navbar/NavMenu";

export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-6 bg-primary-200 font-overused text-accent-400 lg:gap-24 2xl:gap-18 3xl:gap-16 2xl:px-12">
      <Navbar />
      <NavMenu />
      <Hero />
      <About />
    </div>
  );
}
