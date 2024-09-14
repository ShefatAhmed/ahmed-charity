import { Link } from "react-router-dom";
import { useGetAllVolunteerQuery } from "../../redux/features/volunteer/volunteerApi";

const AboutUs = () => {
  const { data: volunteers } = useGetAllVolunteerQuery(undefined);

  return (
    <div className="max-w-3xl mx-auto mt-16 px-4 sm:px-6 md:px-8">
      <section id="ahmedCharity" className="mt-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to Ahmed Charity</h2>
        <p>
          At Ahmed Charity, we are dedicated to making a positive impact on the
          world through charitable contributions and community service. Our
          mission is to extend a helping hand to those in need and create a
          better, more compassionate world.
        </p>
        <p>
          Your support allows us to carry out various initiatives, including
          providing assistance to individuals and communities facing hardships.
          Together, we can make a difference in the lives of those who need it
          most.
        </p>
        <p>
          Thank you for being a part of our mission to bring hope, relief, and
          positive change to the world.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>
            <strong>Email:</strong> info@ahmedcharity.org
          </p>
          <p>
            <strong>Phone:</strong> +123-456-7890
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
          <p>
            <strong>Address:</strong> 123 walking Street, Dhaka, Bangladesh
          </p>
        </div>
      </section>
      <hr className="my-10" />
      <section id="ourVolunteers" className="mt-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-4xl font-bold mb-4">Our Volunteers</h3>
          <Link
            to="/volunteer"
            className="btn glass bg-teal-500 rounded-lg text-white px-6 py-2 hover:bg-teal-800 text-lg"
          >
            Create Volunteer
          </Link>
        </div>
        {volunteers && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {volunteers.map((volunteer: any) => (
              <li
                key={volunteer._id}
                className="bg-white shadow-md rounded-md p-6 mb-4 transition-transform transform hover:scale-105"
              >
                <strong className="text-xl block mb-4">{volunteer.name}</strong>
                <div className="text-gray-600 mb-4">
                  <p>{volunteer.email}</p>
                  <p>Cell: {volunteer.phoneNumber}</p>
                </div>
                <p className="text-gray-800">
                  <strong className="text-lg">Location: </strong>
                  {volunteer.location}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
