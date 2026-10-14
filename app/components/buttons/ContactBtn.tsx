"use client";
import { CustomBtn } from "@/app/utils/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type Props = CustomBtn;

export default function ContactBtn({ className, text }: Props) {
  return (
    <Link
      href="https://calendly.com/cristian_pop/30min"
      target="_blank"
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl whitespace-nowrap flex gap-4 justify-center items-center w-full ${className}`}
    >
      {text}

      <ExternalLink className="shrink-0 text-offwhite" size={20} />
    </Link>
  );
}
