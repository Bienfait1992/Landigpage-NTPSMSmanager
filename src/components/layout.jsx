import React from "react";
import { NavBar } from "./navbar";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";
import Carousel from "./caroussel";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* <Carousel/> */}
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
