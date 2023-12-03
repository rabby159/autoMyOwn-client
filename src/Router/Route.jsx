import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../Layouts/BasicLayout";
import Home from "../Pages/Home/Home";
import WatchDemo from "../Pages/WatchDemo/WatchDemo";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateStore from "../Pages/CreateStore/CreateStore";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import ProductManage from "../Pages/Dashboard/ProductMange/ProductManage";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import ViewAllProduct from "../Pages/Dashboard/ViewAllProduct/ViewAllProduct";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasicLayout></BasicLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/carData.json')
            },
            {
                path: 'watchDemo',
                element: <WatchDemo></WatchDemo>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/createStore',
        element: <PrivateRoute><CreateStore></CreateStore></PrivateRoute>
    },
    
    //dashboard routes
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'productManage',
                element: <ProductManage></ProductManage>,
                loader: () => fetch('http://localhost:5000/addProduct')
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'viewAllProduct',
                element: <ViewAllProduct></ViewAllProduct>
            },
            {
                path: 'updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/addProduct/${params.id}`)
            },
            {
                path: 'allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
        ]
    }
]);

export default router;