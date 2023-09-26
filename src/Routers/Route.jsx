import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donationn from "../Pages/Donationn/Donationn";
import Donation from "../Pages/Donation/Donation";

const myCreatedRouter  = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader:()=> fetch(`/donation.json`)
            },

            {
                path:"/donationn",
                element:<Donationn></Donationn>
            },

            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },

            {
                path:"/donations/:id",
                element:<Donation></Donation>,
                loader:()=>fetch(`/donation.json`)

            },
            
        ]
      },

])

export default myCreatedRouter;