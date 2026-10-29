"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = {
    className?: string
}

export default function AboutBtn({ className }: Props) {
  const t = useTranslations('components.aboutBtn');

  return (
    <Link
      href={t("link")}
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl whitespace-nowrap flex gap-4 justify-center items-center w-full md:max-w-64 ${className}`}
    >
      {t("text")} <span className="sr-only">{t("description")}</span>
    </Link>
  );
}
