import {
  ArrowBigRight,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-12 bg-gray-700 text-white py-10">
        <div className="col-span-4 p-5">
          <h1 className="font-extrabold text-xs">ABOUT AHMED CHARITY</h1>
          <div>
            <img
              src="https://i.postimg.cc/L8kJvCGD/Screenshot-2024-02-16-at-23-57-18-Logo-Maker-Used-By-2-3-Million-Startups.png"
              className="w-32 max-w-full bg-white rounded-full my-5"
            />
          </div>
          <p className="text-gray-200 text-sm">
            Ahmed Charity, a dedicated humanitarian, tirelessly works to
            alleviate suffering. With unwavering compassion, he leads
            initiatives that bring hope and support to those in need, fostering
            positive change globally.
          </p>
        </div>
        <div className="col-span-3 p-5">
          <h1 className="font-extrabold text-xs">BLOGROLL</h1>
          <ul className="flex flex-col gap-5 mt-5">
            <Link to="/volunteer">
              <li className="hover:text-teal-300 flex text-xs items-center">
                <ArrowBigRight />
                Become a volunteer
              </li>
            </Link>
            <hr className="bg-white" />
            <Link to="about-us">
              <li className="hover:text-teal-300 flex text-xs items-center">
                <ArrowBigRight />
                Our mission
              </li>
            </Link>
            <hr className="bg-white" />
            <Link to="/community">
              <li className="hover:text-teal-300 flex text-xs items-center">
                <ArrowBigRight />
                Success stories
              </li>
            </Link>
            <hr className="bg-white" />
          </ul>
        </div>
        <div className="col-span-5 p-8">
          <h1 className="text-center font-extrabold">WE ARE NOW ON</h1>
          <ul className="flex justify-center items-center mt-10">
            <li className="hover:bg-blue-800 p-2 rounded-full bg-gray-700">
              <FacebookIcon />
            </li>
            <li className="hover:bg-blue-500 p-2 rounded-full bg-gray-700">
              <TwitterIcon />
            </li>
            <li className="hover:bg-blue-800 p-2 rounded-full bg-gray-700">
              <Linkedin />
            </li>
            <li className="hover:bg-purple-800 p-2 rounded-full bg-gray-700">
              <InstagramIcon />
            </li>
            <li className="hover:bg-red-800 p-2 rounded-full bg-gray-700">
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="md:flex justify-between py-5 bg-black text-[#E2E8F0] px-5 text-xs">
        <div>
          <h1>@ 2024. All rights reserved.</h1>
        </div>
        <div>
          <ul className="flex gap-8 mt-6 md:mt-0">
            <li className="hover:text-teal-300">Privacy policy </li>
            <li className="hover:text-teal-300">/ Payment terms /</li>
            <li className="hover:text-teal-300"> Refund Policy </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
