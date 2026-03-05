
export interface PageParams {
  params: Promise<{
    locale: "en" | "de"; // Achte darauf, ob dein Ordner [lang] oder [locale] heißt!
  }>;
}