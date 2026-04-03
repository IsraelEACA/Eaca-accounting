"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {  ChevronRight } from "lucide-react"; // prettier-ignore

import { Button } from "@/components/ui/button";

import { fadeUp, slideUp } from "@/components/animations/variants";
import { HOWITWORKSDATA } from "@/helpers/homepage.helpers";

export function HowItWorks() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className=""
    >
      {/* header contents */}
      <h1 className="text-center text-[48px]" data-aos={"fade-up"}>
        How we are <span className="text-[#f97316]">different</span>
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-5 pt-8">
        {HOWITWORKSDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className={`${
              items?.title === "Our Firm"
                ? "text-white bg-[#f97316]"
                : "text-black bg-[#F9F9FB]"
            } p-3 rounded-xl border`}
            key={index}
          >
            <h2 className={`font-semibold pb-2`}>{items?.title}</h2>
            <div className="">
              {items.description.map((desc, index) => (
                <p
                  className={`${
                    items?.title === "Our Firm" ? "py-4" : "py-9"
                  }  pt-6 border-t border-t-[#d2d2d267]`}
                  key={index}
                >
                  {desc}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-5 pt-8">
        {HOWITWORKSDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className={`${
              items?.title === "Our Firm"
                ? "text-white bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#ea580c] shadow-xl shadow-orange-200 scale-105 border-orange-400"
                : "text-black bg-[#F9F9FB] hover:shadow-md hover:scale-[1.02] border-gray-100"
            } p-5 rounded-2xl border transition-all duration-300`}
            key={index}
          >
            <h2
              className={`font-bold text-lg pb-2 ${
                items?.title === "Our Firm" ? "text-white" : "text-gray-900"
              }`}
            >
              {items?.title}
            </h2>
            <div>
              {items.description.map((desc, index) => (
                <p
                  className={`${
                    items?.title === "Our Firm"
                      ? "py-4 border-t border-white/20 text-orange-50"
                      : "py-9 border-t border-gray-100 text-gray-600"
                  } pt-6 text-sm leading-relaxed`}
                  key={index}
                >
                  {desc}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-16">
        <Link href="/contact">
          <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
            <span>Get in touch</span>
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
