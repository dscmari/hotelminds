"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import DesktopNavbar from "./desktop/DesktopNavbar";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  locale: string;
  data: any;
};

export default function Navbar({ className, locale, data }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    toggleX();
    setShowMenu(!showMenu);
  };

  const toggleX = () => {
    const burgerMenu = document.getElementById("burger-menu");
    const spans = burgerMenu?.getElementsByTagName("span");

    if (spans) {
      Array.from(spans).forEach((span) => {
        span.classList.toggle("open");
      });
    }
  };

  return (
    <div className={`${className}`}>
      {/* Mobile */}
      <div className="lg:hidden p-4 md:p-12 fixed bg-offwhite w-full">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo_bgOffwhite.png"
              alt="Logo"
              width={200}
              height={100}
              className="w-30"
            />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher locale={locale} />
            <div className="burgermenu" id="burger-menu" onClick={toggleMenu}>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </div>
          </div>
        </div>
        {showMenu ? (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            onClick={toggleMenu}
          >
            <div className="flex flex-col items-end  gap-4 py-12 font-semibold ">
              {data.navbar.bullets.map((bullet: string, index: number) => (
                <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end" key={index}>
                  <Link
                    href={`${pathname}#${bullet.toLowerCase()}`}
                    className="text-right text-charcoalDark"
                  >
                    {bullet}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="hidden lg:block fixed bg-offwhite w-full">
        <DesktopNavbar pathname={pathname} locale={locale} data={data} />
      </div>
    </div>
  );
}
