import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import MInput from "../Input/MInput";

export default function NavbarComponent() {
  const router = usePathname();
  const menu = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "About",
      link: "/about",
    },
  ];

  return (
    <Navbar className="border w-full">
      <NavbarBrand>
        <p className="text-[24px] font-semibold text-inherit">Exclusive</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menu.map((item) => {
          if (item.text == "Sign Up" ) {
            return (
              <NavbarItem>
                <Button as={Link} color="primary" href={item.link} variant="flat">
                  {item.text}
                </Button>
              </NavbarItem>
            );
          }
          return (
            <NavbarItem>
              <Link
                color={router.pathname === item.path ? "foreground" : ""}
                href={item.link}
              >
                {item.text}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <MInput placeholder="input" change={() => {}} />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
