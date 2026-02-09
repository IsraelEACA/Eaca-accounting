import { PrivacyPolicyPage } from "@/exports/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "",
};

export default function Services() {
  return (
    <div>
      <PrivacyPolicyPage />
    </div>
  );
}
