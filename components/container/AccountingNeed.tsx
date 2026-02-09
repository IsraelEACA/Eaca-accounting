"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {  ChevronRight } from "lucide-react"; // prettier-ignore

import { Button } from "@/components/ui/button";

import { slideUp } from "@/components/animations/variants";
import { ACCOUNTINGDATA } from "@/helpers/homepage.helpers";

export function AccountingNeeds() {
  return (
    <div className="my-16">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className="text-[24px] sm:text-[32px] text-center font-medium"
      >
        Your One-stop shop for all your accounting needs
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {ACCOUNTINGDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="bg-white border rounded-xl p-6"
            key={index}
          >
            <div className="bg-[#f97316]/20 p-3 rounded-xl inline-block">
              <Image src={items?.icon} alt={`accountin_image_${index + 1}`} />
            </div>
            <h1 className="font-medium py-2 pt-6">{items?.title}</h1>
            <p className="text-[14px] text-[#717182]">{items?.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-6 w-full">
        <Link href="/contact">
          <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
            <span>Get in touch</span>
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
