import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit text-2xl">Mitologias</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            className=" text-lg text-black duration-500 cursor-pointer transition-opacity hover:opacity-65"
            href="#aztec"
            title="Aztec"
          >
            Asteca
          </Link>
          <Link
            className="text-lg text-black duration-500 cursor-pointer transition-opacity hover:opacity-65"
            href="#inca"
            title="Inca"
          >
            Inca
          </Link>
          <Link
            className="text-lg text-black duration-500 cursor-pointer transition-opacity hover:opacity-65"
            href="#mayan"
            title="Mayan"
          >
            Maia
          </Link>
          <Link
            className="text-lg text-black duration-500 cursor-pointer transition-opacity hover:opacity-65"
            href="#greek"
            title="Greek"
          >
            Grega
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={"foreground"}
                href={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
