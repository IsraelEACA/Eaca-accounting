"use Client";

import { ProfessionalValue, AboutComponent, WhyChooseUs } from "./homepage";

export default function AboutUs() {
  return (
    <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto">
      <AboutComponent />
      <ProfessionalValue />
      <WhyChooseUs />
    </div>
  );
}
