'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  content?: string
};

export default function ContactBtn({ className, content}: Props) {
    console.log("contact btn is called")
  const pathname = usePathname()
  const isEnglish = pathname === "/de"
  console.log(isEnglish)
  const reference = pathname === "/de" ? "#" : "#"
  const text = pathname === "/de" ? "#" : "#"
  return (
    <Link href={reference}
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap ${className}`}
    >
      {content ? content : "test"}
    </Link>
  );
}
