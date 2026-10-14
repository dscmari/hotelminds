import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { locale } from "next/root-params";
 

export async function createMeta(
  namespace: string, 
  path: string = ""
): Promise<Metadata> {
  const t = await getTranslations(namespace);
  const currentLocale = await locale();
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const normalizedPath = cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${ currentLocale }/`,
      languages: {
        de: `/de${normalizedPath}`,
        en: `/en${normalizedPath}`,
        "x-default": `/en${normalizedPath}`,
      },
    },
  };
}