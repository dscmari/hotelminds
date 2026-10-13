"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomBtn } from "@/app/utils/types";

type Props = CustomBtn;

export default function ServiceBtn({ className, text, link }: Props) {
  const href = link || "#";
  return (
    <Link
      href={href}
      className={`bg-cta px-6 py-2 text-offwhite font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap ${className}`}
    >
      {text}
    </Link>
  );
}
