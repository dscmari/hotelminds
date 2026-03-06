import Image from "next/image";
import { Calculator, Globe, SearchCheck, Sliders } from "lucide-react";
import ContactBtn from "../components/buttons/ContactBtn";
import Hero from "../components/Hero";
import AccordeonClean from "../components/layouts/AccordeonClean";
import { dictionary } from "../utils/dictionary";
import { PageParams } from "../types/i18n";
import Process from "../components/Process";
import InfoBtn from "../components/buttons/InfoBtn";

export default async function Home({ params }: PageParams) {
  const { locale } = await params;
  const data = await dictionary(locale);
  return (
    <div>
      <Hero params={params} />

      <section
        id={`${locale === "de" ? "strategie" : "strategy"}`}
        className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 lg:p-32 scroll-mt-24"
      >
        <div className="flex flex-col xl:flex-row xl:items-start gap-24 lg:gap-32">
          <div className="flex-1 flex flex-col items-start gap-4">
            <span className="mx-auto text-center lg:text-start lg:mx-0">
              How We Work
            </span>
            <h1 className="mx-auto lg:mx-0 lg:!text-5xl !tracking-tight">
              TODO Strategy
            </h1>
            <p className="text-center lg:text-start lg:text-base/8">
              Many hotels invest in marketing, adjust pricing frequently, and
              participate in multiple distribution platforms — yet still
              struggle with visibility, margin pressure, and inconsistent
              performance.
            </p>
            <p className="text-center lg:text-start lg:text-base/8 mb-8">
              Ranking fluctuates. Competitors outperform you. Commission costs
              increase. Direct bookings remain unpredictable.
            </p>
            <ContactBtn className="mx-auto lg:mx-0 bg-gold" />
          </div>
          <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                <SearchCheck className="shrink-0" />
                <h2>Increase Visibility Where It Matters</h2>
              </div>

              <p className="text-base/8">
                We optimize your positioning across OTA platforms and
                distribution channels so your hotel appears higher, captures
                more demand, and competes strategically — not reactively.
                Stronger search visibility and better demand capture.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                <Calculator className="shrink-0" />
                <h2>Convert More Demand Into Revenue</h2>
              </div>
              <p className="text-base/8">
                We optimize rate architecture, content positioning, and pricing
                logic across all channels to ensure visitors convert into
                profitable bookings. Higher conversion, improved ADR, and
                stronger margin protection.
              </p>
            </div>{" "}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                <Globe className="shrink-0" />
                <h2>Build Structured Pricing & Channel Control</h2>
              </div>
              <p className="text-base/8">
                We design and align your pricing strategy across OTAs, direct
                website, and additional channels — reducing leakage,
                inconsistencies, and unnecessary discounting. Clear pricing
                logic and controlled distribution instead of dependency.
              </p>
            </div>{" "}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                <Sliders className="shrink-0" />
                <h2>Strategic Revenue Growth Steering</h2>
              </div>
              <p className="text-base/8">
                We monitor performance continuously and adjust positioning,
                pricing, and channel strategy in response to market shifts.
                Long-term stability and structured revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-24 px-4 lg:pt-32 lg:px-32">
        <div className="flex flex-col gap-4">
          <span className="mx-auto">How We Work</span>
          <h1 className="text-center lg:!text-5xl !tracking-tight">PROCESS</h1>
          <p className="max-w-4xl font-light lg:text-center mx-auto">
            Our structured approach begins with a comprehensive Audit &
            Diagnosis to uncover hidden revenue potential. We then translate
            these insights into a Strategic Roadmap with a clear 6–9 month
            action plan, ensuring long-term growth through disciplined
            Implementation & Monitoring.
          </p>
        </div>
        <Process
          className="lg:pt-12 px-4 lg:px-32 lg:pb-48"
          circles={data.process}
        />
      </section>
   
      <section className="px-4 py-24 md:p-16 lg:p-32">
        <div className="flex flex-col gap-4">
          <span className="mx-auto">Impact</span>
          <h1 className="text-center lg:!text-5xl !tracking-tight">
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
      <div className="h-40 bg-gold"></div>
      <div className="h-40 bg-offwhite"></div>
      <div className="h-40 bg-charcoalDark"></div>
      <div className="h-40 bg-charcoalLight"></div>
    </div>
  );
}
