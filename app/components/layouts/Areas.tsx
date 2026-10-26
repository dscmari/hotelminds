"use client";
import { CustomBtn, ServiceBullet } from "@/app/utils/types";
import {
  BarChart3,
  Calculator,
  Compass,
  Cpu,
  Diamond,
  Eye,
  Flag,
  Globe,
  LineChart,
  Network,
  Rocket,
  SearchCheck,
  Sliders,
  Target,
  TrendingUp,
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
  contactBtn?: CustomBtn;
};

export default function ServicesOverview({
  className,
  data,
  contactBtn,
}: Props) {
  return (
    <div className={` ${className}`}>
      <div className="flex items-start justify-between">
        <h1 className="md:!text-5xl/14 !tracking-tight max-w-2xl">
          {data.headline}
        </h1>
        {contactBtn && (
          <ContactBtn
            className="hidden md:flex md:w-64"
          />
        )}
      </div>

      <div className="grid md:grid-cols-2  gap-4 md:gap-8 pb-8 lg:pb-12 max-w-6xl">
        {data.services.map((service, index) => (
          <div key={index} className={``}>
            <div className="flex items-start gap-2">
              <Diamond className="shrink-0 text-gold mt-1" size={16} />
              <h2 className="">{service.header}</h2>
            </div>

            <p className="max-w-md ml-6">{service.text}</p>
          </div>
        ))}
      </div>
      {contactBtn && (
        <ContactBtn className="md:hidden" />
      )}
    </div>
  );
}
