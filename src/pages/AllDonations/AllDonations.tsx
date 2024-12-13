import { Link } from "react-router-dom";
import { useGetAllDonationQuery } from "../../redux/features/donation/donationApi";

const AllDonations = () => {
  const { data }: any = useGetAllDonationQuery(undefined);

  const donations = data || [];

  return (
    <div className="overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-center text-2xl font-extrabold uppercase my-8">
        Here are all donations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {donations.map((donation: any) => (
          <div
            key={donation._id}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-56 object-cover"
              src={donation.image}
              alt={donation.title}
            />
            <div className="p-5">
              <h1 className="text-lg font-semibold mb-2 text-gray-800">
                {donation.title}
              </h1>
              <div className="flex justify-between items-center mb-4 text-gray-600">
                <span className="text-sm capitalize">{donation.category}</span>
                <span className="text-sm font-medium">${donation.amount}</span>
              </div>
              <Link
                to={`/donations/${donation._id}`}
                className="w-full btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDonations;