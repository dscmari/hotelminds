"use client";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
  t,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
  t: any;
}) => {
  const router = useRouter();
  const hasLink = !!t.link;
  const handleClick = () => {
    if (hasLink) {
      router.push(t.link);
    }
  };
  return (
    /* Display Menu just for Services */
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => !hasLink && handleSetSelected(tab)}
      onClick={() => handleClick()}
      className={`flex items-center gap-1 rounded p-4 transition-colors text-custom-black ${
        selected === tab ? "underline cursor-pointer" : ""
      } ${hasLink ? "!cursor-pointer hover:underline" : ""}`}
    >
      {children}
      <ChevronDown
        className={`transition-transform duration-300 size-6 text-charcoalDark ${
          selected === tab ? "[transform:rotateX(180deg)]" : ""
        } ${hasLink ? "hidden" : ""}`}
      />
    </button>
  );
};

export default Tab;
