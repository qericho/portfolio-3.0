import { useState } from "react";
import { Menu, Sun, SunMoon, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Link as ScrollLink } from "react-scroll";

// Navigation items
const navItems = [
  { name: "Portfolio", to: "hero" },
  { name: "About Me", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact Me", to: "contact" },
];

const Nav = () => {
  const { isDark, toggleTheme } = useTheme();
  const [active, setActive] = useState(navItems[0].name);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="bg-theme text-theme w-full relative">
      <div className="flex max-w-7xl mx-auto justify-between items-center xl:py-6 py-4 lg:px-2 sm:px-10 px-2">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onSetActive={() => setActive("Portfolio")}
          className="text-lg md:text-2xl font-bold cursor-pointer"
        >
          E.STA
        </ScrollLink>

        {/* Desktop Navigation */}
        <ul className="lg:flex hidden items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onSetActive={() => setActive(item.name)} // scroll tracking
                className={`font-semibold text-sm transition-all duration-200 ${
                  active === item.name ? "text-primary" : "hover:text-primary"
                }`}
              >
                {item.name}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    active === item.name ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                ></span>
              </ScrollLink>
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
            Download CV
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

      {/* Mobile dropdown */}
      {dropdownOpen && (
        <div className="fixed top-0 left-0 right-0 bg-theme text-theme shadow-lg rounded-b-md z-50">
          <div className="flex flex-col gap-2 px-2 py-4">
            <div className="flex justify-between items-center mb-2">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onSetActive={() => setActive("Portfolio")}
                className="text-lg font-bold cursor-pointer"
                onClick={() => setDropdownOpen(false)}
              >
                E.STA
              </ScrollLink>
              <span
                className="cursor-pointer"
                onClick={() => setDropdownOpen(false)}
              >
                <X />
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name} className="relative group cursor-pointer">
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    onSetActive={() => setActive(item.name)}
                    onClick={() => setDropdownOpen(false)}
                    className={`font-semibold text-base transition-all duration-200 ${
                      active === item.name
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                        active === item.name ? "w-5" : "w-0 group-hover:w-5"
                      }`}
                    ></span>
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <button className="mt-4 p-2 bg-primary text-white text-sm rounded-md cursor-pointer hover:opacity-90 transition">
              Download CV
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
    </section>
  );
};

export default Nav;
