import { ProductDetailType } from "@/types/product";
import { useTranslations } from "next-intl";
export default function ProductDetail({
  product,
  locale,
}: {
  product: ProductDetailType;
  locale: "uz" | "ru";
}): React.ReactElement {
  const t = useTranslations("store.productDetail");
  return (
    <div className="w-[calc(50%-3.5rem)] max-lg:w-full mb-20">
      <span className="uppercase text-xl text-[#989898] mb-1.5">
        {t("name")}
      </span>
      <h1 className="text-3xl font-bold mb-7">{product[`name_${locale}`]}</h1>
      <span className="uppercase text-xl text-[#989898] mb-1.5">
        {t("desc")}
      </span>
      <p className="font-medium text-lg mb-7 text-justify leading-6">
        {product[`description_${locale}`]}
      </p>
      <span className="uppercase text-xl text-[#989898] mb-1.5">
        {t("price")}
      </span>
      <p className="font-bold text-3xl mb-7">{product.price}</p>
      <a
        href="#"
        className="block w-1/2 max-md:w-full py-3 text-center bg-[#27A6E5] text-white font-bold rounded-xl text-xl"
      >
        {t("order")}
      </a>
    </div>
  );
}
