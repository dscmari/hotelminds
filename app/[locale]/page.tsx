import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import {
  Calculator,
  CircleCheckBig,
  Globe,
  Mail,
  Phone,
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
  const heroHome = await getTranslations("home");
  const hero = heroHome.raw("hero") as HeroData;
  const services = await getTranslations("home.services");
  const serviceBullets = services.raw("bullets") as ServiceBullet[];
  const about = await getTranslations("home.about");
  const aboutSectionTwo = about.raw("sectionTwo") as AboutSectionTwo;
  const contact = await getTranslations("home.contact");
  const contactBtn = await getTranslations("components.contactBtn");
  const existingHotelBtn = await getTranslations("components.existingHotelBtn");
  const preOpeningBtn = await getTranslations("components.preOpeningBtn");
  const aboutBtn = await getTranslations("components.aboutBtn");
  const finalCta = await getTranslations("home.finalCta");
  const imprint = await getTranslations("imprint");
  const imprintSections = imprint.raw("sections");
  const imprintLines = imprintSections[0].lines;

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
  };

  return (
    <div>
      <Hero data={hero} contactBtn={contactBtnData} />
      {/* services 1 */}
      <section className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 lg:p-32 scroll-mt-24">
        <div className="flex flex-col xl:flex-row xl:items-start gap-24 lg:gap-32">
          <div className="flex-1 flex flex-col items-start gap-4">
            <h2 className="!mb-0">{services("subheader")}</h2>
            <h1 className="lg:!text-5xl/14 !tracking-tight">
              {services("headlineExistingHotels")}
            </h1>
            <p className="lg:text-base/8">{services("intro")}</p>
            <ServiceBtn
              className="mx-auto lg:mx-0 bg-gold mt-8"
              text={existingHotelBtn("text")}
              link={existingHotelBtn("link")}
            />
          </div>
          <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-4">
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
        </div>
      </section>
      {/* services 2*/}
      <section className="px-4 pt-24 md:p-16 lg:p-32">
        <div className="flex flex-col gap-4">
          <h2 className="!mb-0">{services("subheader")}</h2>
          <h1 className="lg:!text-5xl/14 !tracking-tight">
            {services("headlinePreOpening")}
          </h1>
          <p className="max-w-2xl font-light">{serviceBullets[4].text}</p>
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
          <AccordeonClean
            className="flex-1"
            data={serviceBullets.slice(5)}
            preOpeningBtn={preOpeningBtnData}
          />
        </div>
      </section>
      {/* about */}
      <section className="px-4 py-24 md:p-16 lg:p-32">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-24 lg:border-b-1 border-slate-300 pb-12">
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="lg:!text-5xl/14 !tracking-tight">
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
      {/* final cta */}
      <div className="px-4 lg:px-32 pb-32 md:py-16 lg:py-32 xl:pt-32 xl:pb-48 flex flex-col">
        <h1 className="lg:!text-5xl/14 !tracking-tight md:max-w-3xl">
          {finalCta("headline")}
        </h1>
        <div className="md:pt-12 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-32 lg:gap-40 max-w-5xl">
          <p className="max-w-xl">{finalCta("text")}</p>
          <ContactBtn text={contactBtn("text")} className="md:w-64" />
        </div>
      </div>
      {/* contact */}
      <section className="px-4 pt-24 lg:pt-32 lg:px-32 bg-charcoalDark text-offwhite">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 xl:gap-24 lg:border-b-1 border-slate-300 lg:pb-32">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="!mb-0">{contact("subheader")}</h2>
            <h1 className="lg:!text-5xl !tracking-tight">
              {contact("headline")}
            </h1>
            <p className="max-w-sm">{contact("intro")}</p>
            <ContactBtn text={contactBtn("text")} className="md:w-64 mt-8" />
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-4 lg:gap-y-16 pt-8">
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="hidden lg:block">{contact("phone")}</span>
              <Link href="tel:+4912345678" className="flex items-center gap-4">
                <Phone className="shrink-0 size-6 text-sage" />
                <span className="!cursor-pointer text-lg underline underline-offset-2">
                  {" "}
                  +4912345678
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="hidden lg:block">{contact("mail")}</span>
              <Link
                href="mailto:hello@hotelminds.io"
                className="flex items-center gap-4"
              >
                <Mail className="shrink-0 size-6 text-sage" />
                <span className="!cursor-pointer lg:text-lg underline underline-offset-2">
                  {" "}
                  hello@hotelminds.io
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="hidden lg:block">{contact("whatsApp")}</span>
              <Link href="#" className="flex items-center gap-4">
                <Image
                  src="/Digital_Glyph_Black_RGB_2026.svg"
                  alt="WhatsApp Logo"
                  width={24}
                  height={24}
                  className="text-white"
                />
                <span className="!cursor-pointer lg:text-lg underline underline-offset-2">
                  {" "}
                  +4912345678
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="hidden lg:block">{contact("address")}</span>
              <div className="flex flex-col gap-2">
                <span className="font-semibold">HotelMinds</span>
                <span className="font-semibold">Leopoldstraße 31</span>
                <span className="font-semibold">{imprintLines[2]}</span>
                <span className="font-semibold">{imprintLines[3]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
