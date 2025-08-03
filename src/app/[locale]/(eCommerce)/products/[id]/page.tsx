import ProductDetail from "@/components/elements/product-detail";
import ProductSlider from "@/components/elements/product-slider";
import { ProductDetailType } from "@/types/product";
import { Metadata, ResolvingMetadata } from "next";

const url = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata(
  { params }: { params: Promise<{ id: string, locale: "uz" | "ru" }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = (await params).locale
  const id = (await params).id

  // fetch data
  const data: ProductDetailType = await fetch(
    `${url}/api/v1/product/products/${id}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: data[`name_${locale}`],
    description: data[`description_${locale}`],
    openGraph: {
      images: data.images.map((image) => image.source),
    },
  }
}

export default async function Product({
  params,
}: {
  params: Promise<{ id: string, locale: "uz" | "ru" }>;
}): Promise<React.ReactElement> {

  const id = (await params).id;
  const data: ProductDetailType = await fetch(
    `${url}/api/v1/product/products/${id}`
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
