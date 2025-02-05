import { ProductListType } from "@/types/product";
import ProductFilterGrid from "@/components/elements/product-filter-grid";
import { PageParamsType } from "@/types/page";


export default async function Products({ params, searchParams }: { params: PageParamsType, searchParams: URLSearchParams }) {
  const locale = (await params).locale;
  const search = new URLSearchParams(await searchParams)
  
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
