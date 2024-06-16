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


{myAccountMenus?.length > 0 &&
  myAccountMenus.map((menu, index) => {
    return (
      <div className="flex flex-col mb-4 font-medium text-black/60">
        {menu.MainHeading}
        <div className="mt-4 flex flex-col gap-2">
          {menu.subMenu.map((subMenu, underIndex) => {
            return (
              <span
                className={`${
                  subMenu.active ? "text-[#DB4444]" : ""
                } ml-8 cursor-pointer font-normal text-base`}
                onClick={() =>
                  setMyAccountMenus((prev) => {
                    let updatedMenu = JSON.parse(JSON.stringify(prev)); // Create a deep copy of the state
                    updatedMenu = updatedMenu.map((menu) => {
                      menu.subMenu = menu.subMenu.map((sub) => {
                        if (sub.title === subMenu.title) {
                          sub.active = true;
                        } else {
                          sub.active = false;
                        }
                        return sub;
                      });
                      return menu;
                    });
                    return updatedMenu;
                  })
                }
              >
                {subMenu.title}
              </span>
            );
          })}
        </div>
      </div>
    );
  })}