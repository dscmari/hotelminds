import { getTranslations } from "next-intl/server";
import { locale } from "next/root-params";
import Image from "next/image";
import {
  Calculator,
  CircleCheckBig,
  Globe,
  SearchCheck,
  Sliders,
} from "lucide-react";
import {
  AboutSectionOne,
  AboutSectionTwo,
  HeroData,
  ProcessBullet,
  ServiceBullet,
} from "../utils/types";
import Hero from "../components/Hero";
import AccordeonClean from "../components/layouts/AccordeonClean";
import Process from "../components/Process";
import ThreePhaseLayout from "../components/layouts/ThreePhaseLayout";
import ExistingHotelBtn from "../components/buttons/ExistingHotelBtn";
import { Metadata } from "next";

/*
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.meta");
  const currentLocale = await locale();

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${currentLocale}/`,
      languages: {
        de: "/de/",
        en: "/en/",
        "x-default": "/en/",
      },
    },
  };
}*/

export default async function Home() {
  const heroHome = await getTranslations("home");
  const hero = heroHome.raw("hero") as HeroData;
  const services = await getTranslations("home.services")
  const serviceBullets = services.raw("bullets") as ServiceBullet[];
  const process = await getTranslations("home.process");
  const processBullets = process.raw("bullets") as ProcessBullet[];
  const results = await getTranslations("home.results");
  const about = await getTranslations("home.about");
  const aboutSectionOne = about.raw("sectionOne") as AboutSectionOne;
  const aboutSectionTwo = about.raw("sectionTwo") as AboutSectionTwo;
  const contact = await getTranslations("home.contact");

  const icons: Record<string, React.ComponentType> = {
    SearchCheck,
    Calculator,
    Globe,
    Sliders,
  };

  return (
    <div>
       <Hero data={hero} />
      {/* services */}
      <section className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 lg:p-32 scroll-mt-24">
        <div className="flex flex-col xl:flex-row xl:items-start gap-24 lg:gap-32">
          <div className="flex-1 flex flex-col items-start gap-4">
            <h2 className="!mb-0">{services("subheader")}</h2>
            <h1 className="lg:!text-5xl !tracking-tight">
              {services("headline")}
            </h1>
            <p className="lg:text-base/8">{services("intro")}</p>
            <ExistingHotelBtn className="mx-auto lg:mx-0 bg-gold mt-8" />
          </div>
          <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-4">
            {serviceBullets.map((bullet) => {
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
      </section>
      {/* process */}
      <section
        className="pt-24 pb-24 px-4 lg:pt-32 lg:px-32"
      >
        <div className="flex flex-col gap-4">
          <span className="lg:mx-auto">{process("subheader")}</span>
          <h1 className="lg:text-center lg:!text-5xl !tracking-tight">
            {process("headline")}
          </h1>
          <p className="max-w-4xl font-light lg:text-center mx-auto">
            {process("intro")}
          </p>
        </div>
        <Process
          className="lg:pt-12 px-4 lg:px-32 lg:pb-48"
          circles={processBullets}
        />
      </section>
      {/* results */}
      <section className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 lg:p-32 scroll-mt-24">
        <ThreePhaseLayout results={results} />
      </section>
      {/* about*/}
      <section className="px-4 pt-24 md:p-16 lg:p-32">
        <div className="flex flex-col gap-4">
          <span className="lg:mx-auto">{aboutSectionOne.subheader}</span>
          <h1 className="lg:text-center lg:!text-5xl !tracking-tight">
            {aboutSectionOne.headline}
          </h1>
          <p className="max-w-4xl font-light lg:text-center mx-auto">
            {aboutSectionOne.intro}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:flex-row gap-16 mt-12 lg:mt-32">
          <div className="flex-1">
            <Image
              src="/images/consulting_stock.jpg"
              alt="Business environment in the office"
              width={800}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div>
          <AccordeonClean className="flex-1" data={aboutSectionOne} />
        </div>
      </section>
      <section className="px-4 py-24 md:p-16 lg:p-32">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-24 lg:border-b-1 border-slate-300 pb-12">
          <div className="flex-1 flex flex-col gap-4">
            <span className="">{aboutSectionTwo.subheader}</span>
            <h1 className="lg:!text-5xl !tracking-tight">
              {aboutSectionTwo.headline}
            </h1>
          </div>
          <p className="flex-1 lg:text-base/8 max-w-xl">
            {aboutSectionTwo.intro}
          </p>
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
            <h2 className="lg:max-w-sm">{aboutSectionTwo.bulletHeader}</h2>
            <div className="flex flex-col gap-4 mt-8">
              {aboutSectionTwo.bullets.map((e: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CircleCheckBig className="text-gold shrink-0" />
                  <span>{e}</span>
                </div>
              ))}
              <p className="font-semibold mt-4">{aboutSectionTwo.outro}</p>
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section className="px-4 pt-24 lg:pt-32 lg:px-32 bg-charcoalDark text-offwhite">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 lg:border-b-1 border-slate-300 lg:pb-32">
          <div className="flex-1 flex flex-col gap-4">
            <span className="font-thin">{contact("subheader")}</span>
            <h1 className="lg:!text-5xl !tracking-tight">
              {contact("headline")}
            </h1>
            <p className="max-w-sm">{contact("intro")}</p>
            <a
              className="self-center lg:self-start mt-8 bg-gold px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap"
              href="mailto:beispiel@email.de"
            >
              Request an Initial Call
            </a>
            <p className="text-center lg:text-start">
              Not obligation. No generic sales pitch.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-16 pt-8">
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="font-thin">{contact("phone")}</span>
              <span className="font-semibold">+49 1234 4678910</span>
            </div>
            <div className="hidden lg:flex flex-col gap-2 lg:gap-4">
              <span className="font-thin">{contact("colab")}</span>
              <span className="font-semibold">colab@hotelminds.io</span>
            </div>
            <div className="hidden lg:flex flex-col gap-2 lg:gap-4">
              <span className="font-thin">{contact("address")}</span>
              <div className="flex flex-col gap-2">
                <span className="font-semibold">82538 Musterstadt</span>
                <span className="font-semibold">Musterfraustr. 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
