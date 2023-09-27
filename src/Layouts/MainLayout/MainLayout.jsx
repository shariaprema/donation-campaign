import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {

    const location = useLocation()
        console.log(location);

        useEffect(()=>{
           if(location.pathname === '/'){
            document.title = `Donation-home`
           }
           else{
            document.title = `Donation${location.pathname.replace("/", "-")}`
           }

        },[location.pathname]);
    
        if(location.state){
            document.title = `${location.state}`
        }




    return (
        <div className="max-w-[1600px] mx-auto overflow-hidden">

            <Navbar></Navbar>
           <div className="mb-10 px-3" > 
           <Outlet></Outlet>
           </div>
            
            
        </div>
    );
};

export default MainLayout;