import Slider from "@/layout/Slider";
import React from "react";
import Footer from "../Footer";
import Header from "@/layout/Header/LandingPage";
import Menu from "../Menu";

const LandingPageLayout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full z-50 shadow-md  shadow-bebecook">
        <Header />
      </div>
      <Menu className="shadow-md  shadow-bebecook" />

      <Slider />

      <main className="my-4 lg:my-8">{props.children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageLayout;
