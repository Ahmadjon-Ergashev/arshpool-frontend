import ProductDetail from "@/components/elements/product-detail";
import ProductSlider from "@/components/elements/product-slider";
import { PageParamsType } from "@/types/page";
import { ProductDetailType } from "@/types/product";

export default async function Product({
  params,
}: {
  params: PageParamsType;
}): Promise<React.ReactElement> {
  const url = process.env.BASE_URL;
  const id = (await params).id;
  const data: ProductDetailType = await fetch(
    `${url}/api/v1/products/${id}`
  ).then((res) => res.json());

  return (
    <main className="max-md:px-3">
      <div className="container flex max-lg:flex-col max-md:gap-10 md:gap-3 lg:gap-8 xl:gap-10 2xl:gap-14">
        <ProductSlider images={data.images} />
        <ProductDetail product={data} locale={(await params).locale} />
      </div>
    </main>
  );
}
