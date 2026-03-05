import { PageParams } from "../types/i18n";
import { dictionary } from "../utils/dictionary";
import ContactBtn from "./buttons/ContactBtn";
import Image from "next/image";

export default async function Hero({ params }: PageParams) {
  const { locale } = await params;
  const data = await dictionary(locale);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="mt-16 lg:mt-0 mx-4 md:mx-16 lg:mx-32 text-center max-w-4xl">
        <Image
          src="/images/logo_bgOffwhite.png"
          alt="Logo hotelminds"
          style={{ width: "500px" }}
          width={500}
          height={250}
          className="mx-auto"
        />
        <h1 className="!font-semibold !font-geistmono whitespace-pre-line mt-12">
          {data.hero.subheader}
        </h1>

        <div className="mt-12 flex gap-8 items-center justify-center">
          <ContactBtn
            content="Let's Connect"
            className="hover:bg-gold text-charcoalDark"
          />
        </div>
      </div>
    </div>
  );
}
