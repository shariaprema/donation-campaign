
const DonationCard = ({donation}) => {
    const{id, picture, title, category, category_bg, card_bg, text_button_bg, description, price} = donation || {};

    return (
        <div >
             <div className="relative max-w-full flex w-[700px]  justify-center items-center mx-auto flex-col bg-white rounded-md bg-clip-border text-gray-700 shadow-md">
             <div className="relative rounded-t-md max-w-full mx-auto justify-center flex w-[700px] h-[400px] overflow-hidden">
             
                <img
                src={picture}
                className="max-w-full w-[700px] h-[400px] object-cover relative"
               
               /> 
              
               <div className="absolute bottom-0 left-2/4 flex w-[calc(100%-0rem)] -translate-x-2/4 justify-between bg-black/50 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
               <h2 style={{backgroundColor: text_button_bg}} className=" text-white rounded-md py-3 px-6 text-sm font-medium">Donate: ${price}</h2>
                </div> 
               
                </div>
                <div className="p-4">
                <div className="mb-2  flex items-center justify-between">
                <p className="block text-4xl font-bold leading-relaxed text-blue-gray-900 antialiased">
                    {title}
                </p>
                </div>
                <p className="block text-base font-normal leading-normal text-gray-700 antialiased opacity-75">
                {description}
                </p>
            </div>
            
            </div>
            
        </div>
    );
};

export default DonationCard;