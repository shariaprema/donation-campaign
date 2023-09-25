import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myCreatedRouter  = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader:()=> fetch('donation.json')
            },

            {
                path:"/donations",
                element:<Donation></Donation>
            },

            {
                path:"/statistics",
                element:<Statistics></Statistics>
            }
            



        ]
      },

])

export default myCreatedRouter;