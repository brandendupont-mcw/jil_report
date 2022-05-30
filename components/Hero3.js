import Map from "./Map";
import Link from 'next/link'
import Image from './Image'


const Hero = () => {



    return (
<aside
  className="overflow-hidden text-white lg:grid bg-gradient-to-r from-mblue to-mblue lg:grid-cols-2 lg:items-center"
>
  <div className="p-12 text-center sm:p-14 lg:p-14 lg:text-left">
    <div className="max-w-lg mx-auto lg:ml-0 lg:pt-12">
      <p className="text-3xl font-bold sm:text-6xl">
      The Case For Screening
      </p>

      <p className="mt-4">
      By Rory Pulvino, JJ Naddeo, Joanie Weaver,
      Lily Grier, Jess Sorensen, and Jared Fishman
      </p>
    </div>
  </div>

  <div className="lg:pt-24">
    <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
      <img
        className="absolute inset-0 object-cover w-full h-full lg:rounded-tl-3xl"
        src="/static/images/jil_test_image.png"
        alt=""
      />
    </div>
  </div>
</aside>


    );
  };

export default Hero