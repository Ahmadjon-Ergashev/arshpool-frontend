import type { Metadata, ResolvingMetadata } from "next";
import localFont from "next/font/local";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { PageParamsType } from "@/types/page";

import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BottomNavBar from "@/components/bottom-nav-bar";

const roobertFont = localFont({
  src: [
    {
      path: "../../../public/fonts/RoobertPRO-Light.woff2",
      weight: "300",
    },
    {
      path: "../../../public/fonts/RoobertPRO-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/RoobertPRO-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../public/fonts/RoobertPRO-Bold.woff2",
      weight: "700",
    },
  ],
});

export async function generateMetadata(
  { params }: { params: PageParamsType },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = (await params).locale;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const title = locale === "uz" ? "Arshpool Building" : "Arshpool Building";
  const desc =
    locale === "uz"
      ? "Arshpool Building - 10 yillik tarjiba, 200+ muvafaqqiyatli loyihalar, aynan siz istagandek"
      : "Arshpool Building – 10 лет опыта, 200+ успешных проектов, именно то, что вы хотите";

  return {
    title: title,
    description: desc,
    icons: [
      {
        url: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    openGraph: {
      images: ["/icon.png", ...previousImages],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: PageParamsType;
}>) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${roobertFont.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <header className=" sticky top-0 z-50 bg-secondary-background">
            <Header />
          </header>
          {children}
          <BottomNavBar />
          <footer>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
