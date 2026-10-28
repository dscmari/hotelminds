import { getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  Calculator,
  CircleCheckBig,
  Compass,
  Cpu,
  Flag,
  Globe,
  Network,
  SearchCheck,
  Sliders,
} from "lucide-react";
import {
  AboutBullet,
  AboutSectionTwo,
  HeroData,
  ServiceBullet,
} from "../utils/types";
import Hero from "../components/Hero";
import AccordeonClean from "../components/layouts/AccordeonClean";
import ServiceBtn from "../components/buttons/ServiceBtn";
import ContactBtn from "../components/buttons/ContactBtn";
import { createMeta } from "../utils/createMeta";

export async function generateMetadata() {
  return createMeta("home.meta");
}

export default async function Home() {
  const t = await getTranslations("home");
  const serviceData = t.raw("services");
  const serviceBullets = serviceData.bullets as ServiceBullet[];
  const heroHome = await getTranslations("home");
  const hero = heroHome.raw("hero") as HeroData;
  const about = await getTranslations("home.about");
  const aboutSectionTwo = about.raw("sectionTwo") as AboutSectionTwo;
  const contactBtn = await getTranslations("components.contactBtn");
  const existingHotelBtn = await getTranslations("components.existingHotelBtn");
  const preOpeningBtn = await getTranslations("components.preOpeningBtn");
  const aboutBtn = await getTranslations("components.aboutBtn");
  const finalCta = await getTranslations("home.finalCta");

  const contactBtnData = {
    text: contactBtn("text"),
  };
  const preOpeningBtnData = {
    text: preOpeningBtn("text"),
    link: preOpeningBtn("link"),
  };

  const icons: Record<string, React.ComponentType> = {
    SearchCheck,
    Calculator,
    Globe,
    Sliders,
    Compass,
    Cpu,
    Network,
    Flag
  };

  return (
    <div>
      <Hero
        data={hero}
        contactBtn={contactBtnData}
        className="bg-linear-to-br from-[var(--color-offwhite)] via-[var(--color-offwhite)] to-[var(--color-gold)]"
      />
      {/* services 1 */}
      <section className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 md:py-32 lg:p-32 dark:pb-0 scroll-mt-24">
        <div className="flex flex-col xl:flex-row xl:items-start xl:gap-32">
          <div className="flex-1 flex flex-col items-start gap-4">
            <h2 className="!mb-0">{serviceData.subheader}</h2>
            <h1 className="lg:!text-5xl/14 !tracking-tight">
              {serviceData.headlineExistingHotel}
            </h1>
            <p className="lg:text-base/8">{serviceData.intro}</p>
            <ServiceBtn
              className="hidden xl:flex mx-auto lg:mx-0 bg-gold mt-8"
              text={existingHotelBtn("text")}
              link={existingHotelBtn("link")}
            />
          </div>
          <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-16 md:mt-24 xl:mt-4">
            {serviceBullets.slice(0, 4).map((bullet) => {
              const Icon = icons[bullet.icon];
              return (
                <div key={bullet.header} className="flex flex-col gap-4">
                  <div className="flex gap-4 lg:flex-col">
                    {Icon && <Icon />}
                    <h2>{bullet.header}</h2>
                  </div>
                  <p className="text-base/8">{bullet.text}</p>
                </div>
              );
            })}
          </div>
               <ServiceBtn
              className="xl:hidden mx-auto lg:mx-0 bg-gold mt-16"
              text={existingHotelBtn("text")}
              link={existingHotelBtn("link")}
            />
        </div>
      </section>
      {/* services 2 accordeon*/}
       <section className="px-4 md:px-16 lg:px-32 pt-16 md:pt-32 xl:pt-48">
        <div className="flex flex-col gap-4">
          <h2 className="!mb-0">{serviceData.subheader}</h2>
          <h1 className="lg:!text-5xl/14 !tracking-tight">
            {serviceData.headlinePreOpening}
          </h1>
          <p className="max-w-2xl font-light">{serviceBullets[4].text}</p>
        </div>
        <div className="mt-12 lg:mt-16 xl:mt-24">
          {/* <div className="flex-1">
            <Image
              src="/images/consulting_stock.jpg"
              alt="Business environment in the office"
              width={800}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div> */}
          <AccordeonClean
            className="max-w-7xl"
            data={serviceBullets.slice(5)}
            preOpeningBtn={preOpeningBtnData}
          />
        </div>
      </section> 
      {/* about */}
      <section className=" px-4 md:px-16 lg:px-32 pt-16 md:pt-32 xl:pt-48">
        <div className="lg:border-b-1 border-slate-300 pb-12">
          <div className="">
            <h2 className="!mb-4">
              {aboutSectionTwo.headline}
            </h2>
          </div>
          <h1 className="max-w-5xl">
            {aboutSectionTwo.intro}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24 lg:mt-24">
          <div className="flex-1">
            <Image
              src="/images/hotelcouch_stock.jpg"
              alt="Business environment in the office"
              width={800}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="lg:max-w-xl">{aboutSectionTwo.bulletHeadline}</h2>
            <div className="flex flex-col gap-4 mt-8">
              {aboutSectionTwo.bullets.map((e: AboutBullet, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CircleCheckBig className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h2>{e.header}</h2>
                    <span>{e.text}</span>
                  </div>
                </div>
              ))}
              <ServiceBtn
                text={aboutBtn("text")}
                link={aboutBtn("link")}
                className="bg-gold text-center mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      {/* services 2 new */}
      {/* <section className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 md:py-32 lg:p-32 mt-12 lg:mt-32 xl:mt-48 scroll-mt-24">
        <div className="flex flex-col xl:flex-row xl:items-start gap-24 lg:gap-32">
          <div className="flex-1 flex flex-col items-start gap-4">
            <h2 className="!mb-0">{serviceData.subheader}</h2>
            <h1 className="lg:!text-5xl/14 !tracking-tight">
              {serviceData.headlinePreOpening}
            </h1>
            <p className="lg:text-base/8">{serviceData.intro}</p>
            <ServiceBtn
              className="mx-auto lg:mx-0 bg-gold mt-8"
              text={preOpeningBtn("text")}
              link={preOpeningBtn("link")}
            />
          </div>
          <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-4">
            {serviceBullets.slice(5).map((bullet) => {
              const Icon = icons[bullet.icon];
              return (
                <div key={bullet.header} className="flex flex-col gap-4">
                  <div className="flex gap-4 lg:flex-col">
                    {Icon && <Icon />}
                    <h2>{bullet.header}</h2>
                  </div>
                  <p className="text-base/8">{bullet.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      {/* final cta */}
      <section className="px-4 md:px-16 lg:px-32 pt-16 pb-32 md:py-32 xl:py-48flex flex-col">
        <h1 className="lg:!text-5xl/14 !tracking-tight md:max-w-3xl">
          {finalCta("headline")}
        </h1>
        <div className="md:pt-12 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-32 lg:gap-40 max-w-5xl">
          <p className="max-w-xl">{finalCta("text")}</p>
          <ContactBtn className="md:w-64" />
        </div>
      </section>
    </div>
  );
}
