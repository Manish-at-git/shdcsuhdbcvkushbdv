import React from "react";
import CategoryHeader from "../CategoryHeader";
import MCard from "../Card/MCard";

const Section = ({ title, subTitle, buttonText, data }) => {
  return (
    <div className="w-full px-10">
      <CategoryHeader
        title={title}
        subTitle={subTitle}
        showButton={true}
        buttonText={buttonText}
      />
      <div className="flex justify-between">
        {data.map((item) => {
          return <MCard className="" data={item} />;
        })}
      </div>
    </div>
  );
};

export default Section;
