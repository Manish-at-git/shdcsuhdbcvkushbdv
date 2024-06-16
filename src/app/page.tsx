"use client";

import MBrowseByCategory from "@/components/BrowseByCategory";
import NavbarComponent from "@/components/Navbar";
import MButton from "@/components/Buttons/MButton";
import Enhance from "@/components/Enhance";
import MInput from "@/components/Input/MInput";
import Service from "@/components/Service";
import Section from "@/components/Section";
import SectionSlider from "@/components/SectionSlider";
import Sidenav from "@/components/SideNav";
import NotificationBar from "@/components/NotificationBar";
import NewArrival from "@/components/NewArrival";
import BannerSlider from "@/components/BannerSlider";

import { Images } from "@/constants";
import {
  browseByCategory,
  ourProducts,
  thisMonth,
  todays,
} from "@/data/homePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <MButton title="View All Products" click={() => {}} />
      <MInput placeholder="input" change={() => {}} />
      <MCard className="" data={data} />
      <MBrowseByCategory
        className=""
        title="Browse By Category"
        subTitle="Categories"
        data={browseByCategory}
      />
      <div className="px-10 w-full"><Enhance /></div>
      <Service /> */}
      {/* <NavbarComponent /> */}
      {/* <NavbarComponent /> */}
      <NotificationBar />
      <NavbarComponent />
      <div className="px-24 w-full">
        <div className="flex gap-10 px-10 mb-16">
          <Sidenav />
          <BannerSlider
            list={[
              { name: "phone", img: Images.banner1 },
              { name: "phone", img: Images.banner1 },
              { name: "phone", img: Images.banner1 },
              { name: "phone", img: Images.banner1 },
              { name: "phone", img: Images.banner1 },
            ]}
          />
        </div>
        <SectionSlider
          title="Flash Sale"
          subTitle="Today's"
          buttonText="View More"
          data={todays}
        />
        
        <hr className="border" />
        <div className="!px-10 !py-6 my-10 w-full ">
          <MBrowseByCategory
            className=""
            title="Browse By Category"
            subTitle="Categories"
            data={browseByCategory}
          />
        </div>
        <Section
          title="Best Selling Products"
          subTitle="This Month"
          buttonText="View More"
          data={thisMonth}
        />
        <div className="px-10 w-full my-16">
          <Enhance />
        </div>
        <Section
          title="Explore Our Products"
          subTitle="Our Products"
          buttonText="View More"
          data={ourProducts}
          // isMinimalCard={true}
        />
        <NewArrival
          title="New Arrival"
          subTitle="Featured"
          showButton={false}
          buttonText=""
        />
        <hr className="my-3" />
        <Service />
      </div>
    </main>
  );
}
