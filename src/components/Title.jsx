import { motion } from "framer-motion";
import { fadeInBottom } from "../animations/variants";

const Title = ({ title, subtitle }) => {
  return (
    // Container with padding and background
    <div className="bg-theme">
      <motion.div
        variants={fadeInBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center pt-20 md:pt-35 pb-10 bg-theme"
      >
        {/* Main title */}
        <h2 className="text-4xl md:text-5xl font-bold text-theme">{title}</h2>
        {/* Subtitle */}
        <p className="mt-2 text-muted">{subtitle}</p>
      </motion.div>
    </div>
  );
};

export default Title;
