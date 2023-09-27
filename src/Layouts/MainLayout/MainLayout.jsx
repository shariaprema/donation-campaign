import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";

const MainLayout = () => {
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