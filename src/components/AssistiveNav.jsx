import { useState, useEffect } from "react";
import { Menu, X, Briefcase, User, FolderGit2, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";

const navItems = [
  { name: "Portfolio", path: "hero", icon: <Briefcase size={18} /> },
  { name: "About Me", path: "about", icon: <User size={18} /> },
  { name: "Projects", path: "projects", icon: <FolderGit2 size={18} /> },
  { name: "Contact", path: "contact", icon: <Mail size={18} /> },
];

const AssistiveNav = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");
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
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    spy={true}
                    onSetActive={() => setActive(item.name)}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer relative transition-all duration-200
                      ${
                        active === item.name
                          ? isDark
                            ? "text-black font-semibold"
                            : "text-white font-semibold"
                          : ""
                      }
                      group
                    `}
                  >
                    {/* Icon */}
                    <span
                      className={`${
                        active === item.name
                          ? "text-primary"
                          : "text-primary/80"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {/* Name */}
                    <span className="relative">
                      {item.name}
                      {/* Underline animation */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                          active === item.name ? "w-5" : "w-0 group-hover:w-5"
                        }`}
                      ></span>
                    </span>
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
