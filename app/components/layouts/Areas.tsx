"use client";
import { CustomBtn, ServiceBullet } from "@/app/utils/types";
import {
  BarChart3,
  Calculator,
  Compass,
  Cpu,
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
       {contactBtn && <ContactBtn text={contactBtn.text} className="hidden md:flex md:w-64" />} 
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 pt-4 pb-8 lg:pb-12">
        {data.services.map((service, index) => (
          <div key={index} className={`md:p-4`}>
            <h2 className="">{service.header}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
        {contactBtn && <ContactBtn text={contactBtn.text} className="md:hidden" />} 
    </div>
  );
}
