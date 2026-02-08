"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { EacaImages } from "@/constant/image";
import { Button } from "@/components/ui/button";

import { fadeUp, slideUp } from "@/components/animations/variants";
import { WhoWeWorkWith } from "./WhoWeWork";
import { AccountingNeeds } from "./AccountingNeed";

export function ServicesComponents() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="bg-[#F9F9FB] p-4 pt-12 sm:p-8 md:p-12 mt-24"
    >
      {/* services banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          {/* header text */}
          <h1 className="text-[32px] sm:text-[32px] md:text-[40px] font-medium">
            Accounting that stirs confidence
          </h1>
          <p className="text-[#717182] leading-7  sm:text-[16px]">
            We help you make smarter financial decisions with clarity and
            confidence.
          </p>
          <div className="flex items-center gap-2 mt-6 w-full">
            <Link href="/contact">
              <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
                <span>Get in touch</span>
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
        {/* image grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src={EacaImages.AccountBanner}
            alt="banner_image"
            className="w-full"
          />
        </motion.div>
      </div>
      <AccountingNeeds />
      <WhoWeWorkWith />
    </motion.section>
  );
}
