import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const product = useLoaderData();
  const { name, description, location, cost, image } = product;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Location: {location}</p>
          <div className="card-actions justify-end">
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Get Paid ${cost}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
