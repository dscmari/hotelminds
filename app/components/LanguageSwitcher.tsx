"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/app/i18n/navigation";
import { routing } from "@/app/i18n/routing";

type Props = {
  className?: string;
};

export default function LanguageSwitcher({ className }: Props) {
  const pathname = usePathname(); // z.B. "/impressum" (ohne Locale)
  const router = useRouter();
  const locale = useLocale();

  const switchLanguage = (newLocale: (typeof routing.locales)[number]) => {
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <div className={`text-base flex items-center gap-1 lg:gap-4 ${className}`}>
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLanguage(l)}
          className={`p-1 lg:p-2 !font-normal rounded-xl ${
            locale === l ? "bg-cta/10" : "cursor-pointer hover:underline"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
