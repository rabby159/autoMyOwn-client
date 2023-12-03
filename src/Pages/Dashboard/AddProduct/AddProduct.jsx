/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


const AddProduct = () => {

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
  const {user} = useAuth();

  const onSubmit = async (data) => {
    
    const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success && user.email) {
          const newProduct = {
              email: user.email,
              name: data.name,
              quantity: parseFloat(data.quantity),
              description:data.description,
              location: data.location,
              cost: parseFloat(data.cost),
              profit: parseFloat(data.profit),
              discount: parseFloat(data.discount),
              image: res.data.data.display_url,
              

          }
          // 
          const newProductRes = await axiosSecure.post('/addProduct', newProduct);
          // console.log(menuRes.data)
          if(newProductRes.data.insertedId){
              // show success popup
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.name} Product are added.`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      }
  };
  
  return (
    <>
      <div className="max-w-7xl mx-auto mb-20">
        <SectionTitle heading="Add Product" subHeading=""></SectionTitle>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="quantity"
                  {...register("quantity", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  {...register("description", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Shop Location</span>
                </label>
                <input
                  type="location"
                  placeholder="location"
                  {...register("location", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Cost</span>
                </label>
                <input
                  type="number"
                  placeholder="cost"
                  {...register("cost", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Profit Margin</span>
                </label>
                <input
                  type="number"
                  placeholder="profit %"
                  {...register("profit", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Discount</span>
                </label>
                <input
                  type="number"
                  placeholder="discount %"
                  {...register("discount", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full"></div>
            </div>
            <div className="mt-3">
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>

            <div className="flex justify-center">
              <button className="bg-gray-800 text-white px-4 py-2 rounded mt-5">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
