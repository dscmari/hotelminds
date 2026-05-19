import { PageParams } from "../types/i18n";
import { dictionary } from "../utils/dictionary";
import ContactBtn from "./buttons/ContactBtn";
import Image from "next/image";

export default async function Hero({ params }: PageParams) {
  const { locale } = await params;
  const data = await dictionary(locale);
  return (
    <div
      id="home"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="mt-16 lg:mt-0 mx-4 md:mx-16 lg:mx-32 text-center max-w-4xl">
        <Image
          src="/images/hotelminds_logo_bg_transparent_big.png"
          alt="Logo hotelminds"
          style={{ width: "500px" }}
          width={500}
          height={250}
          className="mx-auto"
        />
        <h1 className="!font-semibold whitespace-pre-line">
          {data.hero.subheader}
        </h1>

        <div className="mt-12 flex flex-col gap-8 items-center justify-center">
          <ContactBtn
            content="Request an Initial Call"
            className="hover:bg-gold text-charcoalDark"
          />
          <p className="font-semibold">{data.hero.btnOutro}</p>
        </div>
      </div>
    </div>
  );
}
