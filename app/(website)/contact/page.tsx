import { ContactUsPage } from "@/exports/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach out via our info",
};

export default function ContactPage() {
  return (
    <div>
      <ContactUsPage />
    </div>
  );
}
