import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import {
  useCreateDonationMutation,
  useGetAllDonationQuery,
} from "../../../redux/features/donation/donationApi";
import { createDonation } from "../../../redux/features/donation/donationSlice";
import Swal from "sweetalert2";

const CreateDonation = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    image: "",
    category: "",
    title: "",
    amount: 0,
    description: "",
  });

  const [createDonationMutation] = useCreateDonationMutation();
  const { refetch: refetchDonations } = useGetAllDonationQuery(undefined);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data }: any = await createDonationMutation(formData);
      dispatch(createDonation(data));
      refetchDonations();
      Swal.fire({
        icon: "success",
        title: "Donation Added",
        text: "Your donation has been added successfully.",
      });
      setFormData({
        image: "",
        category: "",
        title: "",
        amount: 0,
        description: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error adding your donation. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto md:p-4 md:shadow-md rounded-md md:border border-white"
      >
        <h1 className="text-2xl my-10 uppercase">Add a donation</h1>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Donation Image Link:
          <input
            type="text"
            name="image"
            value={formData.image}
            placeholder="image link..."
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Donation Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
          >
            <option value="">Select Category</option>
            <option value="Health Care">Health Care</option>
            <option value="Education Access">Education Access</option>
            <option value="Food Security">Food Security</option>
            <option value="Housing Assistance">Housing Assistance</option>
            <option value="Employment Support">Employment Support</option>
            <option value="Emergency Relief">Emergency Relief</option>
            <option value="Refugee Aid">Refugee Aid</option>
            <option value="Elderly Care">Elderly Care</option>
          </select>
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Donation Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="donation title..."
            onChange={handleInputChange}
            maxLength={22}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Donation amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            placeholder="donation amount..."
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
          />
        </label>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Description:
          <textarea
            name="description"
            value={formData.description}
            placeholder="donation description..."
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
          />
        </label>
        <button
          type="submit"
          className="w-full btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
        >
          Add Donation
        </button>
      </form>
    </div>
  );
};

export default CreateDonation;
