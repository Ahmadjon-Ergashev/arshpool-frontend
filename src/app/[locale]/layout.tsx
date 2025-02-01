import type { Metadata } from "next";
import localFont from "next/font/local";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

export const metadata: Metadata = {
  title: "Arshpool Building",
  description:
    "Arshpool Building - 10 yillik tarjiba, 200+ muvafaqqiyatli loyihalar, aynan siz istagandek.",
  icons: [
    {
      url: "/icon.png",
      rel: "icon",
      type: "image/png",
      sizes: "any",
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
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
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer></Footer>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
