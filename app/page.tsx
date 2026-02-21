import Image from "next/image";
import Hero from "./components/Hero";
import ContactBtn from "./components/buttons/ContactBtn";
import { Calculator, Globe, SearchCheck, Sliders } from "lucide-react";
import AccordeonClean from "./components/layouts/AccordeonClean";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 lg:p-32">
        <div className="flex flex-col xl:flex-row xl:items-start gap-24 lg:gap-32">
          <div className="flex-1 flex flex-col items-start gap-4">
            <span className="mx-auto lg:mx-0">6-month transformation</span>
            <h1 className="mx-auto lg:mx-0 lg:!text-5xl lg:!font-medium">
              What we do
            </h1>
            <p className="text-center lg:text-start mb-8 lg:text-base/8">
              We improve how your hotel is found and chosen — across OTAs,
              metasearch and direct — creating a consistent and predictable
              stream of revenue.
            </p>
            <ContactBtn className="mx-auto lg:mx-0 bg-gold" />
          </div>
          <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                <SearchCheck className="shrink-0" />
                <h2>Visibility Optimization</h2>
              </div>

              <p className="text-base/8">
                Drive visibility and conversions through a targeted OTA ranking
                strategy, refined content and photo architecture, comprehensive
                amenity mapping, and the strategic optimization of review impact
                and search positioning.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                <Calculator className="shrink-0" />
                <h2>Conversion Architecture</h2>
              </div>
              <p className="text-base/8">
                Maximize revenue potential by integrating sophisticated pricing
                logic and room sequencing with USP clarity, emotional content
                resonance, and the combined efficiency of optimized rate plans
                and cancellation strategies.
              </p>
            </div>{" "}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                <Globe className="shrink-0" />
                <h2>Performance Stability</h2>
              </div>
              <p className="text-base/8">
                Ensure long-term performance stability by synchronizing
                metasearch data, maintaining strict parity control, and ensuring
                consistency across all channels while continuously improving the
                direct-booking pathway.
              </p>
            </div>{" "}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                <Sliders className="shrink-0" />
                <h2>Strategic Steering</h2>
              </div>
              <p className="text-base/8">
                Drive sustainable growth through monthly performance reviews and
                tactical adjustments, leveraging competitor intelligence and
                continuous seasonal playbook optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-24 md:p-16 lg:p-32">
        <div className="flex flex-col gap-4">
          <span className="mx-auto">Impact</span>
          <h1 className="text-center lg:!text-5xl">
            Why premium hotels choose hotelminds
          </h1>
          <p className="max-w-4xl font-light lg:text-center mx-auto">
            Hotels lose revenue not because of bad service — but because guests
            never find them. Visibility, ranking, conversion, content quality,
            metasearch consistency, rate competitiveness — all these decide
            whether a hotel gets booked or ignored. Most independent hotels
            can’t manage this complexity internally. That’s where we step in.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:flex-row gap-16 mt-12 lg:mt-32">
             <div className="flex-1">
            <Image
              src="/images/consulting_stock.jpg"
              alt="Business environment in the office"
              width={800}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div>
          <AccordeonClean className="flex-1" />
       
        </div>
      </section>
      {/* <div className="h-40 bg-gold"></div>
      <div className="h-40 bg-offwhite"></div>
      <div className="h-40 bg-charcoalDark"></div>
      <div className="h-40 bg-charcoalLight"></div> */}
    </div>
  );
}
