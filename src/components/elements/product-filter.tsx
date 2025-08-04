"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CategorySvg, HashTagSvg, WalletSvg } from "../icons";
import { Slider } from "../ui/slider";
import { useEffect, useState } from "react";
import priceFormatter from "@/lib/formatters";
import useUpdateSearchParams from "@/hooks/update-search-params";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function ProductFilter() {
  const t = useTranslations("store.productsList.filter");
  const locale = useParams().locale as "uz" | "ru";
  const [price, setPrice] = useState<{ min: number; max: number }>({
    min: 1000,
    max: 100000,
  });
  const { updateSearchParams } = useUpdateSearchParams()

  useEffect(() => {
    const debouncedChangePrice = setTimeout(() => {
        const newParams = {
          min_price: price.min?.toString(),
          max_price: price.max?.toString(),
        };
        updateSearchParams(newParams);

    }, 800);

    return () => clearTimeout(debouncedChangePrice)
  }, [price])

  return (
    <div className="bg-white rounded-4xl p-6 h-fit sticky max-md:static max-md:w-2/3 max-md:max-w-full max-md:mx-auto max-sm:w-full max-sm:max-w-full top-24 max-w-[30%] w-[30%]">
      <Accordion type="multiple">
        <AccordionItem value="category">
          <AccordionTrigger className="">
            <div className="flex items-center gap-2 text-base">
              <CategorySvg className="w-8" />
              {t("category")}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Arshpool Building
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="hashtag">
          <AccordionTrigger className="">
            <div className="flex items-center gap-2 text-base">
              <HashTagSvg className="w-8" />
              {t("tags")}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Arshpool Building
          </AccordionContent>
        </AccordionItem>

        <div>
          <div className="flex items-center gap-2 text-base my-4">
            <WalletSvg className="w-8" />
            {t("priceRange")}
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-3 gap-5">
              <div className="border rounded-xl px-2 py-3 outline-none font-medium text-base">
                {priceFormatter(price.min, false, true, locale)}
              </div>
              <div className="border rounded-xl px-2 py-3 outline-none font-medium text-base">
                {priceFormatter(price.max, false, true, locale)}
              </div>
            </div>
            <Slider
              className="focus-visible:ring-transparent"
              defaultValue={[1000, 100000]}
              value={[price.min, price.max]}
              min={1000}
              max={100000}
              step={500}
              onValueChange={(prices) => {
                setPrice({ min: prices[0], max: prices[1] });
              }}
            />
          </div>
        </div>
      </Accordion>
    </div>
  );
}
