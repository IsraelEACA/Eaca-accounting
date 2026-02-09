"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react"; // prettier-ignore
import Link from "next/link";

import { fadeUp, slideUp } from "@/components/animations/variants";
import { Button } from "@/components/ui/button";
import { PRICINGDATA } from "@/helpers/homepage.helpers";

// pricing component
export function PricingComponent() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="my-16"
    >
      <div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="text-[24px] sm:text-[32px] md:text-[36px] mb-3 text-center font-medium"
        >
          Fixed, transparent pricing – no surprises, no hidden fees.
        </motion.h1>
        <p className="text-[#717182] leading-7 text-center mx-2 sm:mx-8 md:mx-24">
          Each package is curated to support every stage of your business
          journey. We understand that every business has unique needs , get in
          touch to discuss any specific requirements tailored to your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4 xl:gap-4 my-12">
        {PRICINGDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className={`bg-white shadow-xl rounded-xl py-6 border h-195`}
            key={index}
          >
            <div className="p-6 pb-0 border-b">
              <h3 className="uppercase text-[18px] font-semibold">
                {items?.pricingTitle}
              </h3>
              <p className="text-[#717182] pt-4 text-[14px]">
                {items?.pricingTag}
              </p>
              <div className="py-6">
                <p>From</p>
                <h1 className="text-[32px] font-bold">
                  <span>£{items?.pricing}</span>
                  <span className="text-[#717182] text-[18px] font-semibold">
                    <i className="font-extrabold relative bottom-1.5 text-[18px]">
                      /
                    </i>
                    <span className="relative bottom-0.5"> mo</span>
                  </span>
                </h1>
                <p className="text-[#717182] text-[14px] pt-4">
                  {items?.pricingDescription}
                </p>
                <div className="w-full mt-8">
                  <Link href="/contact">
                    <Button
                      className={`${
                        items?.pricingTitle === "Momentum Plan"
                          ? "bg-[#f97316] text-white"
                          : "bg-transparent text-black"
                      } w-full capitalize border p-5 rounded-xl hover:bg-[#f97316] hover:text-white duration-300 cursor-pointer`}
                    >
                      Choose this plan
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-6 p-6">
              <h1 className="uppercase text-[14px] sm:text-[16px]">
                {items?.pricingData}
              </h1>
              {items?.pricingList.map((item, index) => (
                <div className="flex gap-1 items-start py-3" key={index}>
                  <p className="bg-[#f97316] p-1 rounded-full text-white inline-block">
                    <Check size={12} />
                  </p>
                  <p className="text-[12px] text-[#8F756C]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
