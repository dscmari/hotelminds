import Image from "next/image";
import {
  Calculator,
  CircleCheckBig,
  Globe,
  SearchCheck,
  Sliders,
} from "lucide-react";
import ContactBtn from "../components/buttons/ContactBtn";
import Hero from "../components/Hero";
import AccordeonClean from "../components/layouts/AccordeonClean";
import { dictionary } from "../utils/dictionary";
import { PageParams } from "../types/i18n";
import Process from "../components/Process";
import ThreeBoxLayout from "../components/layouts/ThreeBoxLayout";

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
              Most Hotels Don’t Have a Marketing Problem. They Have a
              Distribution Problem.
            </span>
            <h1 className="mx-auto lg:mx-0 lg:!text-5xl !tracking-tight">
              Strategy
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
      <section
        id={`${locale === "de" ? "prozess" : "process"}`}
        className="pt-24 pb-24 px-4 lg:pt-32 lg:px-32"
      >
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
      <section
        id={`${locale === "de" ? "ergebnisse" : "results"}`}
        className="bg-charcoalDark text-offwhite p-4 py-24 md:p-16 lg:p-32 scroll-mt-24"
      >
        <div className="flex flex-col gap-4">
          <span className="mx-auto">From Reactive to Strategic</span>
          <h1 className="text-center lg:!text-5xl !tracking-tight">Results</h1>
          <p className="max-w-4xl font-light lg:text-center mx-auto">
            Our strategic approach transforms your hotel's market presence from
            reactive price-matching to proactive revenue leadership. We bridge
            the gap between inconsistent visibility and a high-performing,
            direct-booking-driven distribution model.
          </p>
        </div>
        <ThreeBoxLayout
          className="bg-charcoalDark text-charcoalDark pt-24 lg:pt-32"
          boxes={data.results}
        />
      </section>
      <section
        id={`${locale === "de" ? "ueber-uns" : "about"}`}
        className="px-4 py-24 md:p-16 lg:p-32"
      >
        <div className="flex flex-col gap-4">
          <span className="mx-auto">Why HotelMinds</span>
          <h1 className="text-center lg:!text-5xl !tracking-tight">ABOUT</h1>
          <p className="max-w-4xl font-light lg:text-center mx-auto">
            We bridge the gap between platform-level expertise and independent
            strategic thinking. Unlike traditional distribution platforms, we
            operate with complete neutrality, representing your interests across
            the entire landscape rather than favoring a single ecosystem. Our
            methodology is inherently structured and data-driven, moving beyond
            generic consulting to focus exclusively on measurable revenue
            performance. By building sophisticated distribution systems, we
            provide our partners with the clarity, control, and foundational
            stability required for sustainable growth
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
      <section className="px-4 py-24 md:p-16 lg:p-32">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-24 lg:border-b-1 border-slate-300 pb-12">
          <div className="flex-1 flex flex-col gap-4">
            <span className="">
              Partnership
            </span>
            <h1 className="lg:!text-5xl !tracking-tight">
              We partner with hotels that value strategic growth and operational
              clarity
            </h1>
          </div>
          <p className="flex-1 lg:text-base/8 max-w-xl">
            We partner with forward-thinking hotels and groups that prioritize
            long-term independence over short-term fixes. For our clients,
            strategic growth and a clear competitive edge are not just goals,
            but the foundation of their operational mindset.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24 lg:mt-24">
          <div className="flex-1">
            <Image
              src="/images/hotelcouch_stock.jpg"
              alt="Business environment in the office"
              width={800}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="lg:max-w-sm">
              Independent properties, premium hotels, resorts, and hotel groups
              who want to
            </h2>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-start gap-4">
                <CircleCheckBig className="text-gold shrink-0" />
                <span>Increase revenue without increasing dependency</span>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheckBig className="text-gold shrink-0" />
                <span>Strengthen direct performance</span>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheckBig className="text-gold shrink-0" />
                <span>Gain control over pricing and distribution</span>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheckBig className="text-gold shrink-0" />
                <span>
                  Compete strategically instead of reacting to market pressure
                </span>
              </div>
              <p className="font-semibold mt-4">
                Mindset matters more than size or geography.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-40 bg-gold"></div>
      <div className="h-40 bg-offwhite"></div>
      <div className="h-40 bg-charcoalDark"></div>
      <div className="h-40 bg-charcoalLight"></div>
    </div>
  );
}
