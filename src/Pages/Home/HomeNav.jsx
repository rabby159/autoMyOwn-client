import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview.png";
import useAuth from "../../Hooks/useAuth";

const HomeNav = () => {
  const {user, logOut} = useAuth();
  const handleSignOut = () => {
    logOut()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  const navMenu = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/createStore'>Create Store</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/register'>Register</NavLink></li>
      <li><NavLink to='/watchDemo'>Watch Demo</NavLink></li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar fixed z-10 bg-opacity-40 max-w-7xl mx-auto bg-gray-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <div>
            <img className="w-64" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="">
        {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost text-black">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm  btn-ghost text-black"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNav;