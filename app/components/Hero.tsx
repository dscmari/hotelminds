import { getTranslations } from "next-intl/server";
import ContactBtn from "./buttons/ContactBtn";
import Image from "next/image";
import { HeroData } from "../utils/types";

type Props = {
  data: HeroData
}

export default async function Hero({data} : Props) {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="mt-16 lg:mt-0 mx-4 md:mx-16 lg:mx-32 text-center ">
        <Image
          src="/images/hotelminds_logo_bg_transparent_big.png"
          alt="Logo hotelminds"
          style={{ width: "500px" }}
          width={500}
          height={250}
          className="mx-auto"
        />
        <h1 className="!font-semibold whitespace-pre-line">
          {data.headline}
        </h1>
        <p className="font-light max-w-4xl mx-auto">{data.subheader}</p>

        <div className="mt-12 flex flex-col gap-8 items-center justify-center">
          <ContactBtn
            content="Book an Intro Call"
            className="hover:bg-gold text-charcoalDark"
          />
          <p className="font-semibold max-w-2xl mx-auto">
            {data.btnOutro}
          </p>
        </div>
      </div>
    </div>
  );
}
