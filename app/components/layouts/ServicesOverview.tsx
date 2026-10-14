"use client";
import { CustomBtn, ServiceBullet } from "@/app/utils/types";
import {
  Calculator,
  Compass,
  Cpu,
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
import { div } from "motion/react-client";
import ContactBtn from "../buttons/ContactBtn";

type Props = {
  className?: string;
  data: {
    headline: string;
    services: ServiceBullet[];
  };
    contactBtn: CustomBtn
};

export default function ServicesOverview({ className, data, contactBtn }: Props) {
  return (
    <div className={`flex flex-col xl:flex-row ${className}`}>
      <div className="xl:flex-1 md:flex items-start xl:flex-col justify-between">
        <h1 className="md:!text-5xl/14 !tracking-tight max-w-lg">{data.headline}</h1>
           <ContactBtn text={contactBtn.text} className="md:w-64 hidden md:flex" />
      </div>
      <div className="xl:flex-1 grid md:pt-4 lg:pt-0 md:grid-cols-2 gap-4">
        {data.services.map((service, index) => (
          <div
            key={index}
            className={`md:min-h-28 ${index === 0 ? "flex items-end" : "bg-cta/10 p-4 "}`}
          >
            <h2 className="!font-medium">{service.header}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
          <ContactBtn text={contactBtn.text} className="md:hidden mt-12" />
    </div>
  );
}
