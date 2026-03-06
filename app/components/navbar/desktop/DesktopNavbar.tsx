"use client";

import Link from "next/link";
import ContactBtn from "../../buttons/ContactBtn";
import LanguageSwitcher from "@/app/components/navbar/LanguageSwitcher";


type Props = {
  className?: string;
  locale?: string;
  pathname: string;
  data: any;
};

export default function DesktopNavbar({ className, locale, pathname, data }: Props) {
  return (
    <div className={` p-4 px-8 ${className}`}>
      {/* <div className="flex gap-8 justify-end items-center text-sm">
        <div className="flex gap-2 items-center">
          <Phone/>
          <span>+49 1234 567891</span>
        </div>
        <div className="flex gap-2 items-center">
          <Mail />
          <a href="#">info@mail.io</a>
        </div>
      </div> */}
      <div className="flex items-center gap-8 p-4">
        {/* <Link href={"/"}>
          {" "}
          <Image
            src="/images/logo_bgOffwhite.png"
            alt="Logo hotelminds"
            style={{ width: "150px" }}
            width={150}
            height={75}
          />
        </Link> */}
        <div className="flex items-center justify-between w-full">
          {/* <ShiftingDropDown /> */}
          <div className="flex items-center gap-8">
            {data.navbar.bullets.map((bullet: string, index: number) => (
              <Link href={`${pathname}#${bullet.toLowerCase()}`} className="font-semibold" key={index}>
                {bullet}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <LanguageSwitcher locale={locale} />
            <ContactBtn className="hover:bg-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}
