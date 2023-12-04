/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CarData = ({data}) => {
    const {carName, img, description, price} = data;

    useEffect(() => {
      AOS.init({
        delay: 500, 
        duration: 1000,
      });
    })

  return (
    <div>
      <div className="card bg-base-100 shadow-xl my-10" data-aos="zoom-in-up">
        <figure className="">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title  text-center">{carName}</h2>
          <p className="text-justify">{description}</p>
          <p className="font-semibold">Price: ${price}</p>
          <div className="card-actions">
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Check Out Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarData;
