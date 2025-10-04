import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import About from "./sections/About";
import AssistiveNav from "./components/AssistiveNav";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
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
      {/* Projects section */}
      <Projects />
      {/* Contact section */}
      <Contact />
      {/* Footer */}
      <Footer />

      {/* Floating assistive navigation */}
      <AssistiveNav />
    </>
  );
};

export default App;
