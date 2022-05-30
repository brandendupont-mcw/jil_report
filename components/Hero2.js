import Map from "./Map";
import Link from 'next/link'
import Image from './Image'


const Hero = () => {



    return (
<aside class="relative overflow-hidden text-white bg-gradient-to-r from-sblue to-mblue">
  <div class="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
      <h2 class="text-4xl font-bold sm:text-7xl">
        The Case For
        <span class="hidden sm:block">
          Screening
        </span>
      </h2>

      <p class="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
      By Rory Pulvino, JJ Naddeo, Joanie Weaver,
      Lily Grier, Jess Sorensen, and Jared Fishman
      </p>


    </div>
  </div>

  <div class="absolute inset-0 w-full h-full mix-blend-multiply">
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