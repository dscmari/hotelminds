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
  TrendingDown,
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
    <div
      className={`flex flex-col xl:flex-row gap-8 xl:gap-16 2xl:gap-32  md:py-16 border-b-1 border-slate-300 ${className}`}
    >
      <div className="xl:flex-1">
        <h1 className="max-w-lg">{data.headline}</h1>
        <p className="max-w-xl">{data.services[0].text}</p>
        {/* <ContactBtn text={contactBtn.text} className="md:w-64 hidden md:flex" /> */}
      </div>
      <div className="xl:flex-1 flex flex-col gap-4">
        {data.services.slice(1).map((service, index) => (
          <div key={index} className={``}>
            <div key={index} className="flex items-start gap-2">
              <TrendingDown className="shrink-0 text-gold mt-1.5" size={16} />
              <h2 className="!mb-0">{service.header}</h2>
            </div>
            <p className={`ml-6.5`}>{service.text}</p>
          </div>
        ))}
      </div>
      {/* <ContactBtn text={contactBtn.text} className="md:hidden mt-12" /> */}
    </div>
  );
}
