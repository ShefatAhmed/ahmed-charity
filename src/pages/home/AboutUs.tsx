import { SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [donationArea, setDonationArea] = useState(0);
  const [honourableDonner, setHonourableDonner] = useState(0);
  const [divisionalCenter, setDivisionalCenter] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      const animationDuration = 20000;
      const animate = (start: number, end: number, setter: { (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (value: SetStateAction<number>): void; (arg0: number): void; }) => {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-4 lg:mx-12 gap-10 my-16 overflow-hidden justify-center">
      <motion.div
        variants={left}
        initial="hidden"
        animate="visible"
        className="col-span-1"
      >
        <img
          src="https://i.postimg.cc/1500XJ6n/connor-hall-r-HLe-Gnb-Y-8-unsplash-1.jpg"
          alt="Community Support"
          className="rounded-2xl h-[50vh] mx-auto"
        />
      </motion.div>
      <motion.div
        variants={right}
        initial="hidden"
        animate="visible"
        className="col-span-1 flex flex-col justify-center md:mr-[25%] sm:mx-auto"
      >
        <h1 className="uppercase font-extrabold text-xl lg:text-3xl mb-6">
          About Us - Our Community
        </h1>
        <p className="text-lg lg:text-xl mb-8 font-medium leading-relaxed">
          We distribute the donations of our community properly and assure them
          of the donations. Our charity has numerous members who always stand by
          us in human welfare. We always try to encourage more donations.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <h1 className="text-teal-500 text-4xl lg:text-5xl font-bold">
              {donationArea}+
            </h1>
            <p className="uppercase text-sm lg:text-base font-medium text-center">
              Area for Donations
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-teal-500 text-4xl lg:text-5xl font-bold">
              {honourableDonner}
            </h1>
            <p className="uppercase text-sm lg:text-base font-medium text-center">
              Honourable Donors
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-teal-500 text-4xl lg:text-5xl font-bold">
              {divisionalCenter}
            </h1>
            <p className="uppercase text-sm lg:text-base font-medium text-center">
              Divisional Centers
            </p>
          </div>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <Link
            to="/about-us"
            className="btn bg-teal-500 text-white px-6 rounded-lg hover:bg-teal-600 transition text-base lg:text-lg"
          >
            Our Volunteers
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;