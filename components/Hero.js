import Map from "./Map";

const Statistic = () => {
    return (
      <div className=" bg-gray-50  p-10 mb-32">
        <div className="grid gap-5 row-gap-2 lg:grid-cols-2">
          <div className="sm:ml-14 flex flex-col justify-center">
            <div className=" max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase bg-maroon">
                Loyola University Chicago
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                Tracking the
                <br className=" md:block" />
                Pretrial Fairness Act {' '}
                <span className="inline-block text-deep-purple-accent-400">
                in Illinois 
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-md">
              In January 2021, the Illinois General Assembly passed House Bill 3653  – an omnibus crime bill known as the Safety, Accountability, Fairness and Equity Act that abolishes cash bail.

               <span className="px-1 py-1 mb-4 text-md font-bold text-maroon">
                We're tracking how the law impacts bond court outcomes, pretrial, and jail population across Illinois.</span>
              </p>
            </div>
            
            <a
              href="/about"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-maroon"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="sm:mt-4 hidden sm:block">
         
          <Map />
          </div>

        </div>
        
      </div>
    );
  };

export default Statistic