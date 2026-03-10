"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  data: any;
};

export default function Footer({ className, data }: Props) {
  const pathname = usePathname();
  return (
    <footer className={`text-offwhite bg-charcoalDark ${className}`}>
      <div className="p-4 lg:pt-32 lg:px-32 grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="flex flex-col items-center lg:items-start gap-2 order-2 lg:order-1">
          <span>Cristian Pop</span>
          <span>www.hotelminds.io</span>
          <span>+49 123 12345 123</span>
          <span>contact@hotelminds.io</span>
          <span>Musterfraustr. 1</span>
          <span>12345 Musterstadt</span>
        </div>
        <div className="flex flex-col gap-8 order-3 mb-12 lg:mb-0 lg:order-2">
          <div className="flex flex-col items-center lg:items-start gap-2">
            {data.navbar.bullets.map((bullet: string, index: number) => (
              <Link
                href={`${bullet === "Über uns" ? `${pathname}#ueber-uns` : `${pathname}#${bullet.toLowerCase()}`} `}
                className="font-semibold"
                key={index}
              >
                {bullet}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-3 mt-12 lg:mt-0">
          <h1>Make your hotel impossible to ignore.</h1>
          <p className="mb-2">
            HotelMinds combines strategic thinking with refined digital
            execution to help premium hotels stand out.
          </p>
        </div>
      </div>
      <div className="px-4 lg:px-32 pt-4 lg:pt-8 flex flex-col lg:flex-row items-center lg:justify-end gap-2 lg:gap-8">
        <Link href={"#"} className="underline">
          Allgemeine Geschäftsbedingungen
        </Link>
        <Link href={"#"} className="underline">
          Datenschutzerklärung
        </Link>
        <Link href={"#"} className="underline">
          Impressum
        </Link>
      </div>
      <div className="px-4 py-8 lg:px-32 lg:py-16 text-sm font-thin flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Cristian Pop</span>
        <span>
          Design & Entwicklung von{" "}
          <a
            href="https://namaste-websites.de"
            className="hover:offwhite transition-colors  underline decoration-[0.1px] underline-offset-4 font-thin"
          >
            Marian Nökel
          </a>
        </span>
      </div>
    </footer>
  );
}
