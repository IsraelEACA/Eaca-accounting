import { BLOGHELPERSDATA } from "@/helpers/blog-helpers";
import { SingleBlogPage } from "@/exports/exports";

export async function generateStaticParams() {
  return BLOGHELPERSDATA.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <SingleBlogPage slug={slug} />;
}
