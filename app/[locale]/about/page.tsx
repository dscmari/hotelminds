import ContactBtn from "@/app/components/buttons/ContactBtn";
import TeamBtn from "@/app/components/buttons/TeamBtn";
import { FinalCtaData, FounderData, ServiceBullet } from "@/app/utils/types";
import { TrendingUp } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function page() {
  const t = await getTranslations("about");
  const hero = t.raw("hero");
  const servicesData = t.raw("services");
  const founderData = t.raw("founder") as FounderData;
  const finalCtaData = t.raw("finalCta") as FinalCtaData;
  const teamBtn = await getTranslations("components.teamBtn");

  return (
    <div>
      <section className="px-4 md:px-16 lg:px-32 pt-32 lg:pt-48 min-h-screen flex flex-col items-center justify-end bg-linear-to-br from-[var(--color-offwhite)] via-[var(--color-offwhite)] to-[var(--color-gold)]">
        <Image
          src="/icons/HotelMinds_black_transparent_cropped.png"
          alt="Logo hotelminds"
          width={300}
          height={100}
          className="mx-auto w-64 xl:w-80 mb-12 xl:mb-24"
        />
        <div className="flex flex-col xl:flex-row xl:gap-32 pb-16 lg::pb-24">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="!text-4xl/10 md:!text-5xl/14 lg:!text-6xl/16 dark:!text-charcoalDark">
                {hero.headline}
              </h1>
            </div>
            <ContactBtn className="hidden xl:flex md:max-w-64 mt-8 lg:mt-32" />
          </div>
          <article className="flex flex-col lg:pt-8 xl:pt-0 gap-4 xl:gap-8 max-w-xl">
            <p className="dark:!text-charcoalDark">{hero.intro_1}</p>
            <p className="dark:!text-charcoalDark">{hero.intro_2}</p>
            <p className="dark:!text-charcoalDark">{hero.intro_3}</p>
          </article>
          <ContactBtn className="lg:hidden  md:max-w-64 mt-8 lg:mt-32" />
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 pt-12 lg:pt-32 xl:pt-48">
        <h1>{servicesData.headline}</h1>
        <article className="grid md:grid-cols-2 gap-4 md:gap-8 pt-8 max-w-6xl">
          {servicesData.bullets.map((service: ServiceBullet, index: number) => (
            <div key={index}>
              <div className="flex gap-4 items-start">
                <TrendingUp className="shrink-0 text-gold" size={32} />
                <h2>{service.header}</h2>
              </div>

              <p className={`max-w-md`}>{service.text}</p>
            </div>
          ))}
        </article>
      </section>
      <section className="md:px-16 lg:px-32 pt-12 lg:pt-32 xl:pt-48">
        <article className="flex flex-col lg:flex-row gap-12">
          <div className="px-4 md:px-0">
            {" "}
            <h1 className="max-w-3xl">{founderData.headline}</h1>
            <div className="max-w-2xl flex flex-col gap-4">
              <p>{founderData.text_1}</p>
              <p>{founderData.text_2}</p>
              <p>{founderData.text_3}</p>
            </div>
            <TeamBtn
              className="mx-auto lg:mx-0 bg-gold mt-8"
              text={teamBtn("text")}
            />
          </div>
          <div className="sm:px-4 md:px-0">
            <Image
              src="/images/portrait_cris.jpeg"
              alt="Business environment in the office"
              width={400}
              height={400}
              className="lg:rounded-xl md:min-w-[400px]"
            />
          </div>
        </article>
      </section>
      {/* final cta */}
      <section className="px-4 md:px-16 lg:px-32 pb-32 py-16 lg:py-32 xl:pt-48 xl:pb-64 flex flex-col">
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
