import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations("team")

  return (
    <div className="px-4 md:px-16 lg:px-32 pt-32 lg:pt-48 min-h-screen flex flex-col justify-center bg-linear-to-br from-[var(--color-offwhite)] via-[var(--color-offwhite)] to-[var(--color-gold)]">
      <section className="xl:mx-auto">
      <h1 className="max-w-4xl dark:!text-charcoalDark">{t("headline")}</h1>
      <div className="flex items-center gap-4 pt-4">
        <Image src={"/icons/broom.png"} alt="Broom Icon" width={50} height={50}  />
           <p className="dark:!text-charcoalDark">{t("intro")}</p>
      </div>
   
        <p className="pt-4 dark:!text-charcoalDark">{t("outro")}</p>
      </section>

    </div>
  );
}
