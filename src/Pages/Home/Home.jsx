import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HomeNav from "./HomeNav";
import OurMission from "./OurMission";
import HotDeals from "./HotDeals";
import AboutUs from "./AboutUs";
import MeetTeam from "./MeetTeam";
import Footer from "../../Shared/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>autoMyOwn | Home</title>
            </Helmet>
            <HomeNav></HomeNav>
            <Banner></Banner>
            <OurMission></OurMission>
            <HotDeals></HotDeals>
            <AboutUs></AboutUs>
            <MeetTeam></MeetTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;