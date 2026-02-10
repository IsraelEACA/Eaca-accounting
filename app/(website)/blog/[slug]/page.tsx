import { SingleBlogPage } from "@/exports/exports";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <SingleBlogPage slug={slug} />;
}
