
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const AllShop = () => {

    const shops = useLoaderData();

    return (
        <div>
          <Helmet>
                <title>autoMyOwn | All Shop</title>
            </Helmet>
            <SectionTitle heading={'All Shop'}></SectionTitle>
            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image Name</th>
              <th>Product Limit</th>
              <th>Shop Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>3</td>
                <td>{item.info}</td>
                <th>
                  <Link to={`/dashboard/updateProduct/${item._id}`}>
                    <button className="btn btn-ghost btn-xs">Send Notice</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllShop;