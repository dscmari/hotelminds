import { getTranslations } from "next-intl/server";

type TermSection = {
  section: number;
  title: string;
  clauses: string[];
};

export default async function TermsPage() {
  const t = await getTranslations("terms");
  const companyInfo = t.raw("company_info");
  const termSections = t.raw("general_terms_and_conditions");
  return (
    <div className="imprint px-4 md:px-16 lg:px-32 py-32 md:py-48 lg:py-56 xl:py-64">
      <h1>{t("headline")}</h1>
      <div className="py-12">
        <p className="font-semibold">{companyInfo.name}</p>
        <p>{companyInfo.adress}</p>
        <p>Geschäftsführer: {companyInfo.managing_director}</p>
        <p>
          Registergericht: {companyInfo.register_court} | HRB:{" "}
          {companyInfo.commercial_register}
        </p>
        <p>USt-IdNr.: {companyInfo.vat_id}</p>
        <p>
          E-Mail:{" "}
            {companyInfo.email}
        </p>
        <p className="mt-2 text-gray-500">Stand: {companyInfo.last_updated}</p>
      </div>

      {termSections.map((section: TermSection) => (
        <section key={section.section} className="mb-8 max-w-4xl">
          <h2>
            {section.section}. {section.title}
          </h2>

          <ol className="list-decimal pl-6 space-y-2">
            {section.clauses.map((clause, index) => (
              <li key={index} className="text-gray-800 leading-relaxed">
                {clause}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
