import Link from "./elements/navigation";
import { ArshSvg, InstagramSvg, PhoneSvg, TelegramSvg, YoutubeSvg } from "./icons";
import { useTranslations } from "next-intl";

export default function Footer(): React.ReactElement {
    const t = useTranslations("landing.footer");

    return (
        <div className="h-[300px] bg-black rounded-t-[100px] py-14 mt-10">
            <div className="container">
                <div className="flex justify-between items-center max-sm:flex-col">
                    <ArshSvg className="fill-white"/>
                    <div className="flex-1 flex justify-evenly px-16">
                        <Link href="/" className="text-white">{t("home")}</Link>
                        <Link href="/products" className="text-white">{t("products")}</Link>
                        <Link href="/" className="text-white">{t("services")}</Link>
                    </div>
                    <div className="flex gap-4 text-xl font-medium">
                        <a href="" className="w-11 h-11 rounded-xl border border-white flex justify-center items-center"><PhoneSvg /></a>
                        <a href="" className="w-11 h-11 rounded-xl border border-white flex justify-center items-center"><TelegramSvg /></a>
                        <a href="" className="w-11 h-11 rounded-xl border border-white flex justify-center items-center"><YoutubeSvg /></a>
                        <a href="" className="w-11 h-11 rounded-xl border border-white flex justify-center items-center"><InstagramSvg /></a>
                    </div>
                </div>
                <hr className="mt-10 border-[#898989]"/>
                <div className="flex justify-between items-center mt-8">
                    <p className="text-[#898989]">Copyright © {new Date().getFullYear()} Arshpool</p>
                    <p className="text-[#898989]">{t("copyright")}</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}