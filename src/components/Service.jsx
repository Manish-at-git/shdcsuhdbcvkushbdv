import React from "react";
import Images from "../constants/images";
import Image from "next/image";

const Service = () => {
  const list = [
    {
      image: Images.truck,
      header: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      image: Images.service,
      header: "24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
    },
    {
      image: Images.guarantee,
      header: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
  ];
  return (
    <div className="flex gap-20 my-6 mx-auto justify-center">
      {list.map((item) => {
        return (
          <div className="px-5 py-2 flex flex-col items-center justify-center gap-5">
            <Image src={item.image.src} alt="" width={80} height={80} />
            <div className="flex flex-col gap-2 justify-center items-center ">
              <p className="text-[20px] font-semibold">{item.header}</p>
              <p className="text-[14px]">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
