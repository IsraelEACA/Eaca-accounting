"use Client";

import { AboutUsComponents, HowItWorks } from "./homepage";
import EnoughCta from "@/components/others/enough-cta";

export default function AboutUs() {
  return (
    <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto mb-24">
      <AboutUsComponents />
      <HowItWorks />
      <EnoughCta />
    </div>
  );
}
