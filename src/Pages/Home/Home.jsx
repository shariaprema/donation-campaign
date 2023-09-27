import { useLoaderData } from "react-router-dom";
import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
    const donations = useLoaderData();
    
    return (
        
        <div >
            <div className="mb-16">
            <Banner></Banner>
            </div>
            <Donations donations={donations}></Donations>

        </div>
    );
};

export default Home;