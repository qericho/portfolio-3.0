import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  // Animation when modal opens
  useEffect(() => {
    if (project) {
      setTimeout(() => setShow(true), 50);
    } else {
      setShow(false);
    }
  }, [project]);

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 250);
  };

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
        show
          ? "bg-black/70 backdrop-blur-sm opacity-100"
          : "bg-black/0 opacity-0"
      }`}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
      >
        <X size={25} />
      </button>
      <div
        ref={modalRef}
        className={`bg-theme text-theme rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 relative transform transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-5 border border-border">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Title & Category */}
        <h2 className="text-2xl font-semibold mb-1">{project.name}</h2>
        <p className="text-sm text-theme mb-4">{project.category}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs text-white bg-gray-800 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-theme text-sm leading-relaxed mb-6">
          {project.desc || "No description available for this project."}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-5 py-2 rounded-md transition duration-200 shadow-md"
            >
              Demo
            </a>
          )}
          {project.repo && project.repo !== "#" && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-5 py-2 rounded-md transition duration-200 shadow-md"
            >
              Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
