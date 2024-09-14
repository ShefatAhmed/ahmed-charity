import { motion } from "framer-motion";

const ExtraFirst = () => {
  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const imageHoverVariants = {
    hover: { scale: 1.3, y: -1 },
  };

  return (
    <motion.div
      className="bg-teal-500 hover:bg-teal-800 glass overflow-hidden"
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex flex-wrap justify-center items-center py-10 mx-5 md:mx-10 overflow-hidden"
        variants={imageVariants}
      >
        <motion.div
          className="relative group"
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <motion.img
            src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_01-w.png"
            alt=""
            className="w-full md:w-auto md:mr-5 mb-5 md:mb-0"
            variants={imageVariants}
          />
        </motion.div>
        <motion.div
          className="relative group"
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <motion.img
            src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_02-w.png"
            alt=""
            className="w-full md:w-auto md:mr-5 mb-5 md:mb-0"
            variants={imageVariants}
          />
        </motion.div>
        <motion.div
          className="relative group"
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <motion.img
            src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_04-w.png"
            alt=""
            className="w-full md:w-auto md:mr-5 mb-5 md:mb-0"
            variants={imageVariants}
          />
        </motion.div>
        <motion.div
          className="relative group"
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <motion.img
            src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_05-w.png"
            alt=""
            className="w-full md:w-auto md:mr-5 mb-5 md:mb-0"
            variants={imageVariants}
          />
        </motion.div>
        <motion.div
          className="relative group"
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <motion.img
            src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_06-w.png"
            alt=""
            className="w-full md:w-auto mb-5 md:mb-0"
            variants={imageVariants}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExtraFirst;
