import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Services = () => {
  return (
    <>
      <ul className="menu"> 
                    <div className="flexmenu">
                        <div className="deroulant"><Link>Autres Services</Link></div> 
                            <ul className="sousmenu">
                               <div className="soumenua"><li><NavLink to="https://www.ntoprog.org" target="_blank">NTOPROG</NavLink></li></div> 
                                <div className="soumenua"><li><NavLink to="/" target="_blank">NTPAY</NavLink></li></div>
                                <div className="soumenua"><li><NavLink to="https://www.biso243.comF" target="_blank">BISO 243</NavLink></li></div>
                                <div></div>
                            </ul>
                    </div>  
            </ul>    
                
    </>
  );
};
