import { getTranslations } from "next-intl/server";
 

export async function createMeta(
  tMeta : string
) {

  const t = await getTranslations(tMeta);
  const path = t("alternates")

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${ path }`,
    },
  };
}