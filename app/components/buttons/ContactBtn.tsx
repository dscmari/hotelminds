'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  content?: string
};

export default function ContactBtn({ className, content}: Props) {
  //const pathname = usePathname()
  //const reference = pathname === "/de" ? "kontakt" : "contact"
  return (
    <Link href="https://calendly.com/cristian_pop/30min"
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap ${className}`}
    >
      {content ? content : "Book a 20-Minute Intro Call"}
    </Link>
  );
}
