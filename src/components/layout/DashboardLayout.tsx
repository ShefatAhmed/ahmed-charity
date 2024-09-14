import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Topbar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
