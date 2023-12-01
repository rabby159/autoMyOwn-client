import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const OurMission = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        heading={"Our Mission"}
        subHeading={
          "We want to provide you with the best automotive experience possible."
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* 1st card */}
        <div className="card my-10">
          <figure className="px-10">
            <img
              src="https://i.ibb.co/vBqMVsz/hot-price-removebg-preview.png"
              alt="Shoes"
              className="rounded-xl w-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Best Rent Prices</h2>
            <p>
              We are open to offer you the best prices in town for rent a car!
            </p>
            <div className="card-actions">
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="card my-10">
          <figure className="px-10">
            <img
              src="https://i.ibb.co/x57H8Jv/calendar.jpg"
              alt="Shoes"
              className="rounded-xl w-32"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Reserve Anytime</h2>
            <p>
            You can reserve a car anytime you want (24/7).
            </p>
            <div className="card-actions">
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="card my-10">
          <figure className="px-10">
            <img
              src="https://i.ibb.co/4RNqNs2/location-removebg-preview.png"
              alt="Shoes"
              className="rounded-xl w-32"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Lots of Pickup Locations</h2>
            <p>
            50+ US car rental locations. 105+ countries worldwide.
            </p>
            <div className="card-actions">
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
