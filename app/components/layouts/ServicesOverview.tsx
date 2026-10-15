"use client";
import { CustomBtn, ServiceBullet } from "@/app/utils/types";
import {
  Calculator,
  Compass,
  Cpu,
  Diamond,
  Flag,
  Globe,
  LineChart,
  Network,
  Rocket,
  SearchCheck,
  Sliders,
  Target,
  Wrench,
} from "lucide-react";
import ServiceBtn from "../buttons/ServiceBtn";
import { div, h2 } from "motion/react-client";
import ContactBtn from "../buttons/ContactBtn";

type Props = {
  className?: string;
  data: {
    headline: string;
    services: ServiceBullet[];
  };
  contactBtn?: CustomBtn;
};

export default function ServicesOverview({
  className,
  data,
  contactBtn,
}: Props) {
  return (
    <div className={`flex flex-col xl:flex-row  md:py-16 border-b-1 border-slate-300 ${className}`}>
      <div className="xl:flex-1 md:flex items-start xl:flex-col justify-between">
        <h1 className="md:!text-5xl/14 !tracking-tight max-w-lg">
          {data.headline}
        </h1>
        {/* <ContactBtn text={contactBtn.text} className="md:w-64 hidden md:flex" /> */}
      </div>
      <div className="xl:flex-1 grid md:pt-4 lg:pt-0 md:grid-cols-2 gap-1">
        {data.services.map((service, index) => (
          <div
            key={index}
            className={`md:min-h-28 ${index === 0 ? "flex items-end pb-4 md:pb-0" : "bg-charcoalDark text-offwhite p-4 "}`}
          >
            <div key={index} className="flex items-start gap-2">
              {index !== 0 ? (
                <Diamond className="shrink-0 text-gold mt-1.5" size={12} />
              ) : (
                ""
              )}
              <h2>{service.header}</h2>
            </div>
            <p className={`${index === 0 ? "" : "ml-5"}`}>{service.text}</p>
          </div>
        ))}
      </div>
      {/* <ContactBtn text={contactBtn.text} className="md:hidden mt-12" /> */}
    </div>
  );
}
