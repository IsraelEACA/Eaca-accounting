"use client";

import React from "react";

// PAGES IMPORTS
import { HomepageBanner } from "@/components/container/HomePageBanner";
import { AboutUsComponents } from "@/components/container/AboutUsComponents";
import { HowItWorks } from "@/components/container/HowItWorks";
import EnoughCta from "@/components/others/enough-cta";
import { ServicesComponents } from "@/components/container/ServicesComponents";
import { PricingComponent } from "@/components/container/PricingComponent";
import { ContactUsComponent } from "@/components/container/ContactUsComponent";

export default function Homepage() {
  return (
    <React.Fragment>
      <HomepageBanner />
      <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-300 mx-auto">
        <AboutUsComponents />
        <HowItWorks />
        <EnoughCta />
        <ServicesComponents />
        <PricingComponent />
        <ContactUsComponent />
      </div>
    </React.Fragment>
  );
}
