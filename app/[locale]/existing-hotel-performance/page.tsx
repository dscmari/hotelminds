import Hero from "@/app/components/Hero";
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
      <ServicesOverview
        data={{
          headline: serviceHeadline,
          services: serviceBullets,
        }}
      />
      </section>

    </div>
  );
}
