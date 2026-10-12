import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  pathnames: {
    "/": "/",
    "/about": {de: "/about", en: "/about"},
    "/contact": {de: "/kontakt", en: "/contact"},
    "/imprint": { de: "/impressum", en: "/imprint" },
    "/datenschutz": { de: "/datenschutz", en: "/privacy" },
  },
});