"use client";
import React, { useState } from "react";
import { Images } from "@/constants";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);

  return (
    <div className="flex mb-20 h-screen w-full">
      <div className="w-1/2 ">
        <Image
          src={Images.SignUpSizeImg}
          width={"100%"}
          height={"100%"}
          style={{ height: "100vh" }}
        />
      </div>
      <div className="flex justify-center  items-center w-1/2">
        {/* <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-full"> */}
        <div className="flex flex-col">
          <span className="text-4xl font-medium leading-7 tracking-wider text-left">
            Log in to Exclusive
          </span>
          <span className="mt-6 font-poppins text-base font-normal leading-6 text-left">
            Enter Your Details Below
          </span>
          <div className="mt-12">
            <InputField
              type={"text"}
              placeholder={"Email or Phone Number"}
              onChange={(e) => setEmail(e.target.value)}
              setTouched={setTouched}
            />
            {email == "" && touched && (
              <div className="text-red-400 text-left text-xs  mt-3">
                Please Enter Mail Id
              </div>
            )}
            <InputField
              type={"password"}
              placeholder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
              setTouched={setTouched}
            />
            {password == "" && touched && (
              <div className="text-red-400 text-left text-xs  mt-3">
                Please Enter Password
              </div>
            )}
          </div>
          {/* <div className="mt-12">
            <Field
              name="email"
              type="text"
              placeholder="Email or Phone Number"
              className="w-full bg-[#ffffff] h-10 p-0 border-b border-black flex items-center mb-4 focus:outline-none"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="w-full bg-[#ffffff] h-10 p-0 border-b border-black flex items-center mb-4 focus:outline-none"
            />
            <ErrorMessage name="password" component="div" />
          </div> */}
          <div className="flex justify-between">
            <Button
              className="px-12 py-6 bg-[#DB4444] rounded-sm text-white"
              type="submit"
            >
              Log in
            </Button>
            <a
              href="#"
              className="flex justify-center items-center rounded-sm bg-white/60 text-[#DB4444]"
            >
              Forget Password?
            </a>
          </div>
        </div>
        {/* </Form>
          )}
        </Formik> */}
      </div>
    </div>
  );
};

export default index;

const InputField = ({ type, placeholder, name, onChange, setTouched }) => (
  <input
    type={type}
    placeholder={placeholder}
    name=""
    onChange={onChange}
    onKeyDown={() => setTouched(true)}
    className="w-full bg-[#ffffff] h-10 p-0 border-b border-black flex items-center mb-4 focus:outline-none"
  />
);

// LoginButton.jsx
const LoginButton = () => (
  <Button className="px-12 py-6 bg-[#DB4444] rounded-sm text-white">
    Log in
  </Button>
);

// ForgetPasswordLink.jsx
const ForgetPasswordLink = () => (
  <a className="flex justify-center items-center rounded-sm bg-white/60 text-[#DB4444]">
    Forget Password?
  </a>
);
