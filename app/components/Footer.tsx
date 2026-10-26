import { getTranslations } from "next-intl/server";
import Link from "next/link";
import ContactBtn from "./buttons/ContactBtn";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import PhoneBtn from "./buttons/PhoneBtn";

type Props = {
  className?: string;
};

export default async function Footer({ className }: Props) {
  const t = await getTranslations("components");
  const navbarData = t.raw("navbar") as { bullets: string[] };
  const navbarBullets = navbarData.bullets;
  const imprintT = await getTranslations("imprint");

  const footerData = t.raw("footer");
  const targetIndices = [1, 2, 3];
  const bullets = navbarBullets.filter((_, index) =>
    targetIndices.includes(index),
  );
  const imprintSections = imprintT.raw("sections");
  const imprintLines = imprintSections[0].lines;

  return (
    <footer className={` ${className}`}>
      {/* contact */}
      <section
        id="contact"
        className="px-4 md:px-16 lg:px-32 pt-24 md:pt-32 bg-charcoalDark dark:!bg-charcoalDark text-offwhite"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 xl:gap-32 lg:border-b-1 border-slate-300 lg:pb-32">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="!mb-0">{footerData.contact.subheader}</h2>
            <h1 className="lg:!text-5xl !tracking-tight">
              {footerData.contact.headline}
            </h1>
            <p className="max-w-sm">{footerData.contact.intro}</p>
            <ContactBtn className="md:w-64 mt-8" />
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-4 lg:gap-y-16 pt-8">
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="hidden lg:block">
                {footerData.contact.phone}
              </span>
              <PhoneBtn />
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="hidden lg:block">{footerData.contact.mail}</span>
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
              <span className="hidden lg:block">
                {footerData.contact.whatsApp}
              </span>
              <Link
                href="https://wa.me/491791769307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <Image
                  src="/Digital_Glyph_Black_RGB_2026.svg"
                  alt="WhatsApp Logo"
                  width={24}
                  height={24}
                  className="text-white"
                />
                <span className="!cursor-pointer lg:text-lg underline underline-offset-2">
                  {" "}
                  WhatsApp
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="hidden lg:block">
                {footerData.contact.address}
              </span>
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
      <section className="px-4 md:px-16 lg:px-32 lg:px-32 pt-12 md:pt-32 text-offwhite bg-charcoalDark dark:!bg-charcoalDark ">
        <div className="underline-offset-2">
          <div className="flex flex-col gap-8 lg:items-end">
            <Image
              src="/icons/HotelMinds_white_transparent_cropped.png"
              alt="Logo hotelminds"
              width={300}
              height={100}
              className="mx-auto lg:mx-0 w-64"
            />
            <div className="pt-8 lg:pt-0 flex flex-col lg:flex-row lg:justify-end gap-2 lg:gap-8 ">
              {bullets.map((e, index) => (
                <Link
                  key={index}
                  href={
                    e === "Home"
                      ? "/"
                      : e === "Über Uns"
                        ? "/about/"
                        : `/${e.toLowerCase().replace(/\s+/g, "-")}/`
                  }
                  className="underline cursor-pointer"
                >
                  {e}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col lg:flex-row lg:justify-end gap-2 lg:gap-8">
            <Link href={`/terms/`} className="underline">
              {footerData.agb}
            </Link>
            <Link href={"/privacy/"} className="underline">
              {footerData.privacy}
            </Link>
            <Link href={"/imprint/"} className="underline">
              {footerData.imprint}
            </Link>
          </div>
        </div>

        <div className="py-8 lg:py-16 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <span>
            © 2026 HotelMinds UG (haftungsbeschränkt). All rights reserved.
          </span>
          <span>
            {footerData.credit}{" "}
            <a
              href="https://namaste-websites.de"
              target="_blank"
              className="underline underline-offset-2"
            >
              Marian Nökel
            </a>
          </span>
        </div>
      </section>
    </footer>
  );
}
