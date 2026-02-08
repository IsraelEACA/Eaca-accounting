"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // prettier-ignore

import { EacaImages } from "@/constant/image";
import { Button } from "@/components/ui/button";

import { fadeUp, scaleIn, slideUp } from "@/components/animations/variants";

export function HomepageBanner() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-[90%] lg:max-w-[90%] xl:max-w-287.5 mx-auto mt-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <motion.div variants={fadeUp}>
          <h1 className="text-[48px] sm:text-[56px] md:text-[60px] sm:leading-17.5">
            Reliable <br className="hidden sm:block" /> Accounting That Stirs
            Confidence
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-[#717182] leading-7 sm:text-[16px]"
          >
            Elevare Advisory & Certified Accountants provides accounting for
            small businesses, sole proprietors, financial services firms,
            contractors <br /> and freelancers. We give you clarity in your
            numbers and the insight to excel with them
          </motion.p>

          <Link href={"/contact"}>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mt-6 w-full"
            >
              <Button className="w-3/4 py-6 bg-[#F97316] text-white hover:bg-orange-600 hover:text-white duration-300 cursor-pointer">
                <span>Schedule Consultation</span>
                <ChevronRight />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div variants={slideUp} className="relative">
          <Image
            src={EacaImages.BannerImage}
            alt="banner_image"
            className="w-full"
          />
          <motion.div
            variants={scaleIn}
            className="inline-block px-6 py-4 bg-white shadow-lg rounded-xl absolute bottom-0"
          >
            <p className="text-[#717182] capitalize">Your Partner</p>
            <h1 className="text-[#F97316] text-[24px]">{"For Growth"}</h1>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
