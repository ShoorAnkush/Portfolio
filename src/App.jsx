import { useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  return (
    <div
      className="grid w-full h-screen transition-all duration-300 bg-darkbg p-4 box-border overflow-hidden grid-cols-1 md:grid-cols-[auto_auto_auto] grid-rows-auto md:grid-rows-none"
      style={{
        // desktop dynamic widths
        gridTemplateColumns: isNavbarExpanded ? "20% 65% 15%" : "20% 75% 5%",
        gridTemplateAreas: `"about hero navbar"`,
      }}
    >
      {/* About column */}
      <div
        className="h-full overflow-hidden shadow-2xl"
        style={{ gridArea: "about" }}
      >
        <About />
      </div>

      {/* Hero column */}
      <div
        className="h-full overflow-y-auto hide-scrollbar scroll-smooth shadow-2xl"
        style={{ gridArea: "hero" }}
      >
        <Hero />
      </div>

      {/* Navbar column */}
      <div className="bg-accent2 shadow-2xl" style={{ gridArea: "navbar" }}>
        <Navbar toggleExpand={() => setIsNavbarExpanded(prev => !prev)} />
      </div>
    </div>
  );
}

export default App;
