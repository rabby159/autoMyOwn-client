import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div>
            <div>
            <div className="flex items-center justify-center">

            <img className="w-[60vh]" src='https://i.ibb.co/Dp1wK2y/notfound.jpg' alt="" />
            </div>
            <div className="flex justify-center mt-5">
            <Link className="" to='/'>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Go Home</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default NotFoundPage;