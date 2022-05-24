import Map from "./Map";
import Link from 'next/link'



const vizHeader = () => {



    return (
      <div className=" bg-gray-50  p-10 ">
        <div className="grid gap-5 row-gap-1 lg:grid-cols-1">
          <div className="">
            <div className=" max-w-4xl mb-6">
              <div>
              </div>
              <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold  text-black sm:text-4xl sm:leading-none">
              The Volume and Characteristics of <span className="text-maroon">Arrests</span> Eligible for Detention.
              </h2>
              <p className="text-base max-w-2xl text-gray-700 md:text-md">
              The PFA prohibits pretrial detention for most individuals arrested in Illinois. There are only 79 offenses that are detainable under the public safety standard.  Historical trends can be used to understand how the PFA's impact on detainable arrests.
              </p>

              <p className="text-base max-w-2xl mt-4 text-gray-700 md:text-md mb-10">
             This tool presents data on the distribution of detainable arrests. It breaks down their offense, failure to appear (FTA),
              and risk level. Scroll down &#129031; to the visualization or click read the full report.
              </p>
            </div>
            
            <div className="flex flex-row gap-2">



            <div className="p-3 sm:w-1/4 w-3/4 bg-gray-50 shadow-xs hover:shadow-lg border-r-[9px] border-b-[9px] border-black border-2 rounded-lg transition duration-300 ease-in-out -translate-y-1 translate-x-1 ">
            <Link
              href="/blog/estimate-pfa-act"
              
            >
             <div className="inline-flex items-center sm:text-md text-sm font-semibold transition-colors hover:underline duration-200 text-deep-purple-accent-400 hover:text-maroon cursor-pointer">Read the Full Report &#10141;</div> 
              </Link>
            </div>

            </div>
          
          </div>

        </div>
        
      </div>
    );
  };

export default vizHeader