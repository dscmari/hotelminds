import ContactBtn from "@/app/components/buttons/ContactBtn";
import Hero from "@/app/components/Hero";
import SixBoxLayout from "@/app/components/layouts/SixBoxLayout";
import Subservices from "@/app/components/layouts/Subservices";
import Process from "@/app/components/Process";
import { createMeta } from "@/app/utils/createMeta";
import {
  AreasData,
  FinalCtaData,
  HeroData,
  ProcessData,
} from "@/app/utils/types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  return createMeta("preOpening.meta");
}

export default async function page() {
  const t = await getTranslations("preOpening");
  const heroData = t.raw("hero") as HeroData;
  const servicesData = t.raw("services") as AreasData;
  const subServicesData = t.raw("subServices");
  const processData = t.raw("process") as ProcessData;
  const finalCtaData = t.raw("finalCta") as FinalCtaData;
  const contactBtn = await getTranslations("components.contactBtn");
  const contactBtnData = {
    text: contactBtn("text"),
  };

  return (
    <div>
      <Hero
        data={heroData}
        contactBtn={contactBtnData}
        className="bg-linear-to-br from-[var(--color-offwhite)] via-[var(--color-gold)]/30 to-[var(--color-offwhite)] dark:!bg-offwhite"
      />
      {/* services */}
      <section className="px-4 md:px-16 lg:pl-32 lg:pr-8 xl:px-32 pt-16 md:pt-32 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-8 xl:gap-16 2xl:gap-32">
        <article className="max-w-xl flex flex-col justify-between">
          <div>
            <h2>{servicesData.subheadline}</h2>
            <h1>{servicesData.headline}</h1>
            <p className="lg:pt-4">{servicesData.bullets[0].text}</p>
          </div>
          <ContactBtn
            className="hidden lg:flex md:w-64"
          />
        </article>
        <SixBoxLayout boxes={servicesData.bullets} />
      </section>
      {/* subservices */}
      <section className="px-4 md:px-16 lg:px-32 pt-16 lg:pt-16">
        <Subservices
          data={subServicesData}
          contactBtn={contactBtnData}
          className="border-t-1 border-cta/10 pt-12 lg:pt-16"
        />
      </section>
      {/* process */}
      <section className="px-4 md:px-16 lg:px-32 pt-16 md:pt-32 xl:pt-48">
        <h2>{processData.subheader}</h2>
        <h1 className="">{processData.headline}</h1>
        <Process data={processData} />
      </section>
      {/* final cta */}
      <section className="px-4 md:px-16 lg:px-32 pb-32 py-16 md:py-32 xl:pt-48 xl:pb-64 flex flex-col">
        <h1 className="lg:!text-5xl/14 !tracking-tight md:max-w-3xl">
          {finalCtaData.headline}
        </h1>
        <div className="md:pt-12 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-32 lg:gap-40 max-w-5xl">
          <p className="max-w-xl">{finalCtaData.text}</p>
          <ContactBtn className="md:w-64" />
        </div>
      </section>
    </div>
  );
}
