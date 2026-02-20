"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Tab from "./Tab";
import NavPricing from "./NavPricing";
import NavVideos from "./NavVideos";
import NavReferences from "./NavReferences";
import NavContent from "./NavContent";
import NavServices from "./NavServices";
import NavKITracker from "./NavKITracker";
import NavWorkshops from "./NavWorkshops";

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  const TABS = [
    {
      title: "Services",
      Component: NavServices,
    },
    {
      title: "Results",
      Component: NavPricing,
      link: "#",
    },
    {
      title: "About",
      Component: NavReferences,
      link: "#",
    },
  ].map((n, idx) => ({ ...n, id: idx + 1 }));

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
            t={t}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <NavContent dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

export default Tabs;
