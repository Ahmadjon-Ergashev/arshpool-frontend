import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { locales, defaultLocale } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/#services': "/#services",
    '/#contacts': "/#contacts",
    '/#about': "/#about",
    '/products': "/products",
    '/products/[id]': "/products/[id]",
    '/catalog': "/catalog",
    '/catalog/[slug]': "/catalog/[slug]",
    '/category': "/category",
    '/category/[slug]': "/category/[slug]",
  }
});
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
