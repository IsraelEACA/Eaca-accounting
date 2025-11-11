import { AboutUsPage } from "@/exports/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Know more about Elevare",
};

export default function AboutPage() {
  return (
    <div>
      <AboutUsPage />
    </div>
  );
}
