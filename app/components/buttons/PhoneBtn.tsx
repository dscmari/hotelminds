import { Phone } from "lucide-react";
import Link from "next/link";

export default function PhoneBtn() {
  return (
    <Link href="tel:+491791769307" className="flex items-center gap-4">
      <Phone className="shrink-0 size-6 text-sage" />
      <span className="!cursor-pointer text-lg underline underline-offset-2">
        +49 179 1769307
      </span>
    </Link>
  );
}
