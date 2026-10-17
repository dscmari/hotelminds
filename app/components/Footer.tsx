import { getTranslations } from "next-intl/server";
import Link from "next/link";

type Props = {
  className?: string;
  data: string[];
};

export default async function Footer({ className, data }: Props) {
  const t = await getTranslations("components");
  const footerData = t.raw("footer");
  const targetIndices = [1, 2, 3, 4];
  const bullets = data.filter((_, index) => targetIndices.includes(index));

  return (
    <footer
      className={`px-4 md:px-16 lg:px-32 lg:px-32 pt-12 md:pt-32 text-offwhite bg-charcoalDark ${className}`}
    >
      <div className=" grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 order-1 mt-12 lg:mt-0">
          <h1>{footerData.headline}</h1>
          <p>{footerData.subheader}</p>
          <div className="flex flex-col gap-2 pt-8">
            <p>hello@hotelminds.io</p>
            <p>[German phone number]</p>
            <p>Leopoldstraße 31</p>
            <p>80802 Munich</p>
            <p>Germany</p>
          </div>
        </div>
      </div>
      <div>
        <div className="pt8 flex flex-col lg:flex-row lg:justify-end gap-2 lg:gap-8">
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
              className="underline"
            >
              {e}
            </Link>
          ))}
        </div>
        <div className="pt-4 flex flex-col lg:flex-row lg:justify-end gap-2 lg:gap-8">
          <Link href={"#"} className="underline">
            {footerData.agb}
          </Link>
          <Link href={"#"} className="underline">
            {footerData.privacy}
          </Link>
          <Link
            href={footerData.imprint.toLocaleLowerCase()}
            className="underline"
          >
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
            className="underline underline-offset-4"
          >
            Marian Nökel
          </a>
        </span>
      </div>
    </footer>
  );
}
