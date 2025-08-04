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
    <div className="w-full flex flex-col border border-gray-200 pb-5 rounded-3xl bg-white hover:scale-[102%] duration-200 hover:shadow-2xl hover:shadow-cyan-100">
      <Image
        className="w-full h-48 object-cover mb-3 rounded-t-3xl"
        src={product.image}
        alt={product.name_uz}
        width={220}
        height={155}
      />
      <div className="p-1 flex flex-col h-full px-5">
        <h3 className="text-lg font-bold mb-1 line-clamp-2">{product[`name_${locale}`]}</h3>
        <p className="text-lg mb-3 mt-auto">
          {priceFormatter(product.price, true, true, locale)}
        </p>
        <Link
          className="block w-full text-center bg-[#27A6E5] font-bold text-white py-1.5 rounded-lg"
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
