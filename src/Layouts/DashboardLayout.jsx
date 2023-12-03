import { NavLink, Outlet } from "react-router-dom";
import {
  FaArrowRightFromBracket,
  FaArtstation,
  FaCcAmazonPay,
  FaHouseMedical,
  FaSackDollar,
  FaShop,
  FaUser,
} from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";


const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const { logOut } = useAuth();
  const handleSignOut = () => {
    logOut()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };


  return (
    <>
    <div className="flex gap-8">
      <div className="w-80 min-h-screen bg-gray-700">
        <div>
          <h2 className="text-white text-center mt-5">Dashboard Menu</h2>
        </div>
        <ul className="menu p-4 text-base font-medium text-white divide-y divide-blue-200">
          {
          
            isAdmin ? (
            <div>
              <li>
                <NavLink to="/dashboard/productManage">
                  <FaShop />
                  All Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/salesCollection">
                  <FaSackDollar />
                  Sales-Summary
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUser /> All User
                </NavLink>
              </li>
            </div>
          ) : (
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
                <NavLink to="/dashboard/payment">
                  <FaCcAmazonPay /> Subscription & Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/salesSummary">
                  <FaArtstation /> Sales Summary
                </NavLink>
              </li>
            </div>
          )
          }

          {/* divider */}
          <div>
            <li>
              <NavLink to="/">
                <FaHouseMedical></FaHouseMedical> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={handleSignOut}>
              <FaArrowRightFromBracket /> LogOut
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex-1 mt-10 text-3xl font-semibold p-16">
        <Outlet></Outlet>
      </div>
    </div>
    <div className="-mt-5">
    <Footer></Footer>
    </div>
    </>
  );
};

export default DashboardLayout;
