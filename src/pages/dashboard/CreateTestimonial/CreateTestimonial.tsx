import { useState } from "react";
import { useAddTestimonialMutation } from "../../../redux/features/testimonial/testimonialApi";
import Swal from "sweetalert2";

const CreateTestimonial = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const [addTestimonial, { isLoading, isError }] = useAddTestimonialMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await addTestimonial({
        name,
        image,
        amount,
        description,
      });
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Testimonial Added",
        text: "Your testimonial has been added successfully.",
      });
      setName("");
      setImage("");
      setAmount("");
      setDescription("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error adding your testimonial. Please try again.",
      });
    }
  };
  return (
    <div className="container mx-auto p-8 max-w-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create A Testimonial
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="image">
            Image URL:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="amount">
            Amount:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="write description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {isError && (
          <div className="text-red-500 mt-4">
            Error adding testimonial. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateTestimonial;
