"use client";
import ContactBtn from "../../buttons/ContactBtn";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { ShiftingDropDown } from "./ShiftingDropDown";
import { CustomBtn } from "@/app/utils/types";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
  data: string[];
  contactBtn: CustomBtn;
  isScrolled: boolean;
};

export default function DesktopNavbar({
  className,
  data,
  contactBtn,
  isScrolled,
}: Props) {
  const pathname = usePathname();
  const legalSlugs = [
    "agb",
    "terms",
    "datenschutz",
    "privacy",
    "impressum",
    "imprint",
  ];
  const currentSegment = pathname?.split("/").filter(Boolean).pop();
  const isLegal = currentSegment ? legalSlugs.includes(currentSegment) : false;

  return (
    <div
      className={`mx-auto z-50 px-8 transition-all duration-200 border-charcoalDark/10 ${isScrolled ? "bg-offwhite p-0 border-b " : "p-4"} ${isLegal ? " dark:bg-offwhite" : ""} ${className}`}
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
        {/* <Link href={"/"}>
          {" "}
          <Image
            src="/images/hotelminds_logo_bg_transparent.png"
            alt="Logo hotelminds"
            style={{ width: "120px" }}
            width={120}
            height={60}
          />
        </Link> */}
        <Link href={"/"}>
          <Home className="shrink-0 text-charcoalDark mb-2" />
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
