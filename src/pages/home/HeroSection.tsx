import { motion } from "framer-motion";

const HeroSection = () => {
  const variant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, duration: 1.5 },
    },
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden"
    >
      <img
        src="https://i.ibb.co.com/yYvXB48/Untitled-1-copy.jpg"
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
        <div className="text-center text-white max-w-xl">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-tight">
            Support Causes <br className="hidden md:block" /> You Care About
          </h1>
          <p className="text-sm italic leading-relaxed mb-6">
            Empowering Lives, Igniting Hope: Unite with us for a brighter future
            through your generous contributions and compassionate support.
          </p>
          <img
            src="https://i.postimg.cc/L8kJvCGD/Screenshot-2024-02-16-at-23-57-18-Logo-Maker-Used-By-2-3-Million-Startups.png"
            alt="Logo"
            className="bg-white bg-opacity-40 rounded-tr-3xl rounded-bl-3xl w-20 md:w-36 mx-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
