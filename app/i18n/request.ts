import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const load = async (locale: string, name: string) =>
  (await import(`../../data/${locale}/${name}.json`)).default;

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue;
    } else {
      notFound();
    }
  }

  const [components, home, preOpening, existingHotelPerformance, about, contact, imprint, privacy] = await Promise.all([
    load(locale, "components"),
    load(locale, "home"),
    load(locale, "preOpening"),
    load(locale, "existingHotelPerformance"),
    load(locale, "about"),
    load(locale, "contact"),
    load(locale, "imprint"),
    load(locale, "privacy")
  ]);

  return {
    locale,
    messages: { components, home, about, contact, imprint, preOpening, existingHotelPerformance, privacy },
  };
});
