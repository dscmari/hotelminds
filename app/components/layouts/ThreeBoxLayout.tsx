import { Diamond } from "lucide-react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import ContactBtn from "../buttons/ContactBtn";

type Box = {
  icon: string;
  title: string;
  subTitle: string;
  introText: string;
  bulletsHeader: string;
  bullets: string[];
  closingText?: string;
  outroText?: React.ReactNode;
  contactText?: string;
};

type Props = {
  className?: string;
  boxes: Box[];
};

export default function ThreeBoxLayout({ className, boxes }: Props) {
  return (
    <section className={`${className}`}>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-4 xl:justify-around">
        {boxes.map((e, index) => (
          <div
            key={index}
            className="bg-offwhite text-charcoalDark flex flex-col justify-between xl:flex-1 xl:m-0 p-8 rounded-lg dark"
          >
            <div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-offwhite bg-gold font-semibold tracking-tight py-1 px-2 rounded-lg">
                  {e.icon}
                </span>
                <span className="font-semibold tracking-tight">{e.title}</span>
                <span className="font-light">{e.subTitle}</span>
              </div>

              <h1 className="text-center mt-16">{e.title}</h1>
              <p className="mt-4 mb-8 font-light text-sm">{e.introText}</p>
              <span className="font-semibold tracking-tight">
                {e.bulletsHeader}
              </span>
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 mt-2"
              >
                {e.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Diamond className="shrink-0 text-gold mt-1.5" size={12} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <ContactBtn className="mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
