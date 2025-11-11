import { ServicesPage } from "@/exports/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our various services | Elevare advisory",
};

export default function Services() {
  return (
    <div>
      <ServicesPage />
    </div>
  );
}
