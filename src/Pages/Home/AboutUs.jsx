import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <SectionTitle
        heading={"About Us"}
        subHeading={"We are more."}
      ></SectionTitle>
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center mt-10">
        <div className="flex-1 bg-gray-800 text-white p-5 rounded">
          <h2 className="text-4xl font-semibold mb-3">autoMyOwn</h2>
          <div className="mb-5">
            <p className="font-semibold">Address:</p>
            <p>Khilgaon, Dhaka-1219</p>
          </div>

          <div className="mb-5">
          <p className="font-semibold">Phone Number:</p>
          <p>0171854562</p>
          </div>

          <p className="font-semibold">Working Hours:</p>
          <p>Sun-Thu 09am - 08pm</p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-medium mb-3">
            At autoMyOwn, we want to provide you with the best automotive
            experience possible.
          </h2>
          <p className="mb-3">
            From researching the vehicle you want to test driving your options,
            we’re here to help with our knowledgeable sales staff and an
            impressive selection of cars, trucks, and SUVs.!
          </p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
