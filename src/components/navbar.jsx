import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Logo } from "./logo";
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { Services } from "./services";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

// import { MenuResponsive } from "./responsive-menu";

export const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = ()=>{
      setIsOpen(!isOpen);
  };


  return (
    <nav className=" sticky top-0 z-30 bg-white shadow-xl py-5  ">
      <div className="flex m-auto w-[90%] justify-between ">

       <div className="flex   space-x-60"> 

            <div>   <Link to="/" onClick={scrollToTop} className=""><img src="src/images/images.jpg" alt=""  className="h-[70px] w-[70px]"/></Link></div>

            {/* <div className="responsive md:hidden" onClick={toggleDropdown}><CiMenuBurger /></div> */}
            
            <div className="md:hidden ">
                    <button onClick={toggleDropdown}  className="border border-gray-200 rounded ">
                   <CiMenuBurger size={30} />
                    </button>
            </div>
      </div>

      

      


<nav className="hidden md:flex ">
        <div className="flex space-x-6  items-center ">
          <Link to="" onClick={scrollToTop} >
          
            Accueil
          </Link>

          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
           
          >
            A propos
          </Link>


          <Link
            to="fonctionalite"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
           
          >
            Fonctionalités
          </Link>

          {/* <Link
            to="fonctionalites"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}
            
          >
          
            Fonctionalités
          </Link> */}

          

          {/* <div>
           

            <div className=" menu relative"> 
                                              <div className="flexmenu">
                                                  <div className="deroulant"><Link>Autres Services</Link></div> 
                                                      <ul className="sousmenu">
                                                        <div className="soumenua"><li><NavLink to="https://www.ntoprog.org" target="_blank">NTOPROG</NavLink></li></div> 
                                                          <div className="soumenua"><li><NavLink to="/" target="_blank">NTPAY</NavLink></li></div>
                                                          <div className="soumenua"><li><NavLink to="https://www.biso243.comF" target="_blank">BISO 243</NavLink></li></div>
                                                          <div></div>
                                                      </ul>
                                              </div>  
                                    </div>   


            
          </div> */}



<div>
           

            <div className="relative inline-block group"> 
                                              
                                                  <div className="inline-flex justify-center w-full          focus:outline-none"><Link>Autres Services</Link></div> 
                                                      
                                                  <div className="hidden absolute  w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 group-hover:block">
                                                      <ul className="py-1">
                                                          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><li><NavLink to="https://www.ntoprog.org" target="_blank">NTOPROG</NavLink></li></div> 
                                                          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><li><NavLink to="/" target="_blank">NTPAY</NavLink></li></div>
                                                          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><li><NavLink to="https://www.biso243.comF" target="_blank">BISO 243</NavLink></li></div>
                                                          
                                                      </ul>
                                              </div>  
                                    </div>   


            
          </div>



          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            
          >
            
            Contact
          </Link>

          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            
          >
            
            Se connecter
          </Link>


          <div className="buttoncommencer">
            <Link to="about" className="nav-items">
              Creer votre compte
            </Link>
          </div>
        </div>
        </nav>
      </div>





      <div className="block ml-6 mt-6">
        <div className=" "> {isOpen &&(
                       

                       <div className="">
                                 <div><Link to="" onClick={scrollToTop} className="">
                                 
                                   Accueil
                                 </Link></div>
                       
                                 <div><Link
                                   to="about"
                                   activeClass="active"
                                   spy={true}
                                   smooth={true}
                                   offset={-150}
                                   duration={500}
                                   className=""
                                 >
                                   A propos
                                 </Link></div>
                       
                                 <div><Link
                                   to="fonctionalites"
                                   activeClass="active"
                                   spy={true}
                                   smooth={true}
                                   offset={-150}
                                   duration={500}
                                   className=""
                                 >
                                 
                                   Fonctionalités
                                 </Link></div>
                       
                                 {/* <div>
                                   <div className="menu"> 
                                              <div className="flexmenu">
                                                  <div className="deroulant"><Link>Autres Services</Link></div> 
                                                      <ul className="sousmenu">
                                                        <div className="soumenua"><li><NavLink to="https://www.ntoprog.org" target="_blank">NTOPROG</NavLink></li></div> 
                                                          <div className="soumenua"><li><NavLink to="/" target="_blank">NTPAY</NavLink></li></div>
                                                          <div className="soumenua"><li><NavLink to="https://www.biso243.comF" target="_blank">BISO 243</NavLink></li></div>
                                                          <div></div>
                                                      </ul>
                                              </div>  
                                    </div>  
                                 </div>
 */}
<div>
           

           <div className="relative inline-block group"> 
                                             
                                                 <div className="inline-flex justify-center w-full          focus:outline-none"><Link>Autres Services</Link></div> 
                                                     
                                                 <div className="hidden absolute  w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 group-hover:block">
                                                     <ul className="py-1">
                                                         <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><li><NavLink to="https://www.ntoprog.org" target="_blank">NTOPROG</NavLink></li></div> 
                                                         <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><li><NavLink to="/" target="_blank">NTPAY</NavLink></li></div>
                                                         <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><li><NavLink to="https://www.biso243.comF" target="_blank">BISO 243</NavLink></li></div>
                                                         
                                                     </ul>
                                             </div>  
                                   </div>   


           
         </div>
                       
                               <div>  <Link
                                   to="contact"
                                   activeClass="active"
                                   spy={true}
                                   smooth={true}
                                   offset={50}
                                   duration={1000}
                                   className=""
                                 >
                                   
                                   Contact
                                 </Link></div>
                       
                                 <div><Link
                                   to="contact"
                                   activeClass="active"
                                   spy={true}
                                   smooth={true}
                                   offset={50}
                                   duration={1000}
                                   className=""
                                 >
                                   
                                   Se connecter
                                 </Link></div>
                       
                       
                                 <div className="buttoncommencer">
                                   <Link to="about" className="">
                                    
                                     Creer votre compte
                                   </Link>
                                 </div>
                               </div>
                               
                            
                                           )}
        </div>
        </div>
    </nav>
  );
};
