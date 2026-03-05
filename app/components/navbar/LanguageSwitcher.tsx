"use client";

import { usePathname, useRouter } from "next/navigation";

type Props = {
  className?: string;
  locale?: string;
};

export default function LanguageSwitcher({ className, locale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    if (!pathname) return "/";

    // pathname ist z.B. "/de/route-a"
    const segments = pathname.split("/");

    // segments[0] ist leer (wegen des führenden /)
    // segments[1] ist das aktuelle locale (z.B. "de")
    segments[1] = newLocale;

    const newPath = segments.join("/");

    // Navigiert zu "/en/route-a"
    router.push(newPath);
  };

  return (
    <div className={`text-base flex items-center gap-1 lg:gap-4 ${className}`}>
      <button
        onClick={() => switchLanguage("en")}
        className={`p-1 lg:p-2 !font-normal rounded-xl  ${locale === "en" ? "bg-slate-200" : "cursor-pointer hover:underline"}`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("de")}
        className={`p-1 lg:p-2 !font-normal rounded-xl  ${locale === "de" ? "bg-slate-200" : "cursor-pointer hover:underline"}`}
      >
        DE
      </button>
    </div>
  );
}
