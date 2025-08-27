import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

export const Projects = () => {
  const projectData = [
    {
      img: project1,
      name: "React ChatBot",
      description: `An AI-powered chatbot application developed with React,
      featuring modular components, a clean conversational UI, and smooth animations. The app
      integrates with the Gemini API to handle user queries and generate
      dynamic responses. This project showcases my ability to connect front-end interfaces with
      back-end APIs, manage asynchronous data flow, and create engaging, real-world applications.`,
      live: "https://ankush-chatbot.netlify.app/",
      github: "https://github.com/ShoorAnkush/ChatBot",
    },
    {
      img: project2,
      name: "Movie Search App",
      description: `A responsive movie search application built with React,
      featuring filtering by movie title, IMDb rating, genre, year, and plot. It integrates with
      an external movie API (TMBD) to fetch real-time data and display detailed information in a clean,
      user-friendly interface, demonstrating skills in API handling, state management, and
      building interactive search functionality.`,
      live: "https://ankush-moviefinder.netlify.app/",
      github: "https://github.com/ShoorAnkush/MovieFinder",
    },
    {
      img: project3,
      name: "Pokédex - Pokémon Encyclopedia",
      description: `I built this interactive Pokémon web app using React (Vite) and Tailwind CSS, 
      featuring modular components, dynamic search, and API handling through the PokéAPI to fetch 
      and display real-time Pokémon data such as stats, types, and abilities. The project demonstrates 
      my skills in front-end development, API integration, and building responsive, user-friendly 
      applications for exploring and managing data.`,
      live: "https://ankush-pokedex.netlify.app/",
      github: "https://github.com/ShoorAnkush/Pokedex",
    },
  ];

  return (
    <div className="w-full h-full py-8 px-4 sm:px-8 md:px-16 bg-darkbg">
      <h2 className="text-3xl font-bold mb-8 text-peach tracking-wide">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="card bg-accent1 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-sandy">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex md:flex-row sm:flex-col  gap-2 sm:gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 bg-sandy text-darkbg font-semibold rounded hover:bg-peach transition text-center"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 bg-accent2 text-white font-semibold rounded hover:bg-peach transition text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
