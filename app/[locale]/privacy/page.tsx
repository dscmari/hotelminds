import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("privacy");
  const controller = t.raw("controller");
  const hosting = t.raw("hosting");
  const contact = t.raw("contact");
  const whatsapp = t.raw("whatsapp");
  const calendly = t.raw("calendly");
  const cookies = t.raw("cookies");
  const analytics = t.raw("analytics");
  const storage = t.raw("storage");
  const rights = t.raw("rights");
  return (
    <div className="imprint px-4 md:px-16 lg:px-32 py-32 md:py-48 lg:py-56 xl:py-64">
      <div className="max-w-4xl">
        <h1 className="">{t("headline")}</h1>
        {/* controller */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{controller.headline}</h2>
          <p>{controller.intro}</p>
          <div>
            {controller.infos.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
        {/* hosting */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{hosting.headline}</h2>
          <div className="flex flex-col gap-2">
            {hosting.text.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
        {/* contact */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{contact.headline}</h2>
          <div className="flex flex-col gap-2">
            {contact.text.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
        {/* whatsapp */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{whatsapp.headline}</h2>
          <div className="flex flex-col gap-2">
            {whatsapp.text.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
        {/* calendly */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{calendly.headline}</h2>
          <div className="flex flex-col gap-2">
            {calendly.text.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
        {/* cookies */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{cookies.headline}</h2>
          <div className="flex flex-col gap-2">
            {cookies.text.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
        {/* analytics */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{analytics.headline}</h2>
          <div className="flex flex-col gap-2">
            {analytics.text.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
        {/* storage */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{storage.headline}</h2>
          <div className="flex flex-col gap-2">
            {storage.text.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
        {/* rights */}
        <article className="flex flex-col gap-4">
          <h2 className="!mb-0">{rights.headline}</h2>
          <div className="flex flex-col gap-2">
            {rights.text.map((e: string, index: number) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
