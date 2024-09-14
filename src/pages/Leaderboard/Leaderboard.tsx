import { useGetAllUsersQuery } from "../../redux/features/auth/authApi";
type TDonor = {
  name: string;
  username: string;
  amount: number;
};
const Leaderboard = () => {
  const { data: users, isLoading, isError } = useGetAllUsersQuery(undefined);
  const topDonors: TDonor[] =
    users?.map((user: any) => ({
      name: user.name,
      username: user.username,
      amount: user.amount,
    })) || [];
  return (
    <div className="container px-24 mx-auto my-24">
      <div className="text-center bg-black text-white py-2 font-bold border-2 border-white">
       Top Donors Leaderboard
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {!isLoading && !isError && (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-2 border-white bg-black text-white">
                Rank
              </th>
              <th className="py-2 px-4 border-2 border-white bg-black text-white">
                Name
              </th>
              <th className="py-2 px-4 border-2 border-white bg-black text-white">
                Donation Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {topDonors.map((donor, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{donor.name}</td>
                <td className="py-2 px-4 border">$ {donor.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
