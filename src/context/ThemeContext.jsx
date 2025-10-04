import { createContext, useContext, useState, useEffect } from "react";

// Create a context for theme management
const ThemeContext = createContext();

// ThemeProvider component to wrap the app and provide theme state
export const ThemeProvider = ({ children }) => {
  // Initialize theme state from localStorage or default to false (light mode)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("isDark");
      return storedTheme === "true";
    }
    return false;
  });

  // Effect to update HTML class and localStorage when theme changes
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  // Function to toggle theme between dark and light
  const toggleTheme = () => setIsDark(!isDark);

  // Provide theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context
export const useTheme = () => useContext(ThemeContext);
