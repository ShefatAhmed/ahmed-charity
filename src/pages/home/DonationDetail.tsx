import { useParams } from "react-router-dom";
import { useGetAllDonationQuery } from "../../redux/features/donation/donationApi";
import { useState } from "react";
import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectCurrentUser,
  setUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { useUpdateUserMutation } from "../../redux/features/auth/authApi";
import Swal from "sweetalert2";
const modalStyles = {
  content: {
    width: "300px",
    height: "200px",
    margin: "auto",
    borderRadius: "8px",
  },
};
const DonationDetail = () => {
  const { id } = useParams();
  const { data }: any = useGetAllDonationQuery(undefined);
  const donation = data ? data.find((d: any) => d._id === id) : null;

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const userData = useAppSelector(selectCurrentUser);
  const token = useAppSelector(useCurrentToken);
  const amount = userData?.amount;

  const [donationInfo, setDonationInfo] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
  });

  const handleDonateNowClick = () => {
    setConfirmationModalOpen(true);
  };

  const [updateUserMutation] = useUpdateUserMutation();
  const dispatch = useAppDispatch();

  const handleConfirmDonate = async () => {
    const newAmount = amount + donation.amount;
    try {
      const { data: updatedUserData }: any = await updateUserMutation({
        email: userData?.email,
        amount: newAmount,
      });
      dispatch(setUser({ user: updatedUserData, token: token }));
      setConfirmationModalOpen(false);
      Swal.fire({
        icon: "success",
        title: "Donation Successful!",
        text: `Thank you for your donation to ${donation.title}.`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div>
      {donation && (
        <div className="p-24">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 md:col-span-6">
              <img
                src={donation.image}
                alt="Donation Image"
                className="rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <h1 className="text-4xl font-extrabold">{donation.title}</h1>
              <div className="my-5">
                <p>
                  Category:
                  <span className="font-bold">{donation.category}</span>
                </p>
                <p>
                  Amount: <span className="font-bold">${donation.amount}</span>
                </p>
                <p>
                  Description:
                  <span className="font-bold">{donation.description}</span>
                </p>
              </div>
              <button
                onClick={handleDonateNowClick}
                className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
              >
                Donate Now
              </button>
            </div>
          </div>
          <Modal
            isOpen={confirmationModalOpen}
            onRequestClose={() => setConfirmationModalOpen(false)}
            contentLabel="Donation Confirmation Modal"
            style={modalStyles}
          >
            <p className="text-center font-extrabold text-xl mb-2">
              Confirm your donation for {donation.title}?
            </p>
            <p className="text-center font-extrabold text-red-500">
              total: $ {donation.amount}
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 flex-col mt-5">
                <input
                  type="text"
                  placeholder="Name"
                  value={donationInfo.name}
                  onChange={(e) =>
                    setDonationInfo((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="hidden"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={donationInfo.email}
                  onChange={(e) =>
                    setDonationInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="hidden"
                />
                <input
                  type="text"
                  placeholder="Amount"
                  value={donation.amount}
                  onChange={(e) =>
                    setDonationInfo((prev) => ({
                      ...prev,
                      amount: e.target.value,
                    }))
                  }
                  className="hidden"
                />
                <button
                  onClick={handleConfirmDonate}
                  className="glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
                >
                  <>Yes, Donate Now</>
                </button>
              </div>
              <h1 className="text-center">or</h1>
              <button
                onClick={() => setConfirmationModalOpen(false)}
                className="glass bg-red-500 rounded-lg text-white px-10 hover:bg-red-800 text-lg"
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      )}
      {!donation && <div>Donation not found</div>}
    </div>
  );
};

export default DonationDetail;
