import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import About from "./sections/About";
import AssistiveNav from "./components/AssistiveNav";

// Main App component
const App = () => {
  return (
    <>
      {/* Top navigation bar */}
      <Nav />
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <About />

      {/* Floating assistive navigation */}
      <AssistiveNav />
    </>
  );
};

export default App;
