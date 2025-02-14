"use client";

import { useState } from "react";
import Link from "./elements/navigation";
import {
  ArshSvg,
  CatalogSvg,
  GalarySvg,
  HomeSvg,
  InstagramSvg,
  MoreSvg,
  PhoneSvg,
  ProductsSvg,
  TelegramSvg,
  YoutubeSvg,
} from "./icons";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./elements/language-switcher";
import { useParams } from "next/navigation";

export default function BottomNavBar(): React.ReactElement {
  const [active, setActive] = useState("home");
  const locale = useParams().locale as string;

  const t = useTranslations("landing.header");
  const handleActiveChange = (name: string, inx: number) => {
    setActive(name);
  };
  return (
    <div className="fixed bottom-0 w-full bg-[#C3D7FF] shadow-lg md:hidden z-40 px-5 xs:px-16 max-xs:px-8">
      <div className="flex justify-between items-center z-50 transition-all">
        <Link
          href="/catalog"
          className={cn(
            "text-secondary font-medium text-lg max-lg:text-base bottom-nav-bar__item",
            active === "catalog" && "bottom-nav-bar__active"
          )}
          onClick={() => handleActiveChange("catalog", 0)}
        >
          <CatalogSvg />
        </Link>
        <Link
          href="/"
          className={cn(
            "text-secondary font-medium text-lg max-lg:text-base bottom-nav-bar__item",
            active === "gallary" && "bottom-nav-bar__active"
          )}
          onClick={() => handleActiveChange("gallary", 1)}
        >
          <GalarySvg />
        </Link>
        <Link
          href="/#services"
          className={cn(
            "text-secondary font-medium text-lg max-lg:text-base bottom-nav-bar__item",
            active === "home" && "bottom-nav-bar__active"
          )}
          onClick={() => handleActiveChange("home", 2)}
        >
          <HomeSvg />
        </Link>
        <Link
          href="/products"
          className={cn(
            "text-secondary font-medium text-lg max-lg:text-base bottom-nav-bar__item",
            active === "products" && "bottom-nav-bar__active"
          )}
          onClick={() => handleActiveChange("products", 3)}
        >
          <ProductsSvg />
        </Link>
        <Sheet>
          <SheetTrigger className="p-[15px]">
            <MoreSvg />
          </SheetTrigger>
          <SheetContent >
            <SheetHeader className="h-full">
              <SheetTitle className="flex pt-4 justify-between gap-4 items-center">
                <ArshSvg className="w-1/2" />
                <LanguageSwitcher defaultValue={locale}/>
              </SheetTitle>
              <div className="flex flex-col gap-2 !mt-10">
                <Link href="/#about" className="text-left">
                  {t("about")}
                </Link>
                <Link href="/#services" className="text-left">
                  {t("services")}
                </Link>
                <Link href="/#contacts" className="text-left">
                  {t("contacts")}
                </Link>
              </div>
              <div className="flex gap-4 py-4 text-xl font-medium justify-evenly !mt-auto">
                <a
                  href=""
                  className="w-11 h-11 rounded-xl border flex justify-center items-center bg-black"
                >
                  <PhoneSvg />
                </a>
                <a
                  href=""
                  className="w-11 h-11 rounded-xl border flex justify-center items-center bg-black"
                >
                  <TelegramSvg />
                </a>
                <a
                  href=""
                  className="w-11 h-11 rounded-xl border flex justify-center items-center bg-black"
                >
                  <YoutubeSvg />
                </a>
                <a
                  href=""
                  className="w-11 h-11 rounded-xl border flex justify-center items-center bg-black"
                >
                  <InstagramSvg />
                </a>
              </div>
              {/* <div className="flex max-sm:flex-col max-sm:items-baseline justify-between items-center mt-8 max-md:mt-4 max-md:text-sm max-md:mb-20"> */}
                <p className="text-[#898989] ">
                  Copyright © {new Date().getFullYear()} Arshpool
                </p>
              {/* </div> */}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
