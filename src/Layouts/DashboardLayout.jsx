import { NavLink, Outlet } from "react-router-dom";
import { FaArtstation, FaCcAmazonPay, FaHouseMedical, FaSackDollar, FaShop, FaUser } from "react-icons/fa6";
// import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  //   const [isAdmin] = useAdmin();

  return (
    <div className="flex gap-8">
      <div className="w-80 min-h-screen bg-gray-800">
        <div>
            <h2 className="text-white text-center mt-5">Dashboard Menu</h2>
        </div>
        <ul className="menu p-4 text-base font-medium text-white divide-y divide-blue-200">
          <div>
            <li>
              <NavLink to="/dashboard/productManage">
                <FaShop />
                Product Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/salesCollection">
                <FaSackDollar />
                Sales-Collection
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment"> <FaCcAmazonPay /> Subscription & Payment</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/salesSummary"> <FaArtstation /> Sales Summary</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allUser"> <FaUser /> All User</NavLink>
            </li>
          </div>

          {/* divider */}
          <div>
            <li>
              <NavLink to="/"><FaHouseMedical></FaHouseMedical> Home</NavLink>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex-1 mt-10 text-3xl font-semibold p-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
