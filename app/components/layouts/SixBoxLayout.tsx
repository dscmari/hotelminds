import { ServiceBullet } from "@/app/utils/types"
import { Network } from "inspector"
import { SearchCheck, Calculator, Globe, Sliders, Rocket, Compass, Cpu, Target, Wrench, Flag, Clock, Tag, UserX, MoonStar, X, Zap } from "lucide-react"


type Props = {
    className?:string,
    boxes: ServiceBullet[]
}

// Alle potenziell verwendeten Icons in einem Record registrieren
const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  SearchCheck,
  Calculator,
  Globe,
  Sliders,
  Rocket,
  Compass,
  Cpu,
  Target,
  Wrench,
  Flag,
  Clock,
  Tag,
  UserX,
  MoonStar,
  Zap
};

export default function SixBoxLayout({className, boxes}: Props) {
  const firstBoxes = boxes.slice(1,5)

    const services = firstBoxes.map((bullet) => {
    const IconComponent = icons[bullet.icon];
    return {
      icon: IconComponent ? <IconComponent /> : null,
      header: bullet.header,
      text: bullet.text,
    };
  });
  return (
     <div className={`grid md:grid-cols-2 gap-2 max-w-lg ${className}`}>
          {services.map((e, index) => (
            <div
              key={index}
              className="lg:aspect-square flex flex-col justify-between p-8 lg:p-4 xl:p-8 bg-white"
            >
              <div className="flex flex-col">
                {e.icon}
                <h2 className="pt-4">{e.header}</h2>
                <p className="lg:text-sm">{e.text}</p>
              </div>

              {/* <button className="self-start rounded-xl text-custom-red bg-custom-red-op px-4 py-2 mt-8 text-sm">
                Mehr Infos
              </button> */}
            </div>
          ))}
        </div>
  )
}
