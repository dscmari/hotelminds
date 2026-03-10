'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  content?: string
};

export default function ContactBtn({ className, content}: Props) {
  const pathname = usePathname()
  const reference = pathname === "/de" ? "kontakt" : "contact"
  return (
    <Link href={`${pathname}#${reference}`}
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap ${className}`}
    >
      {content ? content : "Let's Talk"}
    </Link>
  );
}
