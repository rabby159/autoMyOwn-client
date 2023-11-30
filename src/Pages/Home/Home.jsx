import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>autoMyOwn | Home</title>
            </Helmet>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;