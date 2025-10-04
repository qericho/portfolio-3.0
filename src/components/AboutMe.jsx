import {
  Code2,
  FileCode2,
  Layout,
  Atom,
  GitBranch,
  Smartphone,
  Accessibility,
  Palette,
} from "lucide-react";

// AboutMe component displays personal info and key skills
const AboutMe = () => {
  // Array of skill objects with icon and label
  const skills = [
    { icon: FileCode2, label: "HTML5" },
    { icon: Code2, label: "CSS3 / Tailwind" },
    { icon: Layout, label: "JavaScript (ES6+)" },
    { icon: Atom, label: "React" },
    { icon: GitBranch, label: "Git / Version Control" },
    { icon: Smartphone, label: "Responsive Design" },
    { icon: Accessibility, label: "Accessibility" },
    { icon: Palette, label: "UI/UX Principles" },
  ];

  return (
    <div className="w-full bg-theme text-theme py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side - About Me */}
        <div>
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Who I Am
            <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-primary"></span>
          </h2>
          <p className="leading-relaxed mb-4">
            I'm Jericho Sta Maria, a passionate Aspiring Frontend Developer
            based in the Philippines. I specialize in creating intuitive,
            dynamic user experiences and beautiful, functional websites. With a
            keen eye for detail and a love for clean code, I strive to bring
            ideas to life on the web.
          </p>
          <p className="leading-relaxed">
            Beyond coding, I enjoy exploring new technologies, contributing to
            open-source projects, and continuously learning to stay ahead in the
            fast-paced world of web development.
          </p>
        </div>

        {/* Right Side - Key Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Key Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, label }, i) => (
              // Skill item with icon and label
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/40 hover:bg-muted/50 transition"
              >
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
