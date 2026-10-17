import ContactBtn from "@/app/components/buttons/ContactBtn";
import Hero from "@/app/components/Hero";
import Areas from "@/app/components/layouts/Areas";
import ServicesOverview from "@/app/components/layouts/ServicesOverview";
import ThreePhaseLayout from "@/app/components/layouts/ThreePhaseLayout";
import Process from "@/app/components/Process";
import { createMeta } from "@/app/utils/createMeta";
import {
  FinalCtaData,
  HeroData,
  ProcessData,
  ResultsData,
  ServiceBullet,
} from "@/app/utils/types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  return createMeta("existingHotelPerformance.meta");
}

export default async function page() {
  const heroExistingHotelPerformance = await getTranslations(
    "existingHotelPerformance",
  );
  const hero = heroExistingHotelPerformance.raw("hero") as HeroData;
  const areas = await getTranslations("existingHotelPerformance.areas");
  const areasHeadline = areas("headline");
  const areasBullets = areas.raw("bullets") as ServiceBullet[];
  const services = await getTranslations("existingHotelPerformance.services");
  const serviceHeadline = services("headline");
  const serviceBullets = services.raw("bullets") as ServiceBullet[];
  const t = await getTranslations("existingHotelPerformance");
  const resultsData = t.raw("results") as ResultsData;
  const processData = t.raw("process") as ProcessData;
  const finalCtaData = t.raw("finalCta") as FinalCtaData;
  const contactBtn = await getTranslations("components.contactBtn");
  const contactBtnData = {
    text: contactBtn("text"),
  };
  return (
    <div>
      <Hero data={hero} contactBtn={contactBtnData} className="bg-linear-to-br from-[var(--color-offwhite)] via-[var(--color-gold)] to-[var(--color-offwhite)]" />
      <section className="px-4 md:px-16 lg:px-32 pt-12 md:pt-32 md:py-24">
        <ServicesOverview
          data={{
            headline: serviceHeadline,
            services: serviceBullets,
          }}
        />
      </section>
      <section className="px-4 md:px-16 lg:px-32 pb-12 md:pb-32 xl:pb-48">
        <Areas
          data={{
            headline: areasHeadline,
            services: areasBullets,
          }}
          contactBtn={contactBtnData}
        />
      </section>

      {/* threePhaseLayout */}
      <section className="bg-charcoalDark text-offwhite p-4 py-24 md:px-16 md:py-32 lg:p-32">
        <ThreePhaseLayout data={resultsData} />
      </section>
      {/* process */}
      <section className="pt-12 px-4 md:px-16 md:pt-32 xl:pt-48 lg:px-32">
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
          <ContactBtn text={contactBtn("text")} className="md:w-64" />
        </div>
      </section>
    </div>
  );
}
