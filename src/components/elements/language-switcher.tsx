"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { useRouter, usePathname, useTranslations } from "next-intl/client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { locales } from "@/i18n/config";
import { DownArrowSvg, LangChangeSvg } from "../icons";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({
  defaultValue,
  className
}: {
  defaultValue: string;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [__, startTransition] = React.useTransition();
  const params = useParams();
  const t = useTranslations("landing.header.languageSwitcher");

  function onChange(value: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value }
      );
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn("bg-gradient-to-t from-[#F6FAFF] to-[#D6E6FF] text-secondary text-base h-auto rounded-xl shadow-md max-md:text-sm max-md:h-fit", className)}>
          <LangChangeSvg className="!h-6 !w-6 max-md:hidden" />
          {t(defaultValue)} <DownArrowSvg />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("changeLanguage")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={defaultValue} onValueChange={onChange}>
          {locales.map((locale) => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              {t(locale)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
