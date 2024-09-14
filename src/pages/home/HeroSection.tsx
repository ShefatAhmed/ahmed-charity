import { motion } from "framer-motion";
const HeroSection = () => {
  const variant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, duration: 5 },
    },
  };
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className="my-24 md:my-0  overflow-hidden"
    >
      <div className="relative">
        <img
          src="https://i.ibb.co.com/yYvXB48/Untitled-1-copy.jpg"
          alt=""
          className="w-full h-auto md:h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-center text-white">
          <div className="p-5 md:p-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-8">
              Support causes <br className="md:hidden" /> you care about
            </h1>
            <p className="text-sm md:text-base mt-2 md:mt-4">
              Empowering Lives, Igniting Hope: <br className="md:hidden" />{" "}
              Unite with us for a brighter future <br className="md:hidden" />
              through your generous contributions <br className="md:hidden" />{" "}
              and compassionate support.
            </p>
            <img
              src="https://i.postimg.cc/L8kJvCGD/Screenshot-2024-02-16-at-23-57-18-Logo-Maker-Used-By-2-3-Million-Startups.png"
              alt=""
              className="bg-white rounded-tr-3xl rounded-bl-3xl bg-opacity-40 mt-6 md:mt-10 w-1/3 mx-auto"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
