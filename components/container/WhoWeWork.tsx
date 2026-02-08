"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {  ChevronRight } from "lucide-react"; // prettier-ignore

import { Button } from "@/components/ui/button";

import { fadeUp, slideUp } from "@/components/animations/variants";
import { WHOWEWORKDATA } from "@/helpers/homepage.helpers";

export function WhoWeWorkWith() {
  return (
    <div className="my-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h1 className="text-[24px] sm:text-[40px] text-center font-medium">
          Who We <span className="text-[#f97316]">Work With</span>
        </h1>
        <p className="text-[#717182] leading-7 text-center mx-1 sm:mx-8 md:mx-12 lg:mx-24">
          We work with owner-managed businesses and growth-minded SME owners who
          value clarity, ambition, and strategic direction. Our mission is to be
          your trusted advisor and growth partner - supporting you every step of
          your entrepreneurial journey.
        </p>
        <div className="flex items-center justify-center gap-2 mt-6 w-full">
          <Link href="/contact">
            <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
              <span>Get in touch</span>
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {WHOWEWORKDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="bg-white border rounded-xl p-4"
            key={index}
          >
            <div className="bg-[#f97316]/20 p-3 rounded-xl inline-block">
              <Image src={items?.icon} alt={`accountin_image_${index + 1}`} />
            </div>
            <h1 className="font-normal text-[18px] text-balance py-2 pt-6">
              {items?.title}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
