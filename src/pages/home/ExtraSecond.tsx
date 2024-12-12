import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ExtraSecond = () => {
  const backgroundImage = {
    backgroundImage:
      'url("https://i.postimg.cc/fT7fsWZm/white-abstract-background-design-361591-1242.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const variant = {
    hidden: { opacity: 0, x: 1000 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, duration: 10 },
    },
  };
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={variant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-12 py-16 px-[5%] gap-10 items-center overflow-hidden"
        style={backgroundImage}
      >
        <div className="col-span-12 lg:col-span-5 mx-auto">
          <h1 className="uppercase text-2xl font-extrabold">
            Volunteering programs
          </h1>
          <p className="text-xl font-extralight mt-5">
            Our volunter work hole country for humannity. <br /> As a volunter
            you can learn more things about volunteering
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="mb-5">
            <h1 className="flex gap-2 text-xl items-center font-bold">
              <Check className="text-teal-500" />
              Humanity & Wellness
            </h1>
            <p>
              Engaging in volunteering activities promotes donation activity and
              outdoor time, contributing to improved mental health.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="flex gap-2 text-xl items-center font-bold">
              <Check className="text-teal-500" />
              Education & Skill Development
            </h1>
            <p>
              They provide a platform for learning about volunteering
              techniques, sustainable practices, humannity science, and
              donation.
            </p>
          </div>
          <Link
            to="/volunteer"
            className="btn glass bg-teal-500 rounded-full text-white px-10 hover:bg-teal-800 text-lg uppercase"
          >
            Join as a volunter
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ExtraSecond;
