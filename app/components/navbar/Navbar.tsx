"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import DesktopNavbar from "./desktop/DesktopNavbar";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

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
              className="w-40"
            />
          </Link>
          <div className="flex items-center">
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
              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link className="text-right text-charcoalDark" href="#">
                  Home
                </Link>
              </div>
              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link className="text-right text-charcoalDark" href="#">
                  Services
                </Link>
              </div>
              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link className="text-right text-charcoalDark" href="#">
                  About
                </Link>
              </div>
              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link className="text-right text-charcoalDark" href="#">
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
    </div>
  );
}
