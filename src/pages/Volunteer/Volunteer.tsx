import { useState } from "react";
import { useAddAVolunteerMutation } from "../../redux/features/volunteer/volunteerApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Volunteer = () => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [addVolunteer] = useAddAVolunteerMutation();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addVolunteer(formData);
      Swal.fire({
        icon: "success",
        title: "Volunteer Sign-up Successful",
        text: "Thank you for signing up as a volunteer!",
      });
      setFormData(initialFormData);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error signing up as a volunteer. Please try again.",
      });
    }
  };

  const divisions = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
    "Outside Bangladesh",
  ];
  return (
    <div className="max-w-lg mx-auto p-8 mt-16 bg-white shadow-lg rounded-lg my-5">
      <h2 className="text-2xl font-bold mb-8">
        Sign Up for Volunteer Opportunities
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Location: where you comfortable to work as a volunteer
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
          >
            <option value="" disabled>
              Select a division
            </option>
            {divisions.map((division, index) => (
              <option key={index} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white rounded-lg px-6 py-3 hover:bg-teal-800 transition duration-300"
        >
          Sign Up
        </button>
        <hr className="mt-5" />
        <p className="text-center mt-5">
          our volunteer list{" "}
          <Link to="/about-us" className="text-red-500 underline font-bold">
            here...
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Volunteer;
