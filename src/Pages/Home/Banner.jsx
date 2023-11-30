import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/DfjJHqP/car-bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Grow Your Auto!</h1>
            <p className="mb-5">
              Focus on providing excellent customer service. Consider expanding
              your range of services, such as offering maintenance packages,
              detailing, or specialty services.
            </p>
            <Link to='/createStore'>
              <button className="btn btn">Create Store</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
