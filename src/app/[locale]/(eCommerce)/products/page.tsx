import { ProductListType } from "@/types/product";
import ProductFilterGrid from "@/components/elements/product-filter-grid";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: "uz" | "ru" }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = (await params).locale

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  const title = locale === "uz" ? "Arshpool barcha mahsulotlari" : "Все товары Arshpool"
  const desc = locale === "uz" ? "Arshpool barcha mahsulotlari" : "Все товары Arshpool"

  return {
    title: title,
    description: desc,
    openGraph: {
      images: ['/icon.png', ...previousImages],
    },
  }
}

export default async function Products({ params, searchParams }: { params: Promise<{ locale: "uz" | "ru" }>, searchParams: Promise<Record<string, string>> }) {
  const locale = (await params).locale;
  const search = new URLSearchParams(await searchParams);

  const url = process.env.NEXT_PUBLIC_API_URL;
  const data: ProductListType[] = await fetch(`${url}/api/v1/product/products/?${search.toString()}`).then(
    (res) => res.json()
  );
  return (
    <main className="max-md:px-3">
      <ProductFilterGrid data={data} locale={locale} />
    </main>
  );
}
