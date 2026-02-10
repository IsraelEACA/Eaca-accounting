"use client";

import { Button } from "@/components/ui/button";
import { BLOGHELPERSDATA } from "@/helpers/blog-helpers";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Clock10,
  Share2,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function SingleBlogPage({ slug }: { slug: string }) {
  const post = BLOGHELPERSDATA.find((item) => item.slug === slug);

  if (!post) return notFound(); // if post does not exist

  return (
    <div className="mt-32 sm:mt-32 max-w-[95%] md:max-w-[90%] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
      <Link href={"/blog"}>
        <div className="flex items-center gap-6">
          <ArrowLeft />
          <p>Back to Blog</p>
        </div>
      </Link>
      <p className="my-4 mt-8 bg-[#ECEEF2] p-1 text-[14px] inline-block rounded-full">
        {post?.category}
      </p>
      <h1 className="font-normal text-[42px] leading-[52px]">{post?.title}</h1>
      <div className="flex justify-between items-center mt-4 text-[14px]">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 text-[#717182]">
            <User size={16} />
            <p>{post?.companyName}</p>
          </div>
          <div className="flex items-center gap-2 text-[#717182]">
            <Calendar size={16} />
            <p>{post?.date}</p>
          </div>
          <div className="flex items-center gap-2 text-[#717182]">
            <Clock10 size={16} />
            <p>{post?.readTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#717182]">
          <Share2 size={16} />
          <p>share</p>
        </div>
      </div>
      <div className="h-90 overflow-hidden rounded-2xl my-10">
        <Image src={post?.image} alt="" className="w-full" />
      </div>
      <div>{post?.content}</div>
      <div className="my-24">
        <div className="bg-[#ECECF04D] p-8 rounded-xl">
          <h1 className="text-[#0A0A0A] text-[18px] font-medium">
            Need Help with Tax Planning?
          </h1>
          <p className="py-2">
            Schedule a free consultation to discuss your business tax strategy
            and discover opportunities to reduce your tax burden legally and
            effectively.
          </p>
          <Button className="bg-[#F97316] text-white cursor-pointer">
            <span>Schedule Consultation</span>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
