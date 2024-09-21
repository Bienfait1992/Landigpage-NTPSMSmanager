import React from "react";
import { About } from "./about";
import { Services } from "./services";
import Carousel from "./caroussel";
import { Fonctionalites } from "./fonctionalites";
import { Question } from "./question";
// import { MenuResponsive } from "./responsive-menu";
import { Partenaire } from "./partenaire";



export const Home = () => {
  return (
    <div className="home">
      {/* <MenuResponsive/>/ */}
      <div className="carousel">
        <Carousel/>
      </div>
     
      <div className="nav-items">
        <div id="about">
          <About />
        </div>

        <div id="fonctionalite">
          <Fonctionalites/>
        </div>

      </div>

      <div><Question/></div>
      <div className="partenaires"><Partenaire/></div>
      
      
    </div>
  );
};
