/* eslint-disable no-unused-vars */
import { FaRegTrashCan } from "react-icons/fa6";
import useProduct from "../../../Hooks/useProduct";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useAddProduct from "../../../Hooks/useAddProduct";
import { useQuery } from "@tanstack/react-query";

const ViewAllProduct = () => {
  const [product] = useProduct();
//   const [ refetch] = useAddProduct();
  const axiosSecure = useAxiosSecure();
  const { data: addProduct = [], refetch } = useQuery({
    queryKey: ["addProduct"],
    queryFn: async () => {
      const res = await axiosSecure.get("/addProduct");
      return res.data;
    },
  });

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/addProduct/${item._id}`);
        if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} has been deleted`,
                showConfirmButton: false,
                timer: 1500
            });
        }
      }
    });
  };

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
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg"
                  >
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
