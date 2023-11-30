import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HomeNav from "./HomeNav";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>autoMyOwn | Home</title>
            </Helmet>
            <HomeNav></HomeNav>
            <Banner></Banner>
        </div>
    );
};

export default Home;