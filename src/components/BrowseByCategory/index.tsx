"use client";

import Image from "next/image";
import React, { useState } from "react";
import CategoryHeader from "../CategoryHeader";

type MBrowseByCategoryProps = {
  className?: string;
  title: string;
  subTitle: string;
  data: any;
};

const MBrowseByCategory: React.FC<MBrowseByCategoryProps> = ({
  className,
  title,
  subTitle,
  data,
}) => {
  const [state, setState] = useState("");
  return (
    <div
      className={`font-medium w-full flex flex-col gap-4 ${className}`}
    >
      <CategoryHeader
        title={title}
        subTitle={subTitle}
        showButton={true}
        buttonText="View All"
      />
      <div className="flex justify-between">
        {data?.map((item: any) => {
          return (
            <div
              className={`border-2  rounded px-12 py-8 cursor-pointer ${state === item.title ? "border-[#DB4444]" : "border-gray-300"}`}
              onClick={() => {
                setState(item.title);
                item.click();
              }}
            >
              <div className="flex justify-center">
                <Image alt="" src={item?.image} height={70} width={70} />
              </div>
              <p className="text-center">{item?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MBrowseByCategory;
