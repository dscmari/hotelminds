"use client";
import { CustomBtn } from "@/app/utils/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
type Props = {
  className?: string
}



export default function ContactBtn({ className}: Props) {
  const t = useTranslations('components.contactBtn');

  return (
    <Link
      href={t("link")}
      target="_blank"
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl whitespace-nowrap flex gap-4 justify-center items-center w-full ${className}`}
    >
      {t("text")}
      <ExternalLink className="shrink-0 text-offwhite" size={20} />
    </Link>
  );
}
