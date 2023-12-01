import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";

const WatchDemo = () => {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <Helmet>
                <title>autoMyOwn | Watch Demo</title>
            </Helmet>
      <Navbar></Navbar>
      <div>
        <h2 className="text-5xl font-bold mb-10 pt-36">Watch Demo Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Q6c902Rbjg0?si=_NPf9WOmRO9H1BhU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchDemo;
