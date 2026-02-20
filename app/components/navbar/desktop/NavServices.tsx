import Link from "next/link";

const NavServices = () => {
  return (
    <div>
      <div className="flex gap-16 p-16">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl  mb-2 font-semibold text-offwhite">Service 1</h3>
          <Link href="#" className="text-offwhite">
            Subservice 1
          </Link>

          <Link
            href="#"
            className="text-offwhite"
          >
            Subservice 2
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl  mb-2 font-semibold text-offwhite">Service 2</h3>
          <Link href="#" className="text-offwhite">
            Subservice 1
          </Link>

          <Link
            href="#"
            className="text-offwhite"
          >
            Subservice 2
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl  mb-2 font-semibold text-offwhite">Service 1</h3>
          <Link href="#" className="text-offwhite">
            Subservice 1
          </Link>
          <Link
            href="#"
            className="text-offwhite"
          >
            Subservice 2
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
