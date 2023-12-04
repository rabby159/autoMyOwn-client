import { Link } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";
import { Helmet } from "react-helmet-async";

const SalesCollection = () => {

    const [product] =useProduct();
    // console.log(product)

    return (
        <>
        <Helmet>
                <title>autoMyOwn | Sale Collection</title>
            </Helmet>
        <div>
            <h2 className="text-center mb-10 text-xl">Manage All Product</h2>
        </div>
        <input type="text" placeholder="Search Here" className="input input-bordered input-md w-full max-w-xs my-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
            product.map(item => <div className="card card-compact bg-base-100 shadow-xl" key={item._id}>
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Discount: {item.discount}%</p>
              <p>Selling Price: {item.cost}</p>
              <div className="card-actions justify-end">
                <Link to={`/dashboard/checkOut/${item._id}`}>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Sold To Customer</button>
                </Link>
              </div>
            </div>
          </div>)
        }
        </div>
        </>
    );
};

export default SalesCollection;


