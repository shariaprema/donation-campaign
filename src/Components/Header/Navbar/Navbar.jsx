import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    
    return (
        <div >
           <nav className="flex justify-between items-center text-lg font-bold py-4 px-10">
            <Logo></Logo>
            <ul className="flex gap-5">
                <li>
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#FF444A] underline' : ""
                    }>
                    Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to="/donationn"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#FF444A] underline' : ""
                    }>
                    Donation
                    </NavLink>
                </li>


                <li>
                    <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-[#FF444A] underline' : ""
                    }>
                    Statistics
                    </NavLink>
                </li>
            </ul>

        </nav>



         
            
        </div>
    );
};

export default Navbar;