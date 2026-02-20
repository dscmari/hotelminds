import {
  FiBarChart2,
  FiHome,
  FiPieChart,
} from "react-icons/fi";

const NavPricing = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700 p-8">
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 size-8 text-custom-red" />
        <span className="text-xl">Startup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 size-8 text-custom-red" />
        <span className="text-xl">Scaleup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 size-8 text-custom-red" />
        <span className="text-xl">Enterprise</span>
      </a>
    </div>
  );
};

export default NavPricing