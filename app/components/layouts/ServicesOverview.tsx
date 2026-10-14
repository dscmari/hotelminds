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

type Props = {
  className?: string;
  data: {
    headline: string;
    services: ServiceBullet[];
  };
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
  LineChart,
};

export default function ServicesOverview({ className, data }: Props) {
  return (
    <div className={`flex flex-col xl:flex-row ${className}`}>
      <div className="xl:flex-1">
        <h1 className="md:!text-5xl/14 !tracking-tight max-w-lg">{data.headline}</h1>
      </div>
      <div className="xl:flex-1 grid md:pt-4 lg:pt-0 md:grid-cols-2 gap-4">
        {data.services.map((service, index) => (
          <div
            key={index}
            className={`min-h-28 ${index === 0 ? "flex items-end" : "bg-slate-200 p-4 "}`}
          >
            <h2 className="!font-medium">{service.header}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
