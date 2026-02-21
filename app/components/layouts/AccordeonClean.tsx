import { Target, Wrench, Cpu, LineChart } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
};

export default function AccordeonClean({ className }: Props) {
  const home = [
    {
      id: "impact-1",
      icon: <Target />,
      bullet: "Precision over volume",
      text: "We intentionally limit our partnerships to a select group of hotels to ensure maximum analytical depth. This approach allows us to focus on high-impact strategies and granular data precision that mass-market providers simply cannot sustain.",
    },
    {
      id: "impact-2",
      icon: <Wrench />,
      bullet: "Execution instead of theory",
      text: "We don’t just deliver strategies; we bring them to life. Every recommendation is fully implemented within your systems — not handed to you as a static PDF. This ensures that expert insights translate directly into live updates, immediate performance gains, and a reduced workload for your internal team.",
    },
    {
      id: "impact-3",
      icon: <Cpu />,
      bullet: "OTA-native expertise",
      text: "Our expertise is built on years of experience inside Booking.com and deep-level PMS/CM consulting. We don’t guess how algorithms work—we understand the internal logic of the platforms. This insider perspective allows us to navigate the complexities of marketplace distribution with a level of precision that external consultants simply can’t match.",
    },
    {
      id: "impact-4",
      icon: <LineChart />,
      bullet: "Predictable outcomes",
      text: "Success shouldn’t be a matter of luck. We utilize a repeatable, structured process specifically designed to generate measurable uplift. By stripping away the guesswork and relying on a battle-tested framework, we transform market volatility into a reliable roadmap for your hotel’s revenue growth.",
    },
  ];
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
            <h2 className="pointer-events-none !text-base lg:!text-xl !m-0">{e.bullet}</h2>
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
    </div>
  );
}
