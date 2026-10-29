"use client";
import { CustomBtn, ServiceBullet } from "@/app/utils/types";
import {
  Calculator,
  Compass,
  Cpu,
  Flag,
  Globe,
  Network,
  Rocket,
  SearchCheck,
  Sliders,
  Target,
  Wrench,
} from "lucide-react";
import PreOpeningBtn from "../buttons/PreOpeningBtn";

type Props = {
  className?: string;
  data: ServiceBullet[];
  preOpeningBtn: CustomBtn;
};

// Alle potenziell verwendeten Icons in einem Record registrieren
const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  SearchCheck,
  Calculator,
  Globe,
  Sliders,
  Rocket,
  Compass,
  Cpu,
  Network,
  Target,
  Wrench,
  Flag,
};

export default function AccordeonClean({
  className,
  data,
  preOpeningBtn,
}: Props) {
  const home = data.map((bullet, index) => {
    const IconComponent = icons[bullet.icon];
    return {
      id: `impact-${index + 1}`,
      icon: IconComponent ? <IconComponent /> : null,
      bullet: bullet.header,
      text: bullet.text,
    };
  });

  return (
    <div className={`grid md:grid-cols-2 gap-4 lg:gap-8 xl:gap-16 ${className}`}>
      {home.map((e, index) => (
        <div key={e.id} className="group border-b border-slate-300 max-w-xl">
          <input
            type="checkbox"
            id={e.id}
            className="peer hidden"
            defaultChecked={index === 0}
          />
          <span className="flex items-center gap-4 cursor-pointer font-semibold select-none dark:text-offwhite">
            {e.icon}
            <h2 className="pointer-events-none !text-base lg:!text-xl !m-0">
              {e.bullet}
            </h2>
          </span>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-has-[:checked]:grid-rows-[1fr]">
            <div className="py-4 dark:bg-darkmode-blue max-w-lg">
              <p className="whitespace-pre-line font-light">{e.text}</p>
            </div>
          </div>
        </div>
      ))}
      <PreOpeningBtn
        className="mx-auto lg:mx-0 bg-gold mt-8 text-center w-full"

      />
    </div>
  );
}
