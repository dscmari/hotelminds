import Link from "next/link";
import Image from "next/image";

type Props = {
  data?: string[];
};

const NavServices = ({ data }: Props) => {
  console.log(data)
  const srcExistingHotel =
    data?.[1] === "Existing Hotel Performance"
      ? "/icons/existingHotel_en.png"
      : "/icons/existingHotel_de.png";
  const srcPreOpening =
    data?.[1] === "Existing Hotel Performance"
      ? "/icons/preOpening_en.png"
      : "/icons/preOpening_de.png";
  return (
    <div>
      <div className="flex">
        <Link
          href={`/${data?.[1].toLowerCase().replace(/\s+/g, "-")}/`}
          className="flex-1 border-r border-offwhite/50"
        >
          <Image
            src={srcExistingHotel}
            alt="Logo hotelminds"
            style={{ width: "200px", height: "200px" }}
            width={200}
            height={200}
            className="mx-auto"
          />
        </Link>
        <Link
          href={`/${data?.[2].toLowerCase().replace(/\s+/g, "-")}/`}
          className="flex-1 border-l border-offwhite/50"
        >
          <Image
            src={srcPreOpening}
            alt="Logo hotelminds"
            style={{ width: "200px", height: "200px" }}
            width={200}
            height={200}
            className="mx-auto"
          />
        </Link>
      </div>
      {/* <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button> */}
    </div>
  );
};

export default NavServices;
