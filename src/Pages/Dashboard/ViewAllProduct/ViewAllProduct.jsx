import { FaRegTrashCan } from "react-icons/fa6";
import useProduct from "../../../Hooks/useProduct";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ViewAllProduct = () => {
  const [product] = useProduct();
//   console.log(product);
  return (
    <div>
      <SectionTitle heading={"All Product Here!"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image Name</th>
              <th>Quantity</th>
              <th>Sale Count</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
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
                <td>{item.quantity}</td>
                <td>05</td>
                <th>
                  <Link to={`/dashboard/updateProduct/${item._id}`}>
                  <button className="btn btn-ghost btn-xs">Update</button>
                  </Link>
                </th>
                <th>
                  <button className="btn btn-ghost btn-lg">
                    <FaRegTrashCan className="text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllProduct;
