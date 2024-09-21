import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Services } from "./services";
import { useState } from "react";





export const MenuResponsive = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
      };
    return(
        <div>
          <div>
        <div className="responsive" onClick={toggleDropdown}>Menu </div>
           <div> {isOpen &&(
                       

<ul className="resposivemenu">
          <Link to="" onClick={scrollToTop} className="">
          
            Accueil
          </Link>

          <Link
            to="about"
            activeClass="active"
            
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className=""
          >
            A propos
          </Link>

          <Link
            to="fonctionalite"
            activeClass="active"
            to="fonctionalite"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}
            className=""
          >
          
            Fonctionalités
          </Link>

          {/* <Link
          to="about"
          to="about"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav-items"
        >
          {" "}
          Autres Services
        </Link> */}

          <div>
            <Services />
          </div>

          <Link
            to="contact"
            activeClass="active"
            
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className=""
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
            className=""
          >
            
            Se connecter
          </Link>


          <div className="buttoncommencer">
            <Link to="about" className="">
              {" "}
              Creer votre compte
            </Link>
          </div>
        </ul>
        
     
                    )}
                    </div>

</div>




       
        </div>
    )
}