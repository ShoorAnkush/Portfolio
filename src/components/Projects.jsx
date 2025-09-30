import { motion } from "framer-motion";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import SparklesCore from "./ui/SparklesCore";

export const Projects = () => {
  const projectData = [
    {
      img: project1,
      name: "React ChatBot",
      tech: ["React", "Context API", "Framer Motion", "Gemini API", "Netlify"],
      description: `An AI-powered chatbot featuring modular components, a clean conversational UI, and smooth animations.`,
      features: [
        "Gemini API integration for real-time dynamic responses",
        "Context API + Hooks for global state management",
        "Framer Motion animations for seamless transitions",
        "Responsive, mobile-first design",
        "Deployed with Netlify CI/CD pipelines",
      ],
      challenges: `Handled async API calls with error boundaries and optimized re-renders using memoization.`,
      live: "https://ankush-chatbot.netlify.app/",
      github: "https://github.com/ShoorAnkush/ChatBot",
    },
    {
      img: project2,
      name: "Movie Search App",
      tech: ["React", "TMDB API", "TailwindCSS", "Netlify"],
      description: `A responsive movie search application with advanced filtering and real-time data fetching.`,
      features: [
        "Filter by title, IMDb rating, genre, year, and plot",
        "External TMDB API integration",
        "Custom hooks for clean state management",
        "Optimized search with debouncing",
        "Responsive UI with TailwindCSS",
      ],
      challenges: `Implemented efficient API calls while avoiding unnecessary re-renders for smooth search results.`,
      live: "https://ankush-moviefinder.netlify.app/",
      github: "https://github.com/ShoorAnkush/MovieFinder",
    },
    {
      img: project3,
      name: "Pokédex - Pokémon Encyclopedia",
      tech: ["React (Vite)", "TailwindCSS", "PokéAPI"],
      description: `An interactive encyclopedia for exploring Pokémon stats, types, and abilities.`,
      features: [
        "Dynamic search with real-time API data",
        "PokéAPI integration for stats, types, abilities",
        "Component-driven architecture with React (Vite)",
        "Responsive, mobile-first UI",
        "Deployed on Netlify for fast delivery",
      ],
      challenges: `Designed an optimized rendering strategy for 1000+ Pokémon without performance bottlenecks.`,
      live: "https://ankush-pokedex.netlify.app/",
      github: "https://github.com/ShoorAnkush/Pokedex",
    },
  ];

  return (
    <div className="w-full h-full py-8 px-4 sm:px-8 md:px-16 bg-darkbg">
      <SparklesCore particleColor="#ffd166" className="w-full">
        <h2 className="text-3xl font-bold mb-12 text-peach tracking-wide">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card bg-accent1 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform"
            >
              {/* Project Image with Hover Overlay */}
              <div className="relative group">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white font-semibold text-lg">
                    {project.name}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-sandy">
                  {project.name}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-accent2 text-white rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-3">{project.description}</p>

                {/* Features */}
                <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                {/* Challenges */}
                <p className="italic text-sm text-gray-500 mb-4">
                  <span className="font-semibold">
                    Challenges & Learnings:{" "}
                  </span>
                  {project.challenges}
                </p>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-sandy text-darkbg font-semibold rounded hover:bg-peach transition text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-accent2 text-white font-semibold rounded hover:bg-peach transition text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SparklesCore>
    </div>
  );
};
