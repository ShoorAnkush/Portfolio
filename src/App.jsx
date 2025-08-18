import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDesktop, SetIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => SetIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:hidden">
        {/* Left: About Close */}
        <button
          onClick={() => {
            setIsAboutOpen(prev => !prev);
            setIsNavbarOpen(false);
          }}
          className="text-white text-2xl"
        >
          <BsThreeDotsVertical />
        </button>

        {/* Right: Navbar Close */}
        <button
          onClick={() => {
            setIsAboutOpen(false);
            setIsNavbarOpen(prev => !prev);
          }}
          className="text-white text-2xl"
        >
          {isNavbarOpen ? <RxCross2 /> : <IoMenu />}
        </button>
      </div>

      {/* Left: About Open */}
      {isAboutOpen && (
        <div className="fixed top-0 z-40 flex">
          <div className="w-72 overflow-y-auto">
            <About />
          </div>
        </div>
      )}

      {/* Right: Navbar Open */}
      {isNavbarOpen && (
        <div className="fixed z-40 flex right-0">
          <div className="h-screen pt-22 shadow-2xl bg-accent2">
            <Navbar forceExpanded />
          </div>
        </div>
      )}

      {/* Desktop */}
      <div
        className="grid w-full h-screen transition-all duration-300 bg-darkbg p-0 md:p-4 box-border overflow-hidden
    grid-cols-1 md:grid-rows-none "
        style={{
          // desktop dynamic widths
          gridTemplateColumns: isDesktop
            ? isNavbarExpanded
              ? "20% 65% 15%"
              : "20% 75% 5%"
            : "1fr",
          gridTemplateAreas: isDesktop ? `"about hero navbar"` : `"hero"`,
        }}
      >
        {/* About column */}
        <div
          className="hidden md:block h-full overflow-hidden shadow-2xl"
          style={{ gridArea: "about" }}
        >
          <About />
        </div>

        {/* Hero column */}
        <div
          className="h-full overflow-y-auto 
          hide-scrollbar scroll-smooth shadow-2xl"
          style={{ gridArea: "hero" }}
        >
          <Hero />
        </div>

        {/* Navbar column */}
        <div
          className="hidden md:block bg-accent2 shadow-2xl"
          style={{ gridArea: "navbar" }}
        >
          <Navbar toggleExpand={() => setIsNavbarExpanded(prev => !prev)} />
        </div>
      </div>
    </>
  );
}

export default App;
