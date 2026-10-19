import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  pathnames: {
    "/": "/",
    "/pre-opening": {de: "/pre-opening/", en: "/pre-opening/"},
    "/existing-hotel-performance": {de: "/bestehende-hotels/", en: "/existing-hotel-performance/"},
    "/about": {de: "/about/", en: "/about/"},
    "/contact": {de: "/kontakt/", en: "/contact/"},
    "/imprint": { de: "/impressum/", en: "/imprint/" },
    "/privacy": { de: "/datenschutz/", en: "/privacy/" },
  },
});