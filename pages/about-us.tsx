"use Client";

import { AboutUsComponents } from "@/components/container/AboutUsComponents";
import { HowItWorks } from "@/components/container/HowItWorks";
import EnoughCta from "@/components/others/enough-cta";

export default function AboutUs() {
  return (
    <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-300 mx-auto mb-24">
      <AboutUsComponents />
      <HowItWorks />
      <EnoughCta />
    </div>
  );
}
