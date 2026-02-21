
import ContactBtn from "./buttons/ContactBtn";

export default function Hero() {
  return (
    <div className="h-[70vh] lg:h-[80vh] flex flex-col items-center justify-center">
      <div className="mx-4 md:mx-16 lg:mx-32 text-center max-w-4xl">
        <h1 className="!font-semibold lg:!text-6xl/18 !font-geistmono">
          Make your hotel <br /> impossible to ignore.
        </h1>
        <h2>
          Hotelminds combines strategic thinking with refined digital execution
          to help independent and premium hotels stand out in a crowded market
        </h2>
        <div className="mt-12 flex gap-8 items-center justify-center">
          <ContactBtn
            content="Let's connect"
            className="hover:bg-gold text-charcoalDark"
          />
        </div>
      </div>
      {/* <div className="hidden lg:grid grid-cols-6 gap-8 px-4 md:px-16 mt-48 text-center">
        <div className="col-span-2">
          <p>
            We improve how your hotel is found and chosen. Six months. Four pillars. One goal: predictable revenue.
          </p>
        </div>
        <div>
          <p>Visible Optimation</p>
        </div>
        <div>Conversion Architecture</div>
        <div><p>Performance Stability</p></div>
        <div><p>Strategic Steering</p></div>
      </div> */}
    </div>
  );
}
