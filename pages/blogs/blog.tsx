"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock8 } from "lucide-react";
import { useState } from "react";

import { BLOGHELPERSDATA } from "@/helpers/blog-helpers";

export default function BlogComponents() {
  return (
    <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-300 mx-auto">
      <BlogHeader />
    </div>
  );
}

export function BlogHeader() {
  return (
    <section className="my-24 mt-28">
      <div className="text-center">
        <h1 className="text-[48px] sm:text-[56px] md:text-[60px]">
          Accounting <span className="text-[#f97316]">Insights</span>
        </h1>
        <p className="text-[#717182] text-[20px]">
          Expert tips, strategies, and insights to help your business thrive.
          Stay <br />
          informed with the latest accounting and tax advice.
        </p>
      </div>
      {/* blog lists */}
      <BlogPosts />
    </section>
  );
}

export function BlogPosts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? BLOGHELPERSDATA
      : BLOGHELPERSDATA.filter((item) => item.category === activeCategory);

  const uniqueCategories = [
    ...new Set(BLOGHELPERSDATA.map((item) => item.category)),
  ];

  return (
    <main>
      <div className="flex justify-center items-center mt-12">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 text-[#717182]">
          <p
            onClick={() => setActiveCategory("All")}
            className={`text-[14px] border p-1 px-4 cursor-pointer rounded-full duration-200
              ${
                activeCategory === "All"
                  ? "bg-[#F97316] text-white"
                  : "hover:bg-[#F97316] hover:text-white"
              }
            `}
          >
            All
          </p>

          {/* LIST CATEGORY BUTTONS */}
          {uniqueCategories.map((category, index) => (
            <p
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`text-[14px] border p-1 px-4 cursor-pointer rounded-full duration-200
      ${
        activeCategory === category
          ? "bg-[#F97316] text-white"
          : "hover:bg-[#F97316] hover:text-white"
      }
    `}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      {/* BLOG GRID */}
      <article>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start mt-16">
          {filteredBlogs.map((items, index) => (
            <Link
              href={`/blog/${items?.slug}`}
              key={index}
              className="cursor-pointer"
            >
              <div className="border rounded-xl">
                <Image
                  src={items.image}
                  alt=""
                  className="rounded-t-xl w-full"
                />
                <div className="p-8">
                  <p className="bg-[#ECEEF2] text-[#0a0a0a] inline-block p-1 px-4 cursor-pointer rounded-full text-[12px] mb-4">
                    {items.category}
                  </p>
                  <h1 className="text-[#0A0A0A] font-normal text-[18px] line-clamp-2 hover:underline cursor-pointer hover:text-[#f97316] duration-300">
                    {items.title}
                  </h1>
                  <p className="text-[#717182] text-[14px] cursor-pointer hover:underline py-2">
                    {items.excerpt}
                  </p>

                  <div className="flex gap-4 items-center">
                    <div className="flex flex-row gap-2 items-center text-[#717182] pt-4">
                      <Calendar />
                      <p className="text-[14px]">{items.date}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-[#717182] pt-4">
                      <Clock8 />
                      <p className="text-[14px]">{items.readTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </article>
    </main>
  );
}
