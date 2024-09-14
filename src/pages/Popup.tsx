import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        const visited = localStorage.getItem("hasVisited");
        if (!visited) {
            setShowPopup(true);
            localStorage.setItem("hasVisited", "true");  // Set that the user has visited
        }
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };
    return (
        showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 md:px-0 px-5">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                    <img
                        src="https://i.ibb.co.com/xDg2VXq/log.png"
                        className="w-48 h-14"
                        alt="Logo"
                    />
                    <h1 className="my-5">Explore our Dashboard and unlock additional features for an enhanced experience!</h1>
                    <div className="flex gap-2">
                        <Link
                        to="/dashboard"
                            className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800"
                        >
                           Dashboard
                        </Link>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-md glass"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default Popup;