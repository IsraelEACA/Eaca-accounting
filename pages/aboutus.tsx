"use Client";

import { AboutUsComponents } from "./homepage";
import { HowItWorks } from "./homepage";

export default function AboutUs() {
  return (
    <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto mb-24">
      <AboutUsComponents />
      <HowItWorks />
    </div>
  );
}
