import { useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Spin as Hamburger } from "hamburger-react";

function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center lg:hidden m-6 md:m-12">
        {/* Left: About toggle */}
        <button
          onClick={() => {
            setIsAboutOpen(prev => !prev);
            setIsNavbarOpen(false);
          }}
          className={`text-darkcard text-2xl transition-transform duration-300 ease-in-out 
            ${isAboutOpen ? "rotate-90 opacity-70" : "rotate-0 opacity-100"} 
            bg-accent4/40 rounded-full p-3`}
        >
          <BsThreeDotsVertical />
        </button>

        {/* Right: Navbar toggle */}
        <button className="bg-accent4/40 rounded-full">
          <Hamburger
            color="#13202b"
            size={22}
            rounded
            toggled={isNavbarOpen}
            toggle={() => {
              setIsAboutOpen(false);
              setIsNavbarOpen(prev => !prev);
            }}
            label="Toggle navigation menu"
          />
        </button>
      </div>

      {/* Mobile: About slide-in */}
      <div
        className={`fixed top-0 left-0 h-full z-40 flex transition-transform duration-500 ease-in-out
          ${isAboutOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-72 overflow-y-auto shadow-2xl bg-accent2">
          <About />
        </div>
      </div>

      {/* Mobile: Navbar slide-in */}
      <div
        className={`fixed top-0 right-0 h-full z-40 flex transition-transform duration-500 ease-in-out
    ${isNavbarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-32 h-screen pt-22 shadow-2xl bg-accent2">
          <Navbar forceExpanded />
        </div>
      </div>

      {/* Desktop & Mobile/Tablet grid */}
      <div
        className={`grid w-full h-screen transition-all duration-300 bg-darkbg p-0 lg:p-4 box-border overflow-hidden
    grid-cols-1 ${
      isNavbarExpanded
        ? "lg:grid-cols-[20%_65%_15%]"
        : "lg:grid-cols-[20%_75%_5%]"
    }
  `}
      >
        {/* About column (desktop only) */}
        <div className="hidden lg:block h-full overflow-hidden shadow-2xl">
          <About />
        </div>

        {/* Hero column */}

        <div className="h-full overflow-y-auto hide-scrollbar scroll-smooth shadow-2xl">
          <Hero />
        </div>

        {/* Navbar column (desktop only) */}
        <div className="hidden lg:block bg-accent2 shadow-2xl">
          <Navbar toggleExpand={() => setIsNavbarExpanded(prev => !prev)} />
        </div>
      </div>
    </>
  );
}

export default App;
