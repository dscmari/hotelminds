type ProcessItem = {
  title: string;
  text: string;
};

type Props = {
  className?: string;
  circles: ProcessItem[];
};

export default function Process({ className, circles }: Props) {
  return (
    <section className={`${className}`}>
      <div className="mt-16 flex flex-col lg:flex-row justify-center gap-12 items-center ">
        {circles.map((e, index) => (
          <div key={index}>
            <div
              className={`${index === 2 ? "bg-none" : "bg-offwhite"} lg:relative z-50 h-80 w-80 rounded-full flex flex-col gap-8 items-center border-4 border-gold/40 dark`}
            >
              <div className="relative mt-12 bg-gold w-12 h-12 rounded-full flex items-center justify-center text-charcoalDark font-semibold ">
                {index === 1 && (
                  <div className="absolute z-[-1] left-1/2 -translate-x-1/2 w-[1px] h-[720px] lg:h-2 lg:w-[720px] border-l-3 lg:border-t-3 border-dashed border-gold"></div>
                )}
                <span className="block text-xl">{index + 1}</span>
              </div>
              <div>
                <h2 className="text-center text-custom-red">{e.title}</h2>
                <p className="pt-4 w-3/4 mx-auto text-center font-light text-sm">
                  {e.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
