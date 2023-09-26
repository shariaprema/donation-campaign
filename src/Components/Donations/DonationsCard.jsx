import { Link } from "react-router-dom";

const DonationsCard = ({donation}) => {

    const{id, picture, title, category, category_bg, card_bg, text_button_bg} = donation || {};
    
    return (
        <div>

            <div>   
                <Link to={`/donations/${id}`}>
                <div style={{backgroundColor:card_bg}} className="w-[312px] h-[283px] relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative  overflow-hidden  rounded-t-xl  bg-white bg-clip-border text-gray-700">
                    <img
                    src={picture}
                    className="h-[194px] w-[312px] object-cover"
                    />
                </div>

                <div className="pl-3 mt-4 mb-1 flex">
                    <h2 style={{color: text_button_bg, backgroundColor: category_bg}} className=" rounded-md py-1 px-3 text-sm font-medium">{category}</h2>
                </div>

                <div className="pl-3 mb-2">
                <p style={{color: text_button_bg}} className="block text-xl font-semibold  ">{title}</p>
                   
                </div>
                
                </div>
                
                </Link>
                
                
            </div>

        </div>
    );
};

export default DonationsCard;