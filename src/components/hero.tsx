"use client";

import React from "react";
import Image from "next/image";
import poolBackground from "public/images/pool-background.png";
import heroBackground from "public/images/hero-background.png";
import saunaBackground from "public/images/sauna-background.png";
import turkishBathBackground from "public/images/turkish-bath-background.png";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { LinkArrowSvg } from "./icons";

export default function Hero(): React.ReactElement {
  const t = useTranslations("landing.hero");

  return (
    <>
      <div
        className="container flex flex-col items-center justify-center relative 
                    h-[512px] text-white px-36 mt-4 bg-gradient-to-b 
                    from-transparent to-[#00000050] rounded-[40px]"
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-[512px] absolute top-0 left-0 -z-10 object-cover rounded-[40px]"
        >
          <source src="/images/pool-background-video.mp4" type="video/mp4" />
          <Image
            src={heroBackground}
            alt="Arshpool Building"
            objectFit="cover"
            className="w-full absolute left-0 top-0 -z-10"
          />
        </video>
        <h1 className="text-6xl font-bold text-center uppercase">
          {t("title")}
        </h1>
        <p className="text-lg text-gray-400 mt-3">{t("description")}</p>
      </div>
      <Services />
    </>
  );
}

function Services(): React.ReactElement {
  const t = useTranslations("landing.hero.services");
  return (
    <div className="container mt-8 flex gap-8 items-center justify-center h-[450px]">
      <ServiceItem
        title={t("pool")}
        label={t("title")}
        image={poolBackground}
      />
      <ServiceItem
        title={t("sauna")}
        label={t("title")}
        image={saunaBackground}
      />
      <ServiceItem
        title={t("hammam")}
        label={t("title")}
        image={turkishBathBackground}
      />
    </div>
  );
}

function ServiceItem({ label, title, image }: any): React.ReactElement {
  return (
    <div className="w-1/3 rounded-4xl relative h-full group overflow-hidden">
      <Image
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover rounded-4xl group-hover:scale-110 transition-transform duration-300"
        src={image}
        alt="services"
      />
      <div className="flex flex-col justify-between h-full bg-gradient-to-b from-transparent to-[#00000065]">
        <div className="flex justify-between items-center p-5">
          <span className="bg-white px-7 py-3 rounded-full h-fit">{label}</span>
          <Button className="bg-white text-black rounded-full w-16 h-16"><LinkArrowSvg /></Button>
        </div>
        <h2 className="text-white font-medium text-4xl px-10 py-8">{title}</h2>
      </div>
    </div>
  );
}
