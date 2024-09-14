import { Link } from "react-router-dom";
import { useGetAllDonationQuery } from "../../redux/features/donation/donationApi";

const DonationPost = () => {
  const { data }: any = useGetAllDonationQuery(undefined);

  const donations = data ? data.slice(0, 6) : [];

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-4xl font-bold mt-5">Donation Post</h1>
      <p className="text-center mx-24 mt-2">
        Here we can provide recent donation posts. You can see the donation
        details when you click the button.
      </p>
      <div className="my-10 grid grid-cols-12 mx-auto gap-5">
        {donations.map((donation: any) => (
          <div
            key={donation._id}
            className="max-w-md mx-auto rounded-xl overflow-hidden shadow-lg col-span-12 md:col-span-6 lg:col-span-4 w-[300px] border border-white"
          >
            <img
              className="w-full h-56 object-cover"
              src={donation.image}
              alt="Card Image"
            />
            <div className="p-6 flex flex-col justify-evenly">
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
      <div className="flex items-center justify-center my-8">
        <Link
          to="/donations"
          className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default DonationPost;
