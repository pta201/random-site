import React from "react";
import SlickSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Item from "./item";
const BestSeller = () => {
  var settings = {
    arrows: false,
    infinite: true,
    easing: "ease-in-out",
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    indicators: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl text-center">Sản phẩm HOT</div>
      <SlickSlide {...settings}>
        {products.map((product, index) => (
          <Item
            key={index}
            title={product.title}
            imgSrc={product.imgSrc}
            href={`product/${product.slug}`}
            className="p-1 lg:p-4"
          />
        ))}
      </SlickSlide>
    </div>
  );
};

const products = [
  {
    slug: "product1",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-bong-bebecook-bo-sung-loi-khuan-vi-chuoi-600x600.png",

    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product2",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-huu-co-bebecook-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product3",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-lut-thanh-dai-bebecook-bo-sung-canxi-vitamin-b1-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product3",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-lut-thanh-dai-bebecook-bo-sung-canxi-vitamin-b1-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product3",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-lut-thanh-dai-bebecook-bo-sung-canxi-vitamin-b1-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
  {
    slug: "product3",
    imgSrc:
      "http://bebecook.vn/wp-content/uploads/2021/12/banh-gao-lut-thanh-dai-bebecook-bo-sung-canxi-vitamin-b1-vi-bi-ngo-600x600.jpg",
    title: "Bánh gạo hữu cơ hình que Bebecook vị Ngũ Cốc",
  },
];

export default BestSeller;
