import React from "react";
import SlickSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Slider = (props) => {
  var settings = {
    arrows: false,
    infinite: true,
    easing: "ease-in-out",
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <SlickSlide {...settings}>
      {slideImages.map((slideImage, index) => (
        <Image
          key={index}
          src={slideImage.url}
          width={21}
          height={9}
          layout="responsive"
        />
      ))}
    </SlickSlide>
  );
};
const slideImages = [
  {
    url: "http://bebecook.vn/wp-content/uploads/2022/03/banner-so-1-han.png",
    caption: "Slide 1",
  },
  {
    url: "http://bebecook.vn/wp-content/uploads/2022/03/2.png",
    caption: "Slide 2",
  },
  {
    url: "http://bebecook.vn/wp-content/uploads/2022/06/Bia-mua-he-vui.png",
    caption: "Slide 3",
  },
];

export default Slider;
