import { CustomBtn, ServiceBullet, SubserviceData } from "@/app/utils/types";
import ContactBtn from "../buttons/ContactBtn";

type Props = {
  className?: string;
  data: SubserviceData;
  contactBtn?: CustomBtn;
};

export default function ServicesOverview({
  className,
  data,
  contactBtn,
}: Props) {
  return (
    <div className={` ${className}`}>
      <article className="flex items-start justify-between">
        <div className="lg:flex gap-4 md:gap-8 justify-between md:w-full">
          <div className="flex-1">
            <h2>{data.subheadline}</h2>
            <h1 className="max-w-2xl">{data.headline}</h1>
          </div>
          <p className="max-w-lg flex-1">{data.intro}</p>
        </div>
      </article>

      <div className="grid md:grid-cols-3 gap-8 pt-8">
        {data.bullets.map((bullet, index) => (
          <div key={index} className={`max-w-lg`}>
            <h2 className="">{bullet.header}</h2>
            <p>{bullet.text}</p>
          </div>
        ))}
      </div>
      {contactBtn && (
        <ContactBtn text={contactBtn.text} className="lg:hidden mt-8" />
      )}
    </div>
  );
}
