import ProductFilter from "./product-filter";
import ProductCard from "./product-card";
import { ProductListType } from "@/types/product";
import { useTranslations } from "next-intl";

export default function ProductFilterGrid({
  data,
  locale,
}: {
  data: ProductListType[];
  locale: "uz" | "ru";
}): React.JSX.Element {
  const t = useTranslations("store.productsList");
  return (
    <div className="container flex max-md:flex-col gap-10">
      <ProductFilter />
      <div className="w-full">
        <h2 className="my-3 text-3xl font-bold">{t("title")}</h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 max-lg:grid-cols-2 gap-6 max-sm:gap-3">
          {data.map((product, index) => (
            <ProductCard key={index} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
