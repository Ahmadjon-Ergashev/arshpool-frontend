import { useTranslations } from "next-intl";
import { AddressSvg } from "./icons";

export default function Addresses(): React.ReactElement {
  const t = useTranslations("landing.addresses");
  return (
    <div className="container mt-16">
      <h2 className="xl:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl font-bold text-center">{t("title")}</h2>
      <div className="w-full mt-10 rounded-4xl bg-[#E8F4F7] p-10 max-sm:p-3">
        <iframe
          src="https://api-maps.yandex.ru/frame/v1/-/CHasyA2H?"
          className="w-full xl:h-96 md:h-80 max-md:h-72 rounded-4xl max-md:rounded-2xl"
        />
        <h3 className="xl:text-2xl md:text-lg max-sm:text-base font-medium text-center mt-5 flex items-center justify-center gap-2">
          <AddressSvg />
          {t("description")}
        </h3>
      </div>
    </div>
  );
}
