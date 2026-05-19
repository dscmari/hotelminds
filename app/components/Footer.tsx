"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  data: any;
};

export default function Footer({ className, data }: Props) {
  const pathname = usePathname();
  const footer = data.footer;
  return (
    <footer className={`text-offwhite bg-charcoalDark ${className}`}>
      <div className="p-4 lg:pt-32 lg:px-32 grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 order-1 mt-12 lg:mt-0">
          <h1>{footer.headline}</h1>
          <p className="mb-2">{footer.subheader}</p>
        </div>
      </div>
      <div className="px-4 lg:px-32 pt-4 lg:pt-8 flex flex-col lg:flex-row items-center lg:justify-end gap-2 lg:gap-8">
        <Link href={"#"} className="underline">
          {footer.agb}
        </Link>
        <Link href={"#"} className="underline">
          {footer.privacy}
        </Link>
        <Link href={"#"} className="underline">
          {footer.impressum}
        </Link>
      </div>
      <div className="px-4 py-8 lg:px-32 lg:py-16 text-sm font-thin flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 HotelMinds. All rights reserved.</span>
        <span>
          {footer.credit}{" "}
          <a
            href="https://namaste-websites.de"
            className="hover:offwhite transition-colors  underline decoration-[0.1px] underline-offset-4 font-thin"
          >
            Marian Nökel
          </a>
        </span>
      </div>
    </footer>
  );
}
