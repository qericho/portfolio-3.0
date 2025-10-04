import AboutMe from "../components/AboutMe";
import ContactInfo from "../components/ContactInfo";
import Title from "../components/Title";

// About section combines contact info, title, and about me details
const About = () => {
  return (
    <div>
      {/* Contact information at the top */}
      <ContactInfo />
      {/* Section title and subtitle */}
      <Title
        title="About Me"
        subtitle="A little bit about my journey and skills."
      />
      {/* Personal info and skills */}
      <AboutMe />
    </div>
  );
};

export default About;
