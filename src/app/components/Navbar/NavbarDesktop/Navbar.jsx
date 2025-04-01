const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="duration-[400ms] group relative w-20 px-2 py-1 font-satoshi text-accent-400 transition-colors hover:font-medium hover:text-accent-400 cursor-pointer"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-accent-400 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-accent-400 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-accent-400 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-accent-400 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default function Navbar() {
  return (
    <header className="z-40 w-full overflow-x-hidden px-8 py-4 lg:px-16">
      <nav className="flex w-full items-center justify-between">
        <a href="">
          <h1 className="min-w-fit text-2xl font-bold">Rizki Laksana Putra</h1>
        </a>
        <ul className="hidden gap-4 text-lg lg:flex">
          <li>
            <a href="">
              <DrawOutlineButton>Home</DrawOutlineButton>
            </a>
          </li>
          <li>
            <a href="">
              <DrawOutlineButton>About</DrawOutlineButton>
            </a>
          </li>
          <li>
            <a href="">
              <DrawOutlineButton>Projects</DrawOutlineButton>
            </a>
          </li>
          <li>
            <a href="">
              <DrawOutlineButton>Contact</DrawOutlineButton>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <DrawOutlineButton>Resume</DrawOutlineButton>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
