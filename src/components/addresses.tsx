import { useTranslations } from "next-intl";
import { AddressSvg } from "./icons";

export default function Addresses(): React.ReactElement {
  const t = useTranslations("landing.addresses");
  return (
    <div className="container mt-16">
      <h2 className="text-5xl font-bold text-center">{t("title")}</h2>
      <div className="w-full mt-10 rounded-4xl bg-[#E8F4F7] p-10">
        <iframe
          src="https://api-maps.yandex.ru/frame/v1/-/CHasyA2H?"
          className="w-full h-96 rounded-4xl"
        />
        <h3 className="text-2xl font-medium text-center mt-5 flex items-center justify-center gap-2">
          <AddressSvg />
          {t("description")}
        </h3>
      </div>
    </div>
  );
}
