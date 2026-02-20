import Image from "next/image";
import Link from "next/link";
import { ShiftingDropDown } from "./ShiftingDropDown";
import { Mail, Phone } from "lucide-react";
import ContactBtn from "../../buttons/ContactBtn";

type Props = {
  className?: string;
};

export default function DesktopNavbar({ className }: Props) {
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
        <Link href={"/"}>
          {" "}
          <Image
            src="/images/logo_bgOffwhite.png"
            alt="Logo hotelminds"
            style={{ width: "150px" }}
            width={150}
            height={75}
          />
        </Link>
        <div className="flex items-center justify-between w-full">
          <ShiftingDropDown />
          <div className="flex items-center">
            <ContactBtn className="hover:bg-gold text-charcoalDark"/>
          </div>
        </div>
      </div>
    </div>
  );
}
