import DonationsCard from "./DonationsCard";

const Donations = ({donations}) => {


    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  mx-auto my-2">
                {
                    donations.map((donation, idx) => <DonationsCard key={idx} donation={donation} ></DonationsCard>)
                }
            </div>
        
        </div>
    );
};

export default Donations;