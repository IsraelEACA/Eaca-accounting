import { TermsOfUsePage } from "@/exports/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "", // should possess a well descriptive meta data
};

export default function Services() {
  return (
    <div>
      <TermsOfUsePage />
    </div>
  );
}
