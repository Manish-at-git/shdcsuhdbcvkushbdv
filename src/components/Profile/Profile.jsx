import React from "react";

const Profile = () => {
  const [active, setActive] = React.useState("profile");
  return (
    <div className="flex w-full  mt-6 container mx-auto font-poppins">
      <div className="w-3/12  h-full  top-0">
        <div className="flex flex-col font-medium text-black/60">
          Manage My Account
          <div className="mt-4 flex flex-col gap-2">
            <span
              className={`${
                active == "profile" ? "text-[#DB4444]" : ""
              } ml-8 cursor-pointer font-normal text-base`}
              onClick={() => setActive("profile")}
            >
              My Profile
            </span>
            <span
              className={`${
                active == "address" ? "text-[#DB4444]" : ""
              } ml-8 cursor-pointer font-normal text-base`}
              onClick={() => setActive("address")}
            >
              Address Book
            </span>
            <span
              className={`${
                active == "payment" ? "text-[#DB4444]" : ""
              } ml-8 cursor-pointer font-normal text-base`}
              onClick={() => setActive("payment")}
            >
              My Payment Options
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6 font-medium text-black/60 ">
          My Orders
          <div className="mt-4 flex flex-col gap-2">
            <span className=" ml-8 cursor-pointer font-normal text-base">
              My Returns
            </span>
            <span className=" ml-8 cursor-pointer font-normal text-base">
              My Cancellations
            </span>
          </div>
        </div>
        <div className="mt-6 flex flex-col font-medium text-black/60">
          <span>My WishList</span>
        </div>
      </div>
      <div className=" w-7/12 shadow-custom px-20 rounded-md  py-10">
        <span className="text-[#DB4444]  text-xl font-medium">
          Edit Your Profile
        </span>
        <div className="mt-4 ">
          <div className="flex gap-3 ">
            <div className="w-1/2">
              <label htmlFor="name" className="font-normal text-base">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full bg-[#F5F5F5] h-10 shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5 "
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full h-10  bg-[#F5F5F5] shadow p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5 "
              />
            </div>
          </div>
          <div className="flex gap-3 ">
            <div className="w-1/2">
              <label htmlFor="name" className="font-normal text-base">
                Email
              </label>
              <input
                type="text"
                placeholder="rimel1111@gmail.com"
                className="w-full h-10 shadow  bg-[#F5F5F5] p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5 "
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="name" className="font-normal text-base">
                Address
              </label>
              <input
                type="text"
                placeholder="Kingston, 5236, United State"
                className="w-full h-10 shadow bg-[#F5F5F5] p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5 "
              />
            </div>
          </div>
          <div className="flex flex-col gap-3  ">
            <label htmlFor="name " className="font-normal text-base">
              Password Changes
            </label>
            <div className="">
              <input
                type="text"
                placeholder="Current Passwod"
                className="w-full h-10 shadow bg-[#F5F5F5] p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5 "
              />
              <input
                type="text"
                placeholder="New Passwod"
                className="w-full h-10 shadow bg-[#F5F5F5] p-0 rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5 "
              />
              <input
                type="text"
                placeholder="Confirm New Passwod"
                className="w-full h-10 shadow p-0 bg-[#F5F5F5] rounded border flex items-center mb-4 border-gray-300 px-3 py-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-2.5 "
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button>
              <span className="text-black/60 mr-8">Cancel</span>
            </button>
            <button className="bg-[#DB4444] px-12 py-4 text-white   rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;