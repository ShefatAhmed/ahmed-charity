import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import "@emotion/styled";
import { useGetAllDonatedQuery } from "../../../redux/features/donated/donatedApi";

const size = {
  width: 800,
  height: 400,
};

const Dashboard = () => {
  const { data: donatedData } = useGetAllDonatedQuery(undefined);

  const data = donatedData || [];
  return (
    <div>
      <h1 className="text-center text-2xl font-extrabold mt-5">Welcome to Dashboard</h1>
      <p className="text-center mt-3">Explore our count of donner by category.</p>
      <div className="flex items-center justify-center mt-24">
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.label} (${item.value})`,
              arcLabelMinAngle: 45,
              data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontWeight: "bold",
            },
          }}
          {...size}
        />
      </div>
    </div>
  );
};

export default Dashboard;
