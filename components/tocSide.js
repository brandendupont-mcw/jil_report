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

        
        <div className='sticky top-32 right-1 w-full flex justify-end '>
        <nav className="nav__container__actions">
        <div className="text-black text-sm font-bold mb-2"> Table of Contents</div>
    <ul className="cursor-pointer ml-4 text-xs space-y-2">

      <li >
      <Link activeClass="active"  to="test1" spy={true} smooth={'easeInOutQuart'} offset={-40} duration={10} >
          Test 1
        </Link>
      </li>
      <li>
        <Link activeClass="active"  to="projects" spy={true} smooth={'easeInOutQuart'} offset={-40} duration={10}>
          Projects
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="blog" py={true} smooth={'easeInOutQuart'} offset={-40} duration={10}>
          Blog
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="contact" py={true} smooth={'easeInOutQuart'} offset={-40} duration={10}>
          Contact Me
        </Link>
      </li>
    </ul>
  </nav>

   

</div>



 

 
     
            
            );
}




export default TOCSmall
