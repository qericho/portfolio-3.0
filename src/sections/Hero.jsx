import { Link } from "react-scroll";
import IMG_ME from "../assets/img/me.png";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../animations/variants";

// Hero section displays introduction and profile image
const Hero = () => {
  return (
    <section id="hero" className="bg-theme text-theme h-full py-10">
      <div className="max-w-7xl mx-auto flex gap-10 md:gap-0 lg:flex-row flex-col-reverse items-center justify-between lg:px-2 sm:px-10 px-2">
        {/* Left side: Intro text and button */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-3 relative top-2 lg:top-10"
        >
          <h4 className="text-sm font-bold text-muted tracking-widest">
            Hi There,
          </h4>
          <h1 className="text-6xl lg:text-7xl font-bold">I am Echo</h1>
          <p className="text-lg lg:text-2xl tracking-tight md:max-w-150">
            Passionate about crafting beautiful, intuitive, and high-performance
            web experiences.
          </p>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button className="bg-primary hover:opacity-90 text-sm text-light cursor-pointer relative top-2 lg:top-10 py-4 px-10 rounded">
              Ask Me How
            </button>
          </Link>
        </motion.div>
        {/* Right side: Profile image */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="size-full md:size-150"
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src={IMG_ME}
            alt="Me"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
