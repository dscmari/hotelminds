import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  pathnames: {
    "/": "/",
    "/pre-opening": {de: "/pre-opening/", en: "/pre-opening/"},
    "/existing-hotel-performance": {de: "/bestehende-hotels/", en: "/existing-hotel-performance/"},
    "/about": {de: "/about/", en: "/about/"},
    "/team": {de: "/team/", en: "/team/"},
    "/imprint": { de: "/impressum/", en: "/imprint/" },
    "/privacy": { de: "/datenschutz/", en: "/privacy/" },
    "/terms": {de: "/agb/", en: "/terms/"},
  },
});