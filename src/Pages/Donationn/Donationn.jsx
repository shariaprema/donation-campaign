import { useEffect, useState } from "react";
import DonationCardDesign from "./DonationCardDesign";

const Donationn = () => {
    
const[donations, setDonations] = useState([]);
const[noFound, setNoFound] = useState(false);
const[isShow, setIsShow] = useState(false);

useEffect(()=>{
    const donationItems = JSON.parse(localStorage.getItem("donations"))

    if(donationItems){
      setDonations(donationItems);

    }

    else{
        setNoFound('No donation found');
    }
},[]);

const handleRemove = () =>{
    localStorage.clear();
    setDonations([])
    setNoFound('No donation found');
}



    return (
        <div>
           {
            noFound ? <p className="h[80vh] flex justify-center items-center">{noFound}</p> 
            
            : 
                                               
            <div>
                
               { donations.length > 0 && <button onClick={handleRemove} className="block mx-auto" >
               <h2 className=" text-white  bg-[#009444] rounded-md py-2 px-4 text-base font-semibold">Delete All Donations</h2>
                </button>}

                <div className="grid grid-cols-2 gap-10 pt-8">

                   {
                   isShow ? donations.map(donation=><DonationCardDesign key={donation.id} donation={donation}></DonationCardDesign>)

                   : 
                   donations.slice(0,4).map(donation=><DonationCardDesign key={donation.id} donation={donation}></DonationCardDesign>)
                   
                   }
                    
                </div>

                {
                  donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className=" pt-6 block mx-auto" >
                  <h2 className=" text-white bg-[#009444] rounded-md py-2 px-4 text-base font-semibold">{isShow? 'See Less' : 'See All'}</h2>
                   </button>
                }
            </div>
           }
        </div>
    );
};

export default Donationn;