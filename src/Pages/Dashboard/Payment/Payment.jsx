import { Link } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  return (
    <div>
      <Helmet>
                <title>autoMyOwn | Payment</title>
            </Helmet>
      <SectionTitle heading={"Subscription & Payment"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/dPWrd4y/2984427-423954-PDTEDK-488.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Basic</h2>
            <p className="text-sm">Everything you need to create your product.</p>
            <p className="bg-gray-800 p-2 rounded-full text-white text-sm">Save 85%</p>
            <p className="text-base font-bold"><span className="text-3xl">$10</span>/month</p>
            <div className="card-actions">
             <Link to='/dashboard/basicPay'>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Purchase Now</button>
             </Link>
            </div>
          </div>
          <div className="border-t-2 text-center">
               <h2 className="my-2 font-bold text-center">Feature</h2>
              <ol className="space-y-2 mb-5">
                <li> <p className="text-base ">100 GB SSD Storage</p></li>
                <li> <p className="text-base ">Standard Performance</p></li>
                <li> <p className="text-base ">Increase the limit to 200</p></li>
              </ol>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/dPWrd4y/2984427-423954-PDTEDK-488.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Premium</h2>
            <p className="text-sm">Everything you need to create your product.</p>
            <p className="bg-gray-800 p-2 rounded-full text-white text-sm">Save 75%</p>
            <p className="text-base font-bold"><span className="text-3xl">$20</span>/month</p>
            <div className="card-actions">
            <Link to='/dashboard/premiumPay'>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Purchase Now</button>
             </Link>
            </div>
          </div>
          <div className="border-t-2 text-center">
               <h2 className="my-2 font-bold text-center">Feature</h2>
              <ol className="space-y-2 mb-5">
                <li> <p className="text-base ">200 GB SSD Storage</p></li>
                <li> <p className="text-base ">Increase the limit to 450</p></li>
                <li> <p className="text-base ">Increased Performance (Up to 5x)</p></li>
              </ol>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/dPWrd4y/2984427-423954-PDTEDK-488.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Business</h2>
            <p className="text-sm">Everything you need to create your product.</p>
            <p className="bg-gray-800 p-2 rounded-full text-white text-sm">Save 55%</p>
            <p className="text-base font-bold"><span className="text-3xl">$50</span>/month</p>
            <div className="card-actions">
            <Link to='/dashboard/businessPay'>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Purchase Now</button>
             </Link>
            </div>
          </div>
          <div className="border-t-2 text-center">
               <h2 className="my-2 font-bold text-center">Feature</h2>
              <ol className="space-y-2 mb-5">
                <li> <p className="text-base ">1 TB SSD Storage</p></li>
                <li> <p className="text-base ">Increase the limit to 1500</p></li>
                <li> <p className="text-base ">Maximum Performance (Up to 10x)</p></li>
              </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
