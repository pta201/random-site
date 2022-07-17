import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlide from "react-slick";
import CarouselItem from "@/components/Common/CarouselItem";
const RelatedProduct = (props) => {
  const settings = {
    infinite: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div
      className={`flex flex-col gap-4 py-4 w-full max-w-screen-lg overflow-x-hidden ${props.className}`}
    >
      <h2 className="text-xl font-semibold text-center">
        Các sản phẩm liên quan
      </h2>
      <SlickSlide {...settings}>
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            title={product.title}
            imgSrc={product.imgSrc}
            href={`products/${product.slug}`}
            className="p-1 text-ellipsis lg:p-4 "
          />
        ))}
      </SlickSlide>
    </div>
  );
};

export default RelatedProduct;
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
