import { useTranslations } from "next-intl";
import Image from "next/image";
import services from "public/images/services.png"
import { PhoneSvg } from "./icons";

export default function Services(): React.ReactElement {
  const t = useTranslations("landing.contacts");

  return (
    <div className="container mt-24" id="contacts">
        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl max-md:text-2xl text-center font-bold max-md:hidden">{t("title")}</h2>
        <div className="w-full rounded-4xl mt-24 max-md:mt-10 h-[420px] max-xxs:h-[280px] max-xs:h-[300px] relative bg-gradient-to-br from-[#FFAE00] to-[#FFE3A6] to-60% z-0">
            <Image src={services} alt="services" className="absolute w-1/2 max-lg:w-2/3 max-md:w-5/6 max-xs:w-11/12 md:bottom-0 right-0 max-xxs:bottom-1/2 xxs:bottom-[15%] xs:bottom-[30%] -z-20" />
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#FFAE00] max-md:from-30% max-md:to-100% to-50% to-transparent rounded-4xl -z-10"></div>
            <div className="w-3/5 max-lg:w-full h-full flex flex-col justify-between max-sm:justify-end max-sm:gap-3 p-12 max-md:p-6">
              <span className="bg-white rounded-full px-5 py-2 w-fit max-sm:hidden">{t("title")}</span>
              <h1 className="xl:text-5xl lg:text-4xl xs:text-3xl max-xs:text-2xl font-medium">{t("description")}</h1>
              <div className="flex gap-7 max-sm:justify-between max-sm:gap-0">
                <a className="flex gap-3 items-center text-black font-medium text-2xl max-sm:text-base" href="tel:/777070707"><PhoneSvg /> 77 707 07 07</a>
                <a className="flex gap-3 items-center text-black font-medium text-2xl max-sm:text-base" href="tel:/777070707"><PhoneSvg /> 77 717 07 07</a>
              </div>
              <div className="w-full h-16 max-sm:h-8 rounded-full border border-white flex justify-between items-center">
                <input type="text" className="bg-transparent outline-none placeholder-white font-medium text-xl max-sm:text-sm flex-1 pl-4" placeholder={t("placeholder")}/>
                <button className="bg-white rounded-full w-1/5 max-sm:w-1/4 h-full text-xl max-sm:text-xs font-medium">{t("submit")}</button>
              </div>
            </div>
        </div>
    </div>
  )
}