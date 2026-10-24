"use client";
import Link from "next/link";
import { CustomBtn } from "@/app/utils/types";

type Props = CustomBtn;

export default function TeamBtn({ className, text, link }: Props) {
  const href = link || "/team/";
  return (
    <Link
      href={href}
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl whitespace-nowrap flex gap-4 justify-center items-center w-full md:max-w-64 ${className}`}
    >
      {text}
    </Link>
  );
}