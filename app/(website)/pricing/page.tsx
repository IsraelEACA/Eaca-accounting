import { PricingPage } from "@/exports/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choose your plan",
  description: "Get different prices for various plans | Pricing",
};

export default function ContactPage() {
  return (
    <div>
      <PricingPage />
    </div>
  );
}
