import React from "react";
import { Contact } from "./contact";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export const Footer = () => {
  return (
    <div className="  w-fuul ">
      <div>
        <div>
          <Contact />
        </div>

        
          <div className="     w-full " >
            
            
           

            
      <div className="   w-[90%]  m-auto        ">

        
            <div className="flex flex-wrap justify-between  ">
            <p className=" mt-2">© NTP SMS Manager. 2017 - 2024, NTOPROG.</p>
          
            <div className="flex space-x-2  ">
              <FaFacebook className="icone" size={35}/>
              <FaInstagramSquare className="icone"size={35} />
              <SiYoutubemusic className="icone" size={35}/>
              <TiSocialLinkedinCircular className="icone"size={40} />
            </div>
          </div>
        

      </div>
           


           

          </div>

        </div>
       
      </div>
      
  
  );
};
