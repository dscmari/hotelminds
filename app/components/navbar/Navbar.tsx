"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import DesktopNavbar from "./desktop/DesktopNavbar";
import LanguageSwitcher from "../LanguageSwitcher";
import { useScrolled } from "@/app/hooks/useScrolled";
import ContactBtn from "../buttons/ContactBtn";
import { useTranslations } from "next-intl";

type Props = {
  className?: string;
};

export default function Navbar({ className}: Props) {
  const navbar = useTranslations("components.navbar");
  const bullets = navbar.raw("bullets") as string[];

  const mobileNavlinks = bullets.slice(0, 5);
  const isScrolled = useScrolled(50);
  const [showMenu, setShowMenu] = useState(false);

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
      <div
        className={`z-100 lg:hidden p-4 fixed w-full ${isScrolled || showMenu ? "bg-offwhite" : ""}`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/hotelminds_logo_bg_transparent.png"
              alt="Logo"
              width={200}
              height={100}
              className="w-30"
            />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
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
            className="min-h-screen"
          >
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col items-end  gap-4 pt-12 pb-4 font-semibold ">
                {mobileNavlinks?.map((bullet: string, index: number) => (
                  <div
                    className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end"
                    key={index}
                  >
                    <Link
                      href={
                        bullet === "Home"
                          ? "/"
                          : bullet === "Über Uns"
                            ? "/about/"
                            : `/${bullet.toLowerCase().replace(/\s+/g, "-")}/`
                      }
                      className="text-right !text-charcoalDark"
                    >
                      {bullet}
                    </Link>
                  </div>
                ))}
              </div>

              <ContactBtn className="mt-12" />
            </div>
          </motion.div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="hidden lg:block z-100 fixed w-full max-w-[2048px]">
        <DesktopNavbar data={bullets} isScrolled={isScrolled} />
      </div>
    </div>
  );
}
