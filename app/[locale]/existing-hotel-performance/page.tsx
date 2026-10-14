import Hero from "@/app/components/Hero";
import Areas from "@/app/components/layouts/Areas";
import ServicesOverview from "@/app/components/layouts/ServicesOverview";
import { createMeta } from "@/app/utils/createMeta";
import { HeroData, ServiceBullet } from "@/app/utils/types";
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
  const contactBtn = await getTranslations("components.contactBtn");
  const contactBtnData = {
    text: contactBtn("text"),
  };
  return (
    <div>
      <Hero data={hero} contactBtn={contactBtnData} />
            <section className="px-4 md:px-16 lg:px-32 pt-12 lg:pt-32">
      <Areas
        data={{
          headline: areasHeadline,
          services: areasBullets,
        }}
      />
      </section>
      <section className="px-4 md:px-16 lg:px-32 pt-12 lg:pt-16">
      <ServicesOverview
        data={{
          headline: serviceHeadline,
          services: serviceBullets,
        }}
          contactBtn={contactBtnData}
      />
      </section>

    </div>
  );
}
