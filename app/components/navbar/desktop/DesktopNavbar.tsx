"use client";
import Image from "next/image";
import Link from "next/link";
import ContactBtn from "../../buttons/ContactBtn";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { ShiftingDropDown } from "./ShiftingDropDown";
import { useScrolled } from "@/app/hooks/useScrolled";
import { CustomBtn } from "@/app/utils/types";

type Props = {
  className?: string;
  data: string[]
  contactBtn: CustomBtn
  isScrolled: boolean
};

export default function DesktopNavbar({
  className,
  data,
  contactBtn,
  isScrolled
}: Props) {

  return (
    <div
      className={`mx-auto z-50 px-8 transition-all duration-200 border-charcoalDark/10 ${isScrolled ? "bg-offwhite p-0 border-b " : "p-4"} ${className}`}
    >
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
      <div className="flex items-center gap-8 p-4 pb-0">
        <Link href={"/"}>
          {" "}
          <Image
            src="/images/hotelminds_logo_bg_transparent.png"
            alt="Logo hotelminds"
            style={{ width: "150px" }}
            width={150}
            height={75}
          />
        </Link>
        <div className="flex items-center justify-between w-full">
          <ShiftingDropDown data={data} />
          {/* <div className="flex items-center gap-8">
            {data.navbar.bullets.map((bullet: string, index: number) => (
              <Link href={`${bullet === "Über uns" ? `${pathname}#ueber-uns` : `${pathname}#${bullet.toLowerCase()}`} `} className="font-semibold" key={index}>
                {bullet}
              </Link>
            ))}
          </div> */}
          <div className="flex items-center gap-8">
             <LanguageSwitcher /> 
            <ContactBtn className="hover:bg-gold" text={contactBtn.text} />
          </div>
        </div>
      </div>
    </div>
  );
}
