import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const CreateStore = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);

    if(data){
        const createShop = {
            name: data.name,
            image: data.imageURL,
            info: data.info,
            location: data.location,
            OwnerName: data.OwnerName,
            OwnerEmail: data.OwnerEmail
        }
        const shopRes = await axiosSecure.post('/shop', createShop)
        console.log(shopRes.data);
        if(shopRes.data.insertedId){
            reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
        }
    }
  };

  return (
    <>
    <div className="max-w-7xl mx-auto mb-20">
        <Navbar></Navbar>
      <SectionTitle
        heading="Create Shop"
        subHeading="Grow your business"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop Name</span>
              </label>
              <input
                type="text"
                placeholder="Shop Name"
                {...register("name", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop Logo</span>
              </label>
              <input
                type="text"
                placeholder="Shop logo"
                {...register("imageURL", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop Info</span>
              </label>
              <input
                type="text"
                placeholder="Shop Info"
                {...register("info", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop Location</span>
              </label>
              <input
                type="location"
                placeholder="Shop location"
                {...register("location", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop Owner Name</span>
              </label>
              <input
                type="name"
                placeholder="Shop Owner Name"
                {...register('OwnerName', { required: true })}
                required
                className="input input-bordered w-full"
              />
            
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop Owner Email</span>
              </label>
              <input
                type="email"
                placeholder="Shop Owner Email"
                {...register("OwnerEmail", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <button className="bg-gray-800 text-white px-4 py-2 rounded mt-5">Create Shop</button>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default CreateStore;
