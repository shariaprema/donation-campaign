import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
     
        <div>
            <section className="flex h-screen justify-center bg-white text-black items-center relative z-10">
            <div className="container">
            <div className="flex -mx-4">
                <div className="w-full px-4">
                <div className="mx-auto max-w-[400px] text-center">
                    <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
                  Oops! That page can't be found
                </h4>
                <p className="mb-8 text-lg text-black">
                  The page you are looking for it maybe deleted.
                </p>
                
                <a href="/">
                  <p className="inline-block px-8 py-3 text-base font-semibold text-center text-white bg-sky-950 transition border border-white rounded-lg hover:bg-white hover:text-primary">Go to Home</p>
                </a>
              </div>
            </div>
          </div>
        </div>
     
      </section>
        </div>
    );
};

export default ErrorPage;