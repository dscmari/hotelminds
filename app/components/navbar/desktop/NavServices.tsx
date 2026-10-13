import Link from "next/link";
import Image from "next/image";

type Props = {
  data?: string[]
}

const NavServices = ({data}: Props) => {
  
  return (
    <div>
      <div className="flex p-8 gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <Image
            src="/vercel.svg"
            alt="Logo hotelminds"
            style={{ width: "50px", height: "50px" }}
            width={50}
            height={50}
            className="mx-auto"
          />
          <Link
             href={`/${data?.[1].toLowerCase().replace(/\s+/g, "-")}/`}
            className="text-offwhite text-center text-lg underline underline-offset-4"
          >
            {data?.[1]}
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <Image
            src="/vercel.svg"
            alt="Logo hotelminds"
            style={{ width: "50px", height: "50px" }}
            width={50}
            height={50}
            className="mx-auto"
          />
          <Link
          href={`/${data?.[2].toLowerCase().replace(/\s+/g, "-")}`}
            className="text-offwhite text-center text-lg underline underline-offset-4"
          >
              {data?.[2]}
          </Link>
        </div>
      </div>
      {/* <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button> */}
    </div>
  );
};

export default NavServices;
