import Image from "next/image";
import {
  Calculator,
  CircleCheckBig,
  Globe,
  SearchCheck,
  Sliders,
} from "lucide-react";
import ContactBtn from "../components/buttons/ContactBtn";
import Hero from "../components/Hero";
import AccordeonClean from "../components/layouts/AccordeonClean";
import { dictionary } from "../utils/dictionary";
import { PageParams } from "../types/i18n";
import Process from "../components/Process";
import ThreePhaseLayout from "../components/layouts/ThreePhaseLayout";

export default async function Home({ params }: PageParams) {
  const { locale } = await params;
  const data = await dictionary(locale);

  const icons: Record<string, React.ComponentType> = {
    SearchCheck,
    Calculator,
    Globe,
    Sliders,
  };

  return (
    <div>
      <Hero params={params} />
      {/* strategy */}
      <section
        id={`${locale === "de" ? "strategie" : "strategy"}`}
        className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 lg:p-32 scroll-mt-24"
      >
        <div className="flex flex-col xl:flex-row xl:items-start gap-24 lg:gap-32">
          <div className="flex-1 flex flex-col items-start gap-4">
            <span className="font-thin">{data.strategy.subheader}</span>
            <h1 className="lg:!text-5xl !tracking-tight">
              {data.strategy.headline}
            </h1>
            <p className="lg:text-base/8">{data.strategy.intro}</p>
            <ContactBtn className="mx-auto lg:mx-0 bg-gold mt-8" />
          </div>
          <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-4">
            {data.strategy.bullets.map((bullet) => {
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
        id={`${locale === "de" ? "prozess" : "process"}`}
        className="pt-24 pb-24 px-4 lg:pt-32 lg:px-32"
      >
        <div className="flex flex-col gap-4">
          <span className="lg:mx-auto">{data.process.subheader}</span>
          <h1 className="lg:text-center lg:!text-5xl !tracking-tight">
            {data.process.headline}
          </h1>
          <p className="max-w-4xl font-light lg:text-center mx-auto">
            {data.process.intro}
          </p>
        </div>
        <Process
          className="lg:pt-12 px-4 lg:px-32 lg:pb-48"
          circles={data.process.bullets}
        />
      </section>
      {/* results */}
      <section
        id={`${locale === "de" ? "ergebnisse" : "results"}`}
        className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 lg:p-32 scroll-mt-24"
      >
        <ThreePhaseLayout data={data} />
      </section>
      {/* about*/}
      <section
        id={`${locale === "de" ? "ueber-uns" : "about"}`}
        className="px-4 pt-24 md:p-16 lg:p-32"
      >
        <div className="flex flex-col gap-4">
          <span className="lg:mx-auto">{data.about.sectionOne.subheader}</span>
          <h1 className="lg:text-center lg:!text-5xl !tracking-tight">
            {data.about.sectionOne.headline}
          </h1>
          <p className="max-w-4xl font-light lg:text-center mx-auto">
            {data.about.sectionOne.intro}
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
          <AccordeonClean className="flex-1" data={data} />
        </div>
      </section>
      <section className="px-4 py-24 md:p-16 lg:p-32">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-24 lg:border-b-1 border-slate-300 pb-12">
          <div className="flex-1 flex flex-col gap-4">
            <span className="">{data.about.sectionTwo.subheader}</span>
            <h1 className="lg:!text-5xl !tracking-tight">
              {data.about.sectionTwo.headline}
            </h1>
          </div>
          <p className="flex-1 lg:text-base/8 max-w-xl">
            {data.about.sectionTwo.intro}
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
            <h2 className="lg:max-w-sm">
              {data.about.sectionTwo.bulletHeader}
            </h2>
            <div className="flex flex-col gap-4 mt-8">
              {data.about.sectionTwo.bullets.map((e: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CircleCheckBig className="text-gold shrink-0" />
                  <span>{e}</span>
                </div>
              ))}
              <p className="font-semibold mt-4">
                {data.about.sectionTwo.outro}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section
        id={`${locale === "de" ? "kontakt" : "contact"}`}
        className="px-4 pt-24 lg:pt-32 lg:px-32 bg-charcoalDark text-offwhite"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 lg:border-b-1 border-slate-300 lg:pb-32">
          <div className="flex-1 flex flex-col gap-4">
            <span className="font-thin">{data.contact.subheader}</span>
            <h1 className="lg:!text-5xl !tracking-tight">{data.contact.headline}</h1>
            <p className="max-w-sm">
        {data.contact.intro}
            </p>
            <a
              className="self-center lg:self-start mt-8 bg-gold px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap"
              href="mailto:beispiel@email.de"
            >
              Let's Talk
            </a>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-16 pt-8">
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="font-thin">{data.contact.mail}</span>
              <a
                className="font-semibold underline underline-offset-3"
                href="mailto:beispiel@email.de"
              >
                contact@hotelminds.io
              </a>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="font-thin">{data.contact.phone}</span>
              <span className="font-semibold">+49 1234 4678910</span>
            </div>
            <div className="hidden lg:flex flex-col gap-2 lg:gap-4">
              <span className="font-thin">{data.contact.colab}</span>
              <span className="font-semibold">colab@hotelminds.io</span>
            </div>
            <div className="hidden lg:flex flex-col gap-2 lg:gap-4">
              <span className="font-thin">{data.contact.address}</span>
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
