import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { logtout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useAppSelector(useCurrentToken);
  const handleLogout = () => {
    dispatch(logtout());
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  //theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e: any) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme as string);
  }, [theme]);
  const dynamicLinks = [
    { to: "/donations", label: "All Donations" },
    { to: "/leaderboard", label: "Leaderboard" },
    { to: "/community", label: "Community" },
    { to: "/volunteer", label: "Volunteer" },
    { to: "/about-us", label: "About US" },
    token !== null ? { to: "/dashboard", label: "Dashboard" } : null,
  ].filter((link): link is { to: string; label: string } => link !== null);
  return (
    <nav>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://i.ibb.co.com/xDg2VXq/log.png"
              className="w-48 h-14"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleOpen}>
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden absolute top-20 right-0 bg-white w-full p-4 z-10">
            {dynamicLinks.map((link, index) => (
              <Link key={index} to={link.to}>
                <span className="block text-gray-800 py-2 hover:bg-slate-100 rounded-full text-center">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
        <div className="hidden lg:flex items-center space-x-4">
          {dynamicLinks.map((link, index) => (
            <Link key={index} to={link.to}>
              <span className="hover:underline font-bold">{link.label}</span>
            </Link>
          ))}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "dark"}
            />
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="flex items-center space-x-4">
            {token ? (
              <button
                onClick={handleLogout}
                className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
