"use Client";

import { ServicesComponents } from "./homepage";
import EnoughCta from "@/components/others/enough-cta";

export default function ServicesPages() {
  return (
    <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto">
      <ServicesComponents />
      <EnoughCta />
    </div>
  );
}
