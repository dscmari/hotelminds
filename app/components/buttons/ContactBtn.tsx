'use client'
import { CustomBtn } from "@/app/utils/types";
import Link from "next/link";


type Props = CustomBtn

export default function ContactBtn({ className, text}: Props) {
  return (
    <Link href="https://calendly.com/cristian_pop/30min" target="_blank"
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap ${className}`}
    >
      {text}
    </Link>
  );
}
