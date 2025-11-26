"use client";

import Image from "next/image";

import { EacaImages } from "@/constant/image";
import { PricingComponent } from "./homepage";
import { PRICINGCOMPARISONDATA } from "@/helpers/homepage.helpers";

import { Inter } from "next/font/google";
import { CircleCheck, CircleX } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PricingComponentPage() {
  return (
    <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto mb-48">
      <div className="relative top-20">
        <PricingComponent />
        <PriceComparisonComponents />
      </div>
    </div>
  );
}

export function PriceComparisonComponents() {
  return (
    <div className={`${inter.className} mt-24`}>
      {/* <div className="flex items-start justify-between"> */}
      <div className="grid xl:grid-cols-2 items-start gap-12 sm:gap-16 md:gap-12 lg:gap-16 xl:gap-20 relative sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-full mx-auto">
        {/* eaca accountants */}
        <div>
          <Image src={EacaImages.PriceLogo} alt="pricing_logo" />
          {PRICINGCOMPARISONDATA.slice(0, 1).map((items, index) => (
            <div
              className="text-[#050038] mt-12 relative pl-3 sm:p-8 lg:p-4 lg:pr-0 pt-4 border-t-2 border-b-8 border-r-8 border-l-2 border-[#f97316]  rounded-xl"
              key={index}
            >
              <h1 className="py-4 lg:pb-8 text-[18px] uppercase font-bold">
                {items?.title}
              </h1>
              <div className="flex flex-row">
                <div className="relative">
                  {items?.description.map((list, index) => (
                    <p
                      className="pb-12 lg:pb-[51px] flex items-center gap-2"
                      key={index}
                    >
                      <CircleCheck color="#f97316" />
                      <span className="font-bold">{list}</span>
                    </p>
                  ))}
                  <Image
                    src={EacaImages.Target}
                    alt="target_icon"
                    className="absolute top-[50%] left-0"
                  />
                </div>
                <div className="flex flex-col justify-between absolute right-0">
                  <Image src={EacaImages.bulb} alt="bulb" />
                  <Image
                    src={EacaImages.PenIcon}
                    alt="pen"
                    className="absolute top-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* versus */}
        <div className="flex xl:hidden justify-center items-center">
          <Image src={EacaImages.Versus} alt="versus_image" className="" />
        </div>
        <div>
          {/* other chattered Accountants */}
          <h1 className="text-[#050038] pb-4 sm:pb-0 sm:pt-3 relative top-4 text-center xl:text-left text-[32px] sm:text-[36px] font-semibold">
            Other Chartered <br className="block sm:hidden" /> Accountants
          </h1>
          {PRICINGCOMPARISONDATA.slice(1, 2).map((items, index) => (
            <div
              className="text-[#050038] lg:mt-12 xl:mt-13 relative pl-3 sm:p-8 lg:p-4 pt-4 border-t-2 border-b-8 border-r-8 border-l-2 border-[#E20000] rounded-xl"
              key={index}
            >
              <h1 className="py-4 lg:pb-8 text-[18px] uppercase font-bold">
                {items?.title}
              </h1>
              <div className="flex flex-row">
                <div className="relative flex-1 lg:flex-none">
                  {items?.description.map((list, index) => (
                    <p
                      className="pb-12 lg:pb-[51px] flex items-center gap-2"
                      key={index}
                    >
                      <CircleX color="#E20000" />
                      <span className="font-bold">{list}</span>
                    </p>
                  ))}
                  <Image
                    src={EacaImages.Target}
                    alt="target_icon"
                    className="absolute top-0 left-0"
                  />
                  <Image
                    src={EacaImages.bulb}
                    alt="bulb"
                    className="absolute bottom-0 left-0"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Image src={EacaImages.PenIcon} alt="pen" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Image
          src={EacaImages.Versus}
          alt="versus_image"
          className="hidden xl:block absolute top-[40%] left-[43%] xl:left-[45%]"
          width={120}
        />
      </div>
    </div>
  );
}
