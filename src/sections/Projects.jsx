import { useState } from "react";
import Title from "../components/Title";

const projects = [
  {
    id: 1,
    category: "Web Development",
    img: "https://picsum.photos/id/1025/400/250",
    name: "E-commerce Platform",
    stack: ["React", "Node.js", "MongoDB"],
    repo: "sample-repo-link",
    demo: "sample-demo-link",
  },
  {
    id: 2,
    category: "Web Development",
    img: "https://picsum.photos/id/1018/400/250",
    name: "Portfolio Website",
    stack: ["React", "Tailwind", "Vercel"],
    repo: "sample-repo-link",
    demo: "sample-demo-link",
  },
  {
    id: 3,
    category: "UI/UX Design",
    img: "https://picsum.photos/id/1021/400/250",
    name: "Mobile App Redesign",
    stack: ["Figma", "Adobe XD"],
    repo: "#",
    demo: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="bg-theme text-theme xl:pt-6 pt-4 lg:px-2 sm:px-10 px-2"
    >
      <div className="text-center">
        <Title title="Projects" subtitle="A selection of my recent work." />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["All", "Web Development", "UI/UX Design", "Other"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`cursor-pointer px-8 py-2 text-sm rounded-md font-medium transition-colors duration-300 ${
              filter === cat
                ? "bg-pink-500 text-white"
                : "bg-transparent border border-gray-600 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-lg overflow-hidden shadow-md group"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 bg-opacity-70 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg text-light font-semibold mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-gray-300 mb-2">{project.category}</p>

              {/* Tech Stack Names */}
              <div className="text-white flex flex-wrap gap-2 mb-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-800 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Demo & Repo Buttons */}
              <div className="flex space-x-2 text-white">
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-pink-500 px-3 py-1 rounded-md hover:bg-pink-600 transition"
                  >
                    Demo
                  </a>
                )}
                {project.repo !== "#" && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-600 transition"
                  >
                    Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
