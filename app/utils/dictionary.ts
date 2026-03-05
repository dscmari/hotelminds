const dictionaries = {
  de: () => import("../../data/data.json").then((m) => m.default.de),
  en: () => import("../../data/data.json").then((m) => m.default.en),
};


export const dictionary = async (locale: string) => {
  if (locale === "de" || locale === "en") {
    return dictionaries[locale]();
  }
  return dictionaries.en();
};