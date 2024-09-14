import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-teal-600 pb-5">
      <div className="flex justify-between items-center mx-24 py-5 md:gap-0 gap-5">
        <Link
          to="/dashboard"
          className="text-5xl font-extrabold bg-black text-white px-5 py-2 rounded-tr-3xl rounded-bl-3xl shadow-2xl"
        >
          Dashboard
        </Link>
        <Link to="/" className="text-white rounded-full">
          <Home />
        </Link>
      </div>
      <div className="flex justify-center gap-10">
        <Link
          to="/dashboard/donations"
          className="text-2xl font-bold bg-black text-white px-5 py-1 rounded-lg hover:bg-white hover:text-black"
        >
          All Donation
        </Link>
        <Link
          to="/dashboard/create-donation"
          className="text-2xl font-bold bg-black text-white px-5 py-1 rounded-lg hover:bg-white hover:text-black"
        >
          Create Donation
        </Link>
      </div>
      <div className=" flex justify-center mt-5">
        <Link
          to="/dashboard/create-testimonial"
          className="text-2xl font-bold bg-black text-white px-5 py-1 rounded-lg hover:bg-white hover:text-black"
        >
          Create Testimonial
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
