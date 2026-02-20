
const NavReferences = () => {
  return (
    <div>
      <div className="flex gap-4 p-8">
        <div className="text-xl">
          <h3 className="mb-2 font-medium">Startup</h3>
          <a href="#" className="mb-1 block text-neutral-400">
            Bookkeeping
          </a>
          <a href="#" className="block text-neutral-400">
            Invoicing
          </a>
        </div>
       <div className="text-xl">
          <h3 className="mb-2 font-medium">Scaleup</h3>
          <a href="#" className="mb-1 block text-neutral-400">
            Live Coaching
          </a>
          <a href="#" className="mb-1 block text-neutral-400">
            Reviews
          </a>
          <a href="#" className="block text-neutral-400">
            Tax/VAT
          </a>
        </div>
         <div className="text-xl">
          <h3 className="mb-2 font-medium">Enterprise</h3>
          <a href="#" className="mb-1 block text-neutral-400">
            White glove
          </a>
          <a href="#" className="mb-1 block text-neutral-400">
            SOX Compliance
          </a>
          <a href="#" className="block text-neutral-400">
            Staffing
          </a>
          <a href="#" className="block text-neutral-400">
            More
          </a>
        </div>
      </div>

      {/* <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button> */}
    </div>
  );
};

export default NavReferences;