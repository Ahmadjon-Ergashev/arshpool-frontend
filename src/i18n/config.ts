export type Locale = (typeof locales)[number];

export const locales = ['ru', 'uz'] as const;
export const defaultLocale: Locale = 'uz';
