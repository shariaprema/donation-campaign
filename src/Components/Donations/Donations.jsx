import DonationCard from "./DonationCard";

const Donations = ({donations}) => {
    console.log(donations);


    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  mx-auto my-20">
                {
                    donations.map(donation =><DonationCard key={donation.id} donation={donation} ></DonationCard>)
                }
            </div>
            
        </div>
    );
};

export default Donations;