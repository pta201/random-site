import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarouselItem = (props) => {
  const title = props.title;
  const href = props.href;
  const imgSrc = props.imgSrc;
  const className = props.className;
  return (
    <Link href={href}>
      <div
        className={`card bg-white mx-4 hover:text-accent hover:brightness-105`}
      >
        <div className={`card-body  ${className}`}>
          <Image src={imgSrc} width={1} height={1} layout="responsive" />
          <div className="text-center text-xl font-semi">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default CarouselItem;
