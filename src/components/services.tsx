import { useTranslations } from "next-intl";
import Image from "next/image";
import services from "public/images/services.png"
import { PhoneSvg } from "./icons";

export default function Services(): React.ReactElement {
  const t = useTranslations("landing.contacts");

  return (
    <div className="container mt-24">
        <h2 className="text-center font-bold text-5xl">{t("title")}</h2>
        <div className="w-full rounded-4xl mt-24 h-[420px] relative bg-gradient-to-br from-[#FFAE00] to-[#FFE3A6] to-60% z-0">
            <Image src={services} alt="services" className="absolute w-1/2 max-lg:w-2/3 max-md:w-5/6 bottom-0 right-0 -z-20" />
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#FFAE00] to-50% to-transparent rounded-4xl -z-10"></div>
            <div className="w-3/5 max-lg:w-full h-full flex flex-col justify-between p-12">
              <span className="bg-white rounded-full px-5 py-2 w-fit">{t("title")}</span>
              <h1 className="text-5xl font-medium">{t("description")}</h1>
              <div className="flex gap-7">
                <a className="flex gap-3 items-center text-black font-medium text-2xl m-" href="tel:/777070707"><PhoneSvg /> 77 707 07 07</a>
                <a className="flex gap-3 items-center text-black font-medium text-2xl" href="tel:/777070707"><PhoneSvg /> 77 717 07 07</a>
              </div>
              <div className="w-full h-16 rounded-full border border-white flex justify-between">
                <input type="text" className="bg-transparent outline-none placeholder-white font-medium text-xl px-8 py-5 w-4/5" placeholder={t("placeholder")}/>
                <button className="bg-white rounded-full w-1/5 text-xl font-medium">{t("submit")}</button>
              </div>
            </div>
        </div>
    </div>
  )
}