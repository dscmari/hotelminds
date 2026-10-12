import { getTranslations } from "next-intl/server";

type ImprintSection = { header: string; lines: string[] };

export default async function Page() {
  const t = await getTranslations("imprint");
  const sections = t.raw("sections") as ImprintSection[];

  return (
    <div className="imprint px-4 md:px-16 lg:px-32 py-32 md:py-48 lg:py-56 xl:py-64">
      <h1 className="">{t("headline")}</h1>
      {sections.map((section) => (
        <section key={section.header}>
          <h2>{section.header}</h2>
          {section.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>
      ))}
    </div>
  );
}