import React from "react";
import Link from "@/components/elements/navigation";
import ProductCard from "@/components/elements/product-card";
import { CategoryType } from "@/types/product";

export default async function Catalog({ params }: { params: Promise<{ slug: string, locale: "uz" | "ru" }> }) {
  const { locale } = await params;
  const { slug } = await params;

  const title = locale === "uz" ? "Mahsulotlar" : "Товары";

  const url = process.env.NEXT_PUBLIC_API_URL;
  const data: CategoryType = await fetch(
    `${url}/api/v1/product/category/${slug}`
  ).then((res) => res.json());
  return (
    <main className="max-md:px-3">
      <div className="container">
        <div
          className="rounded-4xl max-md:rounded-2xl bg-cover bg-bottom bg-no-repeat h-96 max-md:h-48"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <h1 className="w-full h-full flex flex-col justify-end p-8 max-md:p-4 text-white bg-gradient-to-b from-transparent to-[#000000be] from-60% rounded-4xl max-md:rounded-2xl xl:text-4xl md:text-3xl max-md:text-2xl">
            {data[`name_${locale}`]}
          </h1>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-8 max-md:gap-4 mt-10 max-md:mt-6">
          {data.childrens?.map((category) => (
            <Link
              href={{
                pathname: "/catalog/[slug]",
                params: { slug: category.id },
              }}
              key={category.id}
              className="flex-1"
            >
              <div
                style={{ backgroundImage: `url(${category.image})` }}
                className="bg-cover bg-center bg-no-repeat rounded-4xl max-md:rounded-2xl h-36 max-md:h-28"
              >
                <h2 className="w-full h-full flex flex-col justify-center items-end xl:text-3xl md:text-2xl max-md:text-xl text-white bg-gradient-to-r from-transparent to-[#000000be] from-30% rounded-4xl max-md:rounded-2xl p-8 max-md:p-4">
                  {category[`name_${locale}`]}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center mt-10 max-md:mt-8">{title}</h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-6 gap-6 mt-4">
          {data.products?.map((product, index) => (
            <ProductCard key={index} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </main>
  );
}
