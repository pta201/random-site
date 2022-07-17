import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import Header from "@/layout/Header/ProductPage";

const ProductPageLayout = (props) => {
  return (
    <div>
      <Header />
      <Menu />
      <main className="min-h-screen py-4">{props.children}</main>
      <Footer />
    </div>
  );
};

export default ProductPageLayout;
