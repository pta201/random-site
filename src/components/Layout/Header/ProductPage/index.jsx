import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className="flex  justify-center items-center py-2 max-w-screen-lg mx-auto lg:justify-between">
      <div className="lg:flex-auto">
        <Image
          src="https://admin.bebecook.com/images/common/PC_bebecook_logo.png?ver=20220708"
          width={300}
          height={75}
          layout="fixed"
        />
      </div>
      <div className="lg:flex flex-auto items-center gap-8 hidden">
        <div className="flex gap-4 items-center">
          <div className="text-6xl text-bebecook">
            <FontAwesomeIcon icon="location-dot" />
          </div>
          <div className="w-40 text-left">
            Số 2, ngõ 9, đường Tả Thanh Oai, Thanh Trì, Hà Nội
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-6xl text-bebecook">
            <FontAwesomeIcon icon="envelope" />
          </div>
          <div>
            <a href="bebecookvn@gmail.com">bebecookvn@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
