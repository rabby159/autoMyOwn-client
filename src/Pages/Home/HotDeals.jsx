import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CarData from "./CarData";



const HotDeals = () => {
  const carData = useLoaderData();



  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        heading={"Hot Deals"}
        subHeading={"Choose Yours!"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
        carData?.map((data) => (
          <CarData key={data.id} data={data}></CarData>
        ))
        }
      </div>
    </div>
  );
};

export default HotDeals;
