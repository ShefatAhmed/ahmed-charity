import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const AboutUs = () => {
  const [donationArea, setDonationArea] = useState(0);
  const [honourableDonner, setHonourableDonner] = useState(0);
  const [divisionalCenter, setDivisionalCenter] = useState(0);
  useEffect(() => {
    const animateNumbers = () => {
      const animationDuration = 20000;
      const animate = (
        start: number,
        end: number,
        setter: (arg0: number) => void
      ) => {
        const startTime = new Date().getTime();
        const update = () => {
          const currentTime = new Date().getTime();
          const progress = Math.min(
            1,
            (currentTime - startTime) / animationDuration
          );
          const value = Math.floor(start + progress * (end - start));
          setter(value);
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };
        update();
      };
      animate(0, 125, setDonationArea);
      animate(0, 230, setHonourableDonner);
      animate(0, 8, setDivisionalCenter);
    };
    animateNumbers();
  }, []);

  const left = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, duration: 2 },
    },
  };
  const right = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, duration: 2 },
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-5 gap-5 md:gap-0 my-24 overflow-hidden">
      <motion.div
        variants={left}
        initial="hidden"
        animate="visible"
        className="col-span-1"
      >
        <img
          src="https://i.postimg.cc/1500XJ6n/connor-hall-r-HLe-Gnb-Y-8-unsplash-1.jpg"
          alt=""
          className="rounded-3xl"
        />
      </motion.div>
      <motion.div
        variants={right}
        initial="hidden"
        animate="visible"
        className="col-span-1"
      >
        <h1 className="uppercase font-extrabold text-2xl my-10">
          About Us Our community
        </h1>
        <p className="text-2xl my-10 font-semibold ">
          We distribute the donations of our community properly and assure them
          of the donations. Our charity has numerous members who always stand by
          us in human welfare. We always try to encourage more donations.
        </p>
        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-teal-500 text-6xl font-bold">
              {donationArea}+
            </h1>
            <p className="uppercase font-medium">Area for donations</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-teal-500 text-6xl font-bold">
              {honourableDonner}
            </h1>
            <p className="uppercase font-medium">Our honourable donner</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-teal-500 text-6xl font-bold">
              {divisionalCenter}
            </h1>
            <p className="uppercase font-medium">Divisional center</p>
          </div>
        </div>
        <div className="mt-10">
          <Link
            to="/about-us"
            className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
          >
            Our Volunteer
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
