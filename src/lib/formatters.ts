export default function priceFormatter(
  price: number,
  isUSD: boolean = true,
  withType: boolean = true,
  locale: "uz" | "ru" = "uz"
) {
  const uzs = locale === "uz" ? "so'm" : "сум";
  const priceType = isUSD ? "$" : uzs;
  const roundedPrice = isUSD
    ? Math.round(price * 10) / 10
    : Math.round(price / 1000) * 1000;
  const priceString = new Intl.NumberFormat(locale, {
    style: "decimal",
  })
    .format(roundedPrice)
    .replace(/\,/g, " ");
  if (withType) {
    return isUSD
      ? `${priceType}${priceString}`
      : `${priceString} ${priceType}`;
  }
  return `${priceString}`;
}
