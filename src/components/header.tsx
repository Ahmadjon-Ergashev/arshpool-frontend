import { ArshSvg } from "./icons";
import Link from "@/components/elements/navigation";
import LanguageSwitcher from "./elements/language-switcher";
import { useLocale, useTranslations } from "next-intl";

export default function Header(): React.JSX.Element {
  const locale = useLocale();
  const t = useTranslations("landing.header");

  const headerItemClassName = "text-secondary font-medium text-lg";

  return (
    <div className="container flex py-8 justify-between items-center max-md:hidden">
      <Link href="/">
        <ArshSvg />
      </Link>
      <div className="flex justify-evenly w-[45%] items-center">
        <Link href="/" className={headerItemClassName}>
          {t("home")}
        </Link>
        <Link href="/#about" className={headerItemClassName}>
          {t("about")}
        </Link>
        <Link href="/#services" className={headerItemClassName}>
          {t("services")}
        </Link>
        <Link href="/#contacts" className={headerItemClassName}>
          {t("contacts")}
        </Link>
      </div>
      <LanguageSwitcher defaultValue={locale} />
    </div>
  );
}
