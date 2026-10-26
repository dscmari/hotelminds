
import ContactBtn from "./buttons/ContactBtn";
import Image from "next/image";
import { CustomBtn, HeroData } from "../utils/types";

type Props = {
  className?: string;
  data: HeroData;
  contactBtn: CustomBtn;
};

export default function Hero({ data, contactBtn, className}: Props) {
  return (
    <div
      id="home"
      className={`min-h-screen flex flex-col items-center justify-end ${className}`}
    >
      <div className="pb-16 md:pb-24 lg:pb-32  mx-4 md:mx-16 lg:mx-32">
        <Image
          src="/images/HotelMinds_black.png"
          alt="Logo hotelminds"
          width={400}
          height={100}
          className="hidden lg:block"
        />
        <h1 className="!text-4xl/10 md:!text-5xl/14 lg:!text-6xl/16 max-w-4xl text-center lg:text-start dark:!text-charcoalDark">
          {data.headline}
        </h1>

        {/* <p className="hidden lg:block font-light max-w-3xl mx-auto pt-4"> {data.btnOutro}</p> */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-24 items-start justify-center">
          <p className="text-sm font-light md:text-base max-w-2xl dark:!text-charcoalDark">
            {data.subheader}
          </p>
          <ContactBtn
            className="hover:bg-gold text-charcoalDark md:w-64"
          />
        </div>
      </div>
    </div>
  );
}
