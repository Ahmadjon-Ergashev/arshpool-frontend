import Link from "./elements/navigation";
import { ArshSvg, InstagramSvg, PhoneSvg, TelegramSvg, YoutubeSvg } from "./icons";
import { useTranslations } from "next-intl";

export default function Footer(): React.ReactElement {
    const t = useTranslations("landing.footer");

    return (
        <div className="bg-black rounded-t-[100px] max-md:rounded-t-[50px] pt-16 pb-4 mt-10 max-md:hidden">
            <div className="container max-md:px-6">
                <div className="flex flex-wrap justify-between items-center max-md:flex-col max-md:gap-6 max-md:items-baseline">
                    <ArshSvg className="fill-white"/>
                    <div className="max-md:w-full max-md:justify-start max-md:px-0 max-md:gap-6 flex-1 flex justify-evenly px-16 xl:text-xl md:text-base max-md:text-sm">
                        <Link href="/products" className="text-white">{t("products")}</Link>
                        <Link href="/catalog" className="text-white">{t("catalog")}</Link>
                        <Link href="/gallary" className="text-white">{t("gallary")}</Link>
                        <Link href="/" className="text-white">{t("services")}</Link>
                    </div>
                    <div className="flex gap-4 py-4 text-xl font-medium">
                        <a href="tel:+998996044444" className="w-11 h-11 rounded-xl border border-white flex justify-center items-center"><PhoneSvg /></a>
                        <a href="https://t.me/arshpooluz" className="w-11 h-11 rounded-xl border border-white flex justify-center items-center"><TelegramSvg /></a>
                        <a href="" className="w-11 h-11 rounded-xl border border-white flex justify-center items-center"><YoutubeSvg /></a>
                        <a href="https://www.instagram.com/arshpool_uz/" className="w-11 h-11 rounded-xl border border-white flex justify-center items-center"><InstagramSvg /></a>
                    </div>
                </div>
                <hr className="mt-10 max-md:mt-5 border-[#898989]"/>
                <div className="flex max-sm:flex-col max-sm:items-baseline justify-between items-center mt-8 max-md:mt-4 max-md:text-sm">
                    <p className="text-[#898989]">Copyright © {new Date().getFullYear()} Arshpool</p>
                    <p className="text-[#898989]">{t("copyright")}</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}