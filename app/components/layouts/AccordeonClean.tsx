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
import ServiceBtn from "../buttons/ServiceBtn";

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
    <div className={`flex flex-col gap-4 ${className}`}>
      {home.map((e, index) => (
        <div key={e.id} className="group border-b border-slate-300">
          <input
            type="checkbox"
            id={e.id}
            className="peer hidden"
            defaultChecked={index === 0}
          />
          <label
            htmlFor={e.id}
            className="flex items-center gap-4 p-4 cursor-pointer font-semibold select-none"
          >
            {e.icon}
            <h2 className="pointer-events-none !text-base lg:!text-xl !m-0">
              {e.bullet}
            </h2>
          </label>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-has-[:checked]:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="p-4 lg:pl-12 dark:bg-darkmode-blue">
                <p className="whitespace-pre-line font-light">{e.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ServiceBtn
        className="mx-auto lg:mx-0 bg-gold mt-8 text-center"
        text={preOpeningBtn.text}
        link={preOpeningBtn.link}
      />
    </div>
  );
}
