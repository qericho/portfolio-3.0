import { useState } from "react";
import { Menu, Sun, SunMoon, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// Navigation items array with name and path
const navItems = [
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact Me", path: "/contact" },
];

const Nav = () => {
  const { isDark, toggleTheme } = useTheme();
  const [active, setActive] = useState(navItems[0].name);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown

  return (
    <div className="bg-theme text-theme w-full relative">
      <div className="flex max-w-7xl mx-auto justify-between items-center xl:py-6 py-4 lg:px-2 sm:px-10 px-2">
        {/* Logo/Brand */}
        <h1 className="text-lg md:text-2xl font-bold">E.STA</h1>
        {/* Desktop Navigation */}
        <ul className="lg:flex hidden items-center gap-6">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer underline-offset-4 font-semibold text-sm
                ${
                  active === item.name
                    ? "underline decoration-primary decoration-2 underline-offset-8"
                    : "hover:underline decoration-primary decoration-2 underline-offset-8"
                }
              `}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        {/* Theme toggle and dropdown menu button */}
        <div className="flex items-center gap-x-3">
          {isDark ? (
            <span className="cursor-pointer" onClick={toggleTheme}>
              <Sun />
            </span>
          ) : (
            <span className="cursor-pointer" onClick={toggleTheme}>
              <SunMoon />
            </span>
          )}
          <button className="lg:flex hidden py-2 px-5 bg-primary text-white text-sm rounded-md cursor-pointer hover:opacity-90 transition">
            Schedule a Call
          </button>
          {/* Dropdown menu button for mobile */}
          <span
            className="lg:hidden block cursor-pointer relative"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <Menu />
          </span>
        </div>
      </div>
      {/* mobile dropdown */}
      {dropdownOpen && (
        <div className="fixed top-0 left-0 right-0 bg-theme text-theme shadow-lg rounded-b-md z-50">
          <div className="flex flex-col gap-2 px-4 py-4">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-lg font-bold">E.STA</h1>
              <span
                className="cursor-pointer"
                onClick={() => setDropdownOpen(false)}
              >
                <X />
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`cursor-pointer font-semibold text-base
                    ${
                      active === item.name
                        ? "underline decoration-primary decoration-2 underline-offset-8"
                        : "hover:underline decoration-primary decoration-2 underline-offset-8"
                    }
                  `}
                  onClick={() => {
                    setActive(item.name);
                    setDropdownOpen(false);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <button className="mt-4 p-2 bg-primary text-white text-sm rounded-md cursor-pointer hover:opacity-90 transition">
              Schedule a Call
            </button>
            <div className="mt-2 flex justify-center">
              {isDark ? (
                <span className="cursor-pointer" onClick={toggleTheme}>
                  <SunMoon />
                </span>
              ) : (
                <span className="cursor-pointer" onClick={toggleTheme}>
                  <Sun />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
