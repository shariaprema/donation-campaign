import { Link } from "react-router-dom";

const DonationCardDesign = ({donation}) => {
    const{id, picture, title, card_bg, category, category_bg, text_button_bg,price} = donation || {};
    
    
    
    return (
        <div>

        <div  style={{backgroundColor:card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
            />
        </div>
        <div className="p-6">
            
            <div className=" mt-4 mb-1 flex">
                 <h2 style={{color: text_button_bg, backgroundColor: category_bg}} className=" rounded-md py-1 px-3 text-sm font-normal  leading-relaxed tracking-normal antialiased">{category}</h2>
             </div>

            <h4 className="mb-2 block text-2xl font-semibold  leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
            </h4>

            <p style={{color: text_button_bg}} className="mb-4 block text-base font-bold  leading-relaxed text-gray-700 antialiased">
             ${price}:00
            </p>
           
           
            <Link to={`/donations/${id}`} className="inline-block">
            <button  style={{backgroundColor: text_button_bg}}
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle  text-lg font-semibold  text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
            >
                View Details
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
                </svg>
            </button>
            
            </Link>
          
        </div>
        </div>  
            
        </div>
    );
};

export default DonationCardDesign;