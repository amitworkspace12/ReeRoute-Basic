import React from "react";
import BackgroundImage from "../images/backgroundImage.jpg";
import Ice from "../images/studiolast.jpg";
import Plane from "../images/plane.jpg";
import SecondPic from "../images/secondpic.jpg";
import FirstPic from "../images/firstpic.jpg";
import firstlogo from "../images/Logo.png";
import secondlogo from "../images/Norto.png";
import Thirdlogo from "../images/Logo2.png";
import fourthlogo from "../images/Out Of The Sand Box.png"

const ImageGallery = () => {
  return (
    <div className="hidden md:flex flex-col relative mt-10">
      <img
        src={BackgroundImage}
        className="w-full md:h-[230px] lg:h-[270px] contrast-150 brightness-50 opacity-90"
      />
      <div className="flex justify-center w-full items-center absolute md:top-[24%] lg:top-[20%]">
        <div className="relative">
          <img
            className="object-cover md:w-[150px] lg:w-[200px] brightness-50"
            src={FirstPic}
          />
          <img
            className="absolute w-[130px] top-[40%] left-[15%]"
            src={firstlogo}
            alt="logo1"
          />
        </div>
        <div className="relative">
          <img
            className="object-cover md:w-[150px] lg:w-[200px] brightness-50"
            src={SecondPic}
          />
          <img
            className="absolute w-[80px] top-[40%] left-[25%]"
            src={secondlogo}
            alt="logo1"
          />
        </div>
        <div className="relative">
          <img
            className="object-cover md:w-[150px] lg:w-[200px] brightness-50"
            src={Plane}
          />
          <img
            className="absolute w-[130px] top-[40%] left-[15%]"
            src={Thirdlogo}
            alt="logo1"
          />
        </div>

        <div className="relative">
          <img
            className="object-cover md:w-[150px] lg:w-[200px] brightness-50"
            src={Ice}
          />
          <img
            className="absolute w-[130px] top-[40%] left-[15%]"
            src={fourthlogo}
            alt="logo1"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
