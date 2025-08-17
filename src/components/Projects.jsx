import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";

export const Projects = () => {
  const projectData = [
    {
      img: project1,
      name: "React ChatBot",
      description: "A Live chat bot powered with Gemini API",
      live: "https://ankush-chatbot.netlify.app/",
      github: "https://github.com/ShoorAnkush/ChatBot",
    },
    {
      img: project2,
      name: "Movie Search App",
      description:
        "A movie search app to find movies with their rating, description etc",
      live: "https://ankush-moviefinder.netlify.app/",
      github: "https://github.com/ShoorAnkush/MovieFinder",
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
