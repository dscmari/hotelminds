"use client";

import { usePathname, useRouter } from "@/app/i18n/navigation";
import { routing } from "@/app/i18n/routing";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function LanguageSwitcher({ className }: Props) {
  const pathname = usePathname(); // z.B. "/impressum" (ohne Locale)
  const router = useRouter();

  const switchLanguage = (newLocale: (typeof routing.locales)[number]) => {
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <div className={`text-base flex items-center gap-1 ${className}`}>
      {routing.locales.map((l, index) => (
        <div  key={index} className="cursor-pointer hover:shadow" onClick={() => switchLanguage(l)}>
          <Image
            src={`${index === 0 ? "/icons/DE.png" : "/icons/UK.png"}`}
            alt="Language Icon"
            width={32}
            height={32}
            className="text-white min-w-12"
          />
        </div>
      ))}
    </div>
  );
}
