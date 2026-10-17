import { getTranslations } from "next-intl/server";
import ContactBtn from "./buttons/ContactBtn";
import Image from "next/image";
import { CustomBtn, HeroData } from "../utils/types";

type Props = {
  className?: string
  data: HeroData;
  contactBtn: CustomBtn;
};

export default async function Hero({ data, contactBtn, className }: Props) {
  return (
    <div
      id="home"
      className={`min-h-screen flex flex-col items-center justify-end ${className}`}
    >
      <div className="pb-16 lg:pb-24  mx-4 md:mx-16 lg:mx-32">
        {/* <Image
          src="/images/hotelminds_logo_bg_transparent_big.png"
          alt="Logo hotelminds"
          style={{ width: "250px" }}
          width={250}
          height={125}
          className="mx-auto"
        /> */}
        <h1 className="!text-4xl/10 md:!text-5xl/14 lg:!text-6xl/16 max-w-4xl">
          {data.headline}
        </h1>
       
        {/* <p className="hidden lg:block font-light max-w-3xl mx-auto pt-4"> {data.btnOutro}</p> */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8 items-start justify-center">
               <p className="text-sm font-light md:text-base max-w-2xl">{data.subheader}</p>
          <ContactBtn
            className="hover:bg-gold text-charcoalDark md:w-64"
            text={contactBtn.text}
          />
      
        </div>
      </div>
    </div>
  );
}
