/* eslint-disable no-unused-vars */

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SocialConnect = () => {
    const {signInGoogle} = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () =>{
        signInGoogle()
        .then(result=> {
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
              };
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate(from, { replace: true });
                }
              });
            })
        .catch(err => {
            console.log(err)
          })
    }



    return (
        <div>
            <div className="divider">
                <h2 className="font-medium">login with</h2>
            </div>
            <div className="flex justify-center">
                <button onClick={handleGoogleLogin} className="bg-gray-800 text-white px-4 py-2 rounded">Google</button>
            </div>
        </div>
    );
};

export default SocialConnect;