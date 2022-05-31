import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

//import { ChevronDownIcon } from '@heroicons/react/solid'


const LinkComponent = ({text, linkPath}) => {

    return (
        <Link
        activeClass="active"
        to={linkPath}
        spy={false}
        smooth={false}
        offset={-70}
        duration={100}
    >

            <li>
            <a className="text-left text-sm hover:text-primary hover:bg-gray-500">      
            {text}

                
            </a>
            </li> 
        </Link>
    )
}


const TOCSmall = () => {




    return (

        
        <div className='fixed xl:top-18 xl:right-16 lg:top-10 lg:right-0  flex justify-end hidden lg:block '>
        <nav className="nav__container__actions mt-8">
        <div className="text-black text-md font-bold mb-2"> Table of Contents</div>
    <ul className="cursor-pointer ml-4 text-sm space-y-2">

      <li >
      <Link activeClass="active" className="hover:text-sblue" to="introduction" spy={true} smooth={'easeInOutQuart'} offset={-40} duration={10} >
          Introduction
        </Link>
      </li>
      <li>
        <Link activeClass="active"  to="open-cases" spy={true} smooth={'easeInOutQuart'} offset={-40} duration={10}>
          Visualization
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="blog" py={true} smooth={'easeInOutQuart'} offset={-40} duration={10}>
          Section 3
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="contact" py={true} smooth={'easeInOutQuart'} offset={-40} duration={10}>
          Section 4
        </Link>
      </li>
    </ul>
  </nav>

   

</div>



 

 
     
            
            );
}




export default TOCSmall
