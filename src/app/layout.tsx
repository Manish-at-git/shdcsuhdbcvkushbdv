import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { store } from "./stores";
import NotificationBar from "../components/NotificationBar";
import NavbarComponent from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {children} */}
        <Provider store={store}>
          {/* <NotificationBar />
          <NavbarComponent /> */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
