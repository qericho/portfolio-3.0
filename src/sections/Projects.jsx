import { useState } from "react";
import Title from "../components/Title";
import ProjectModal from "../components/modals/ProjectModal ";
import projects from "../assets/data/projects";
import { motion } from "framer-motion";
import { fadeInBottom } from "../animations/variants";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

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
      <motion.div
        variants={fadeInBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        {["All", "Website", "Portfolio", "Other"].map((cat) => (
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
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {filteredProjects.map((project) => (
          <motion.div
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            key={project.id}
            onClick={() => setSelectedProject(project)} // 👈 open modal
            className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer"
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

              <div className="flex space-x-2 text-white">
                {project.demo !== "#" && (
                  <span className="text-xs bg-pink-500 px-3 py-1 rounded-md">
                    Demo
                  </span>
                )}
                {project.repo !== "#" && (
                  <span className="text-xs bg-gray-700 px-3 py-1 rounded-md">
                    Repo
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
