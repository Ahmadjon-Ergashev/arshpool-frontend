"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import poolBackground from "public/images/pool-background.png";
import heroBackground from "public/images/hero-background.png";
import saunaBackground from "public/images/sauna-background.png";
import turkishBathBackground from "public/images/turkish-bath-background.png";
import fountainBackground from "public/images/fountain-background.png";
import seltyRoomBackground from "public/images/selty-room-background.png";
import snowyRoomBackground from "public/images/snowy-room-background.png";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { LinkArrowSvg } from "./icons";
import { cn } from "@/lib/utils";

export default function Hero(): React.ReactElement {
  const t = useTranslations("landing.hero");

  return (
    <>
      <div
        className="container flex flex-col items-center justify-center relative 
                    text-white px-36 max-md:px-4 xl:py-44 md:py-36 sm:py-24 max-sm:py-14 mt-4 bg-gradient-to-b 
                    from-transparent to-[#00000050] rounded-4xl max-md:rounded-2xl"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full absolute top-0 left-0 -z-10 object-cover rounded-4xl max-md:rounded-2xl"
        >
          <source src="/images/pool-background-video.mp4" type="video/mp4" />
          <Image
            src={heroBackground}
            alt="Arshpool Building"
            objectFit="cover"
            className="w-full absolute left-0 top-0 -z-10"
          />
        </video>
        <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl max-sm:text-xl font-bold text-center uppercase">
          {t("title")}
        </h1>
        <p className="text-lg max-md:text-sm text-gray-400 mt-3">
          {t("description")}
        </p>
      </div>
      <Services />
    </>
  );
}

function Services(): React.ReactElement {
  const t = useTranslations("landing.hero.services");
  return (
    <div className="container mt-8 grid xl:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-4 sm:gap-8 sm:grid-cols-2 " id="services">
      <ServiceItem
        title={t("pool")}
        label={t("title")}
        className=""
        image={poolBackground}
      />
      <ServiceItem
        title={t("sauna")}
        label={t("title")}
        className=""
        image={saunaBackground}
      />
      <ServiceItem
        title={t("hammam")}
        label={t("title")}
        className=""
        image={turkishBathBackground}
      />
      <ServiceItem
        title={t("fountain")}
        label={t("title")}
        className=""
        image={fountainBackground}
      />
      <ServiceItem
        title={t("seltyRoom")}
        label={t("title")}
        className=""
        image={seltyRoomBackground}
      />
      <ServiceItem
        title={t("snowyRoom")}
        label={t("title")}
        className=""
        image={snowyRoomBackground}
      />
    </div>
  );
}

function ServiceItem({
  label,
  title,
  image,
  className,
}: {
  label: string;
  title: string;
  image: StaticImageData | string;
  className?: string;
}): React.ReactElement {
  return (
    <div
      className={cn(
        "w-full box-border rounded-4xl max-md:rounded-2xl relative group overflow-hidden xl:h-[450px] lg:h-[350px] md:h-[250px] sm:h-[200px] max-sm:h-[150px]",
        className
      )}
    >
      <Image
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover group-hover:scale-110 transition-transform duration-300"
        src={image}
        alt="services"
      />
      <div className="flex flex-col justify-between h-full bg-gradient-to-b from-transparent to-[#00000065]">
        <div className="flex justify-between items-center max-sm:p-3 sm:p-4 md:p-5">
          <span className="bg-white px-7 py-3 max-md:px-2 max-md:py-1 max-md:text-xs rounded-full h-fit">{label}</span>
          <Button className="bg-white text-black rounded-full w-16 h-16 max-md:w-10 max-md:h-10">
            <LinkArrowSvg />
          </Button>
        </div>
        <h2 className="text-white font-medium max-sm:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-md:px-4 max-md:py-3 md:px-10 md:py-8 ">{title}</h2>
      </div>
    </div>
  );
}
