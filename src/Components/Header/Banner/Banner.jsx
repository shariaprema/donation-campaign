
const Banner = () => {
    return (
        <div>
            <div className="relative h-96 w-full  grid flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                
                <div>
                     <img className="absolute inset-0 m-0  rounded-none bg-transparent h[750px] w-[1260] bg-cover bg-clip-border bg-center text-white-700 shadow-none" src="../../../../public/resources/cover-img.png" alt="cover-pic" />
                     <div className="to-bg-black-10 absolute inset-0  lg:h-full lg:w-full bg-white opacity-90 "></div>
                </div>
    
             <div className= "mx-auto   py-2 px-4  lg:px-8 lg:py-4">
    
    
            <div className="relative  pt-32 pb-14 px-6">
                <h2 className="mb-6 block text-[#0B0B0B] text-4xl font-bold">
                I Grow By Helping People In Need
                </h2>
                     
    
                <form className="lg:w-[470px] lg:height:[50px]; mx-auto">   
                    
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-pink-700 dark:border-zinc-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="Search here...." required/>
                    <button type="submit" className="text-white absolute w-[110px]  right-0 top-0  bottom-0 bg-[#FF444A] hover:[#FF444A]  font-medium text-sm p-3">Search</button>
    
                 </div>
    
                </form>
                
                 </div>
                </div>
    
           </div>
            
        </div>
    );
};

export default Banner;