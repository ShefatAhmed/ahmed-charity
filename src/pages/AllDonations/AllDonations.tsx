import { Link } from "react-router-dom";
import { useGetAllDonationQuery } from "../../redux/features/donation/donationApi";

const AllDonations = () => {
  const { data }: any = useGetAllDonationQuery(undefined);

  const donations = data || [];

  return (
    <div className="overflow-hidden">
      <h1 className="text-center text-2xl font-extrabold uppercase my-5">
        Here is all donations
      </h1>
      <div className="my-10 grid grid-cols-12 mx-auto gap-5">
        {donations.map((donation: any) => (
          <div
            key={donation._id}
            className="max-w-md mx-auto rounded-xl overflow-hidden shadow-lg col-span-12 md:col-span-6 lg:col-span-4 w-[400px] border border-white"
          >
            <img
              className="w-full h-56 object-cover"
              src={donation.image}
              alt="Card Image"
            />
            <div className="p-6">
              <h1 className="text-xl font-semibold mb-2">{donation.title}</h1>
              <div className="flex justify-between mb-2">
                <p className="text-sm mr-2">{donation.category}</p>
                <p className="text-sm">${donation.amount}</p>
              </div>
              <button className="w-full btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg">
                <Link to={`/donations/${donation._id}`}>View Detail</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDonations;
