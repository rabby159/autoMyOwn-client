import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MeetTeam = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        heading={"Meet Our Team"}
        subHeading={"Check out our team."}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card glass my-10">
          <figure>
            <img
              src="https://i.ibb.co/yVdj7n5/user-15.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lopez Luri</h2>
            <p>General Manager</p>
          </div>
        </div>
        <div className="card glass my-10">
          <figure>
            <img
              src="https://i.ibb.co/5jtdfb1/user-7.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Noyar Friedman</h2>
            <p>Sales Manager</p>
          </div>
        </div>
        <div className="card glass my-10">
          <figure>
            <img
              src="https://i.ibb.co/VVd3pm1/user-4.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">John Stanley</h2>
            <p>Service Department</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
