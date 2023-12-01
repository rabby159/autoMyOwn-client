import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../Layouts/BasicLayout";
import Home from "../Pages/Home/Home";
import WatchDemo from "../Pages/WatchDemo/WatchDemo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <BasicLayout></BasicLayout>,
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
    }
]);

export default router;