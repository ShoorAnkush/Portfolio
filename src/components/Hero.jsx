import { Typewriter } from "react-simple-typewriter";
import { History } from "./History";
import { Projects } from "./Projects";
import heroBack from "../assets/images/heroback.png";
import { Contact } from "./Contact";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-3 px-4 py-4 bg-cover max-sm:px-2 max-sm:py-2">
      {/* Banner */}
      <div
        id="home"
        className="h-112 flex flex-col justify-center items-center bg-no-repeat bg-cover text-center max-sm:h-72"
        style={{
          backgroundImage: `url(${heroBack})`,
          backgroundPosition: "center 25%",
        }}
      >
        <div className="text-3xl md:text-5xl max-sm:text-2xl font-extrabold text-accent1 drop-shadow-md">
          Hello World!
        </div>

        {/* Animated Code */}
        <p className="text-lg md:text-xl max-sm:text-xs font-mono text-accent1 md:text-card mt-2">
          &lt;code&gt;I Create{" "}
          <span className="text-sky max-sm:text-xs">
            <Typewriter
              words={["UI Flows", "Website Designs"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          &lt;/code&gt;
        </p>

        <button
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className="bg-accent1 cursor-pointer hover:bg-sky text-sandy font-bold py-2 px-6 max-sm:py-2 max-sm:px-4 max-sm:text-sm rounded-lg mt-4 transition"
        >
          See Projects
        </button>
      </div>

      {/* History */}
      <div
        id="history"
        className="flex justify-center items-center bg-accent2 py-8 max-sm:py-4"
      >
        <History />
      </div>

      {/* Projects */}
      <div
        id="projects"
        className="flex justify-center items-center bg-darkbg py-8 max-sm:py-4"
      >
        <Projects />
      </div>

      {/* Contact */}
      <div id="contact" className="flex justify-center items-center bg-sky">
        <Contact />
      </div>
    </div>
  );
};
