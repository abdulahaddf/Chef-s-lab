import React from "react";
import Nav from "../shared/navbar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
