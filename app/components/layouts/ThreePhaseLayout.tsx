import { Diamond, SquarePen, Trophy, Zap } from "lucide-react";

type Props = {
  className?: string;
  data: any;
};

export default function ThreePhaseLayout({ className, data }: Props) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-4">
        <span className="font-thin">{data.results.subheader}</span>
        <h1 className="lg:!text-5xl !tracking-tight">
          {data.results.headline}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-16 lg:-mt-16">
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
        <div>
          <div className="hidden lg:block h-30 border-t border-l border-gray-400 rounded-tl-xl"></div>
          <div className="mt-8 lg:relative">
            <div className="flex gap-4 ">
              <Trophy className="text-offwhite shrink-0" />
              <h2>{data.results.steps[2].title}</h2>
            </div>
            <div className="lg:absolute flex flex-col gap-2 mt-2">
              {data.results.steps[2].bullets.map(
                (bullet: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <Diamond className="shrink-0 text-gold mt-1.5" size={12} />
                    <span>{bullet}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div></div>{" "}
        <div>
          <div className="hidden lg:block h-30 border-l border-t border-gray-400 rounded-tl-xl"></div>
          <div className="mt-8 lg:relative">
            <div className="flex gap-4 ">
              <SquarePen className="text-offwhite shrink-0" />
              <h2>{data.results.steps[1].title}</h2>
            </div>
            <div className="lg:absolute flex flex-col gap-2 mt-2">
              {data.results.steps[1].bullets.map(
                (bullet: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <Diamond className="shrink-0 text-gold mt-1.5" size={12} />
                    <span>{bullet}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <div className="hidden lg:block h-30 border-l border-t border-gray-400 rounded-tl-xl"></div>
          <div className="mt-8">
            <div className="flex gap-4 ">
              <Zap className="text-offwhite shrink-0" />
              <h2>{data.results.steps[0].title}</h2>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {data.results.steps[0].bullets.map(
                (bullet: any, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <Diamond className="shrink-0 text-gold mt-1.5" size={12} />
                    <span>{bullet}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
