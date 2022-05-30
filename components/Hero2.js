import Map from "./Map";
import Link from 'next/link'
import Image from './Image'


const Hero = () => {



    return (
<aside className="relative overflow-hidden text-white bg-gradient-to-r from-sblue to-mblue">
  <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
      <h2 className="text-4xl font-bold sm:text-7xl">
        The Case For
        <span className="hidden sm:block">
          Screening
        </span>
      </h2>

      <p className="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
      By Rory Pulvino, JJ Naddeo, Joanie Weaver,
      Lily Grier, Jess Sorensen, and Jared Fishman
      </p>


    </div>
  </div>

  <div className="absolute inset-0 w-full h-full mix-blend-multiply">
    <img
      src="/static/images/jil_3rd_omni.png"
      alt="New robot toy"
      className="absolute inset-0 object-cover object-top w-full h-full"
    />
  </div>
</aside>

    );
  };

export default Hero