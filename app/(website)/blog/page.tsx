import { BlogPage } from "@/exports/exports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Get informed about the financial space om Elevare",
};

export default function page() {
  return (
    <div>
      <BlogPage />
    </div>
  );
}
