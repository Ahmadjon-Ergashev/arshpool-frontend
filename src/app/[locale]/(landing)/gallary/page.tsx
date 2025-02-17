import React from "react";
import { PageParamsType } from "@/types/page";
import { GallaryType } from "@/types/gallary";
import Image from "next/image";

import GallaryGrid from "@/components/elements/gallary-grid";

export default async function Gallary({
  params,
}: {
  params: PageParamsType;
}): Promise<React.ReactElement> {
  const locale = (await params).locale as "uz" | "ru";
  const slug = (await params).slug;

  const url = process.env.NEXT_PUBLIC_API_URL;
  const data: GallaryType[] = await fetch(
    `${url}/api/v1/landing/projects/?current=${slug ?? ""}`
  ).then((res) => res.json());
  return (
    <main className="max-md:px-3">
      <div className="container flex flex-col gap-4 mb-16">
        {data.map((gallary) => (
          <GallaryGrid key={gallary.id} gallary={gallary} locale={locale} />
        ))}
      </div>
    </main>
  );
}
