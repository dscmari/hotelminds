import { getTranslations } from "next-intl/server";
import ContactBtn from "./buttons/ContactBtn";
import Image from "next/image";
import { CustomBtn, HeroData } from "../utils/types";

type Props = {
  data: HeroData;
  contactBtn: CustomBtn;
};

export default async function Hero({ data, contactBtn }: Props) {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="py-16 lg:py-32 xl:py-48 mx-4 md:mx-16 lg:mx-32 text-center ">
        <Image
          src="/images/hotelminds_logo_bg_transparent_big.png"
          alt="Logo hotelminds"
          style={{ width: "250px" }}
          width={250}
          height={125}
          className="mx-auto"
        />
        <h1 className="lg:!text-5xl/14 !tracking-tight max-w-4xl">
          {data.headline}
        </h1>
        <p className="font-light max-w-4xl mx-auto">{data.subheader}</p>
        <p className="font-light max-w-4xl mx-auto pt-4"> {data.btnOutro}</p>
        <div className="mt-12 flex flex-col gap-8 items-center justify-center">
          <ContactBtn
            className="hover:bg-gold text-charcoalDark md:w-64"
            text={contactBtn.text}
          />
        </div>
      </div>
    </div>
  );
}
