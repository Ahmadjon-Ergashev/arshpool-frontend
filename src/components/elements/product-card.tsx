import priceFormatter from "@/lib/formatters";
import { useTranslations } from "next-intl";
import Link from "./navigation";
import { ProductListType } from "@/types/product";
import Image from "next/image";

export default function ProductCard({
  product,
  locale,
}: {
  product: ProductListType;
  locale: "uz" | "ru";
}): React.ReactElement {
  const t = useTranslations("store.productsList");
  return (
    <div className="w-full border border-gray-200 px-5 py-7 rounded-3xl bg-white hover:scale-[102%] duration-200 hover:shadow-2xl hover:shadow-cyan-100">
      <Image
        className="w-full h-48 object-cover mb-3"
        src={product.image}
        alt={product.name_uz}
        width={220}
        height={155}
      />
      <div className="p-1">
        <h3 className="text-lg font-bold mb-1">{product[`name_${locale}`]}</h3>
        <p className="text-lg mb-3">
          {priceFormatter(product.price, true, true, locale)}
        </p>
        <Link
          className="block w-full text-center bg-[#27A6E5] font-bold text-white py-1.5 mt-4 rounded-lg"
          href={{
            pathname: "/products/[id]",
            params: { id: product.id },
          }}
        >
          {t("more")}
        </Link>
      </div>
    </div>
  );
}
