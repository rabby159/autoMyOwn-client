import { Link } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";

const ProductManage = () => {

    const [product] =useProduct();

    return (
        <>
        <div>
            <h2 className="text-center mb-10 text-xl">Manage Your Product</h2>
        </div>
            <div className="flex justify-around border-y-2 p-4">
            <h2>Total {product.length} Product Added</h2>
            <Link to='/dashboard/addProduct'>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Add a Product</button>
            </Link>
            <Link to='/dashboard/viewAllProduct'>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">View All Product</button>
            </Link>
        </div>
        </>
    );
};

export default ProductManage;