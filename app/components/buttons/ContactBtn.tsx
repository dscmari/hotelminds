import { ArrowRight } from 'lucide-react';
import Link from "next/link";


type Props = {
  className?: string;
  content?: string
};

export default function SEOCheckBtn({ className, content }: Props) {
  return (
    <Link href={"#"}
      className={`bg-cta px-4 py-2 text-offwhite font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap ${className}`}
    >
      {content ? content : "Book a Call"}
    </Link>
  );
}
