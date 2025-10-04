import { useState, useEffect } from "react";
import { Menu, X, Briefcase, User, FolderGit2, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll"; // <-- import Link

const navItems = [
  { name: "Portfolio", path: "hero", icon: <Briefcase size={18} /> },
  { name: "About Me", path: "about", icon: <User size={18} /> },
  { name: "Projects", path: "projects", icon: <FolderGit2 size={18} /> },
  { name: "Contact", path: "contact", icon: <Mail size={18} /> },
];

const AssistiveNav = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { isDark } = useTheme();

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Floating Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer w-12 md:w-14 h-12 md:h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Slide Menu */}
          <div
            className={`absolute bottom-16 right-0 w-44 ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            } shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path} // target section id
                    smooth={true} // smooth scroll
                    duration={500} // scroll duration in ms
                    offset={-50} // adjust for fixed headers
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                      isDark
                        ? "hover:bg-black hover:text-white"
                        : "hover:bg-white hover:text-black"
                    } transition`}
                  >
                    <span className="text-primary">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AssistiveNav;
