import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useGetAllDonationQuery,
  useDeleteDonationMutation,
  useUpdateDonationMutation,
} from "../../../redux/features/donation/donationApi";
import Swal from "sweetalert2";

type TDonation = {
  _id: string | null | undefined;
  title: string;
  amount: string;
};

const modalStyles1 = {
  content: {
    width: "300px",
    height: "200px",
    margin: "auto",
    borderRadius: "8px",
  },
};
const modalStyles2 = {
  content: {
    width: "400px",
    height: "320px",
    margin: "auto",
    borderRadius: "8px",
  },
};

const AllDonationPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<TDonation | null>(
    null
  );

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const { data: donations, refetch } = useGetAllDonationQuery(undefined);
  const deleteDonationMutation = useDeleteDonationMutation();
  const updateDonationMutation = useUpdateDonationMutation();

  const handleOpenModal = (donation: TDonation) => {
    setSelectedDonation(donation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDonation(null);
    setIsModalOpen(false);
  };

  const handleOpenEditModal = (donation: TDonation) => {
    setSelectedDonation(donation);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedDonation(null);
    setIsEditModalOpen(false);
  };

  const handleDelete = async () => {
    if (selectedDonation) {
      try {
        await deleteDonationMutation[0](selectedDonation._id!);
        handleCloseModal();
        refetch();
        Swal.fire({
          icon: "success",
          title: "Deletion Successful",
          text: "The donation post has been deleted successfully.",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Deletion Failed",
          text: "There was an error deleting the donation post. Please try again.",
        });
      }
    }
  };

  const handleUpdate = async (newData: Partial<TDonation>) => {
    if (selectedDonation) {
      try {
        await updateDonationMutation[0]({
          donationId: selectedDonation._id!,
          newData,
        });
        handleCloseEditModal();
        refetch();
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "The donation post has been updated successfully.",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "There was an error updating the donation post. Please try again.",
        });
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Donation List</h2>
      <div className="grid grid-cols-12 md:mx-24 gap-5 mx-0">
        <div className="col-span-12 lg:col-span-8">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations?.map((donation: TDonation) => (
                <tr key={donation._id}>
                  <td className="py-2 px-4 border-b text-center">
                    {donation.title}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    ${donation.amount}
                  </td>
                  <td className="py-2 px-4 border-b flex justify-center gap-5">
                    <button
                      className="flex gap-2 font-bold bg-teal-500 rounded-lg text-white px-5 hover:bg-teal-800 glass py-2"
                      onClick={() => handleOpenEditModal(donation)}
                    >
                      <Pencil /> Edit
                    </button>
                    <button
                      className="text-red-500 hover:bg-red-50"
                      onClick={() => handleOpenModal(donation)}
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-12 lg:col-span-4 border-4 p-5">
          <h1 className="text-center mb-5 font-bold">
            If you add a donation to our website please click the button
          </h1>
          <Link
            to="/dashboard/create-donation"
            className="btn font-bold bg-teal-500 rounded-lg text-white px-5 hover:bg-teal-800 glass py-2 w-full"
          >
            Add Donation
          </Link>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Confirmation Modal"
        style={modalStyles1}
      >
        <div className="text-center">
          <h2 className="text-xl font-extrabold">Confirm Deletion</h2>
          <p className="mt-5">
            Are you sure you want to delete this donation post
          </p>
          <div className="flex gap-2 items-center mt-5">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white hover:bg-red-800 w-full rounded-lg py-1 glass"
            >
              Delete
            </button>
            <button
              onClick={handleCloseModal}
              className="bg-teal-500 text-white hover:bg-teal-800 w-full rounded-lg py-1 glass"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={handleCloseEditModal}
        contentLabel="Edit Modal"
        style={modalStyles2}
      >
        <div>
          <h2 className="text-xl font-extrabold">Edit This Donation</h2>
          <div className="flex gap-2 flex-col mt-5">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              placeholder="New Title"
              value={selectedDonation?.title ?? ""}
              onChange={(e) =>
                setSelectedDonation((prev: TDonation | null) => ({
                  ...prev!,
                  title: e.target.value,
                }))
              }
              className="border p-2 rounded-lg"
            />
            <label htmlFor="Title">Amount</label>
            <input
              type="text"
              placeholder="New Amount"
              value={selectedDonation?.amount ?? ""}
              onChange={(e) =>
                setSelectedDonation((prev: TDonation | null) => ({
                  ...prev!,
                  amount: e.target.value,
                }))
              }
              className="border p-2 rounded-lg"
            />
            <button
              onClick={() => handleUpdate(selectedDonation || {})}
              className="bg-teal-500 text-white hover:bg-teal-800 w-full rounded-lg py-1 glass"
            >
              Update
            </button>
            <button
              onClick={handleCloseEditModal}
              className="bg-red-500 text-white hover:bg-red-800 w-full rounded-lg py-1 glass"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AllDonationPost;
