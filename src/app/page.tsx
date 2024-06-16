"use client";
import MBrowseByCategory from "@/components/BrowseByCategory";
import NavbarComponent from "@/components/Navbar";
import MButton from "@/components/Buttons/MButton";
import Enhance from "@/components/Enhance";
import MInput from "@/components/Input/MInput";
import Service from "@/components/Service";
import Section from "@/components/Section";
import Sidenav from "@/components/SideNav";
import NotificationBar from "@/components/NotificationBar"
import About from "@/components/About/index";
import ProductList from "@/components/ProductList/index";
import Profile from '@/components/Profile/index'
import Footer from '@/components/Footer/index'
import { Provider } from "react-redux";
import Login from "@/components/Login/index"

import { Images } from "@/constants";
import {
  browseByCategory,
  ourProducts,
  thisMonth,
  todays,
} from "@/data/homePage";
import { store } from "./stores";

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
         <Provider store={store}>
          <Login />

      {/* <NavbarComponent /> */}
      
      {/* <NavbarComponent />
      <Profile />
      <ProductList/>
      <About />
      <Footer />
       */}
      {/* <NotificationBar />
      <NavbarComponent />
      <div className="px-24 w-full">
        <div className="flex gap-10 px-10 mb-16"><Sidenav /></div>
        <Section
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
        <Service />
      </div> */}
         </Provider>
    </main>
  );
}