import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";
import AllDonationPost from "../pages/dashboard/AllDonationPost/AllDonationPost";
import AllDonations from "../pages/AllDonations/AllDonations";
import CreateDonation from "../pages/dashboard/CreateDonation/CreateDonation";
import DonationDetail from "../pages/home/DonationDetail";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Community from "../pages/Community/Community";
import CreateTestimonial from "../pages/dashboard/CreateTestimonial/CreateTestimonial";
import AboutUs from "../pages/AboutUs/AboutUs";
import Volunteer from "../pages/Volunteer/Volunteer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/donations",
        element: <AllDonations />,
      },
      {
        path: "/donations/:id",
        element: (
          <ProtectedRoute>
            <DonationDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "donations",
        element: <AllDonationPost />,
      },
      {
        path: "create-donation",
        element: <CreateDonation />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
]);

export default router;
