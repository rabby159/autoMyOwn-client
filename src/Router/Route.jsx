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
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'productManage',
                element: <ProductManage></ProductManage>
            }
        ]
    }
]);

export default router;