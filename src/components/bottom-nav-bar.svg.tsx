"use client";

import { Children, useEffect, useRef, useState } from "react";
import Link from "./elements/navigation";
import { CatalogSvg, GalarySvg, HomeSvg, MoreSvg, ProductsSvg } from "./icons";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function BottomNavBar(): React.ReactElement {
  const [active, setActive] = useState("home");
  const [childWidth, setChildWidth] = useState(0);
  const [maskCenter, setMaskCenter] = useState(0);
  const constainer = useRef<HTMLDivElement>(null);

  const svgMask = `<svg width="0" height="0">
        <defs>
            <mask id="dynamicMask">
                <rect
                    width="${constainer.current?.clientWidth ?? 400}"
                    height="100"
                    fill="white"
                />
                <rect
                    width="${constainer.current?.clientWidth ?? 400}"
                    height="40"
                    fill="black"
                />
                <circle cx="${maskCenter}" cy="30" r="40" fill="black" />
                <circle cx="${maskCenter}" cy="30" r="30" fill="white" />
            </mask>
        </defs>
    </svg>
  `;
  const encodedSVG = `data:image/svg+xml,${
    svgMask
      .replace(/"/g, "'") // Çift tırnakları tek tırnak yap
      .replace(/#/g, "%23") // Renk kodlarını encode et
      .replace(/</g, "%3C") // Açılış taglerini encode et
      .replace(/>/g, "%3E") // Kapanış taglerini encode et
    //   .replace(/\s+/g, " ") // Boşlukları optimize et
  }`;
  const uri = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0' height='0'%3E%3Cdefs%3E%3Cmask id='dynamicMask'%3E%3Crect width='400' height='100' fill='white' /%3E%3Crect width='400' height='40' fill='black' /%3E%3Ccircle cx='200' cy='30' r='40' fill='black' /%3E%3Ccircle cx='200' cy='30' r='30' fill='white' /%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E"
  // data:image/svg+xml, <svg width='0' height='0'> <rect width=400 height='100' fill='white' /%3E %3Crect width=400 height='40' fill='black' /%3E %3Ccircle cx=200 cy='30' r='40' fill='black' /%3E %3Ccircle cx=200 cy='30' r='30' fill='white' /%3E %3C/svg%3E
  useEffect(() => {
    setChildWidth(constainer.current?.children[1].clientWidth ?? 400);
    setMaskCenter((constainer.current?.clientWidth ?? 400) / 2);
  }, [constainer.current?.clientWidth]);

  const handleActiveChange = (name: string, inx: number) => {
    setActive(name);
    setMaskCenter(
      30 +
        60 * inx +
        ((childWidth - 300) / 4) * inx +
        ((constainer.current?.clientWidth ?? 400) - childWidth) / 2
    );
  };
  return (
    <div
      className="fixed bottom-0 w-full bg-[#C3D7FF] shadow-lg md:hidden z-40 px-5 xs:px-16 max-xs:px-8 h-[100px]"
      style={{
        maskImage: `url("#dynamicMask")`,
        WebkitMaskImage: `url("#dynamicMask")`,
      }}
      ref={constainer}
    >
      <svg width="0" height="0" className="transition-all">
        <defs>
          <mask id="dynamicMask">
            <rect
              width={constainer.current?.clientWidth ?? 400}
              height="100"
              fill="white"
            />
            <rect
              width={constainer.current?.clientWidth ?? 400}
              height="40"
              fill="black"
            />
            <circle cx={maskCenter} cy="30" r="40" fill="black" />
            <circle cx={maskCenter} cy="30" r="30" fill="white" />
          </mask>
        </defs>
      </svg>
      <div className="flex justify-between items-center z-50 translate-y-[40px] transition-all">
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
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <img src={encodedSVG} alt="" />
    </div>
  );
}
