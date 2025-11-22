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
      <div className="grid lg:grid-cols-2 items-start gap-28 relative">
        {/* eaca accountants */}
        <div>
          <Image src={EacaImages.PriceLogo} alt="pricing_logo" />
          {PRICINGCOMPARISONDATA.slice(0, 1).map((items, index) => (
            <div
              className="text-[#050038] mt-12 relative p-8 lg:p-8 xl:p-12 pt-4 border-t-2 border-b-8 border-r-8 border-l-4 border-[#f97316]  rounded-xl"
              key={index}
            >
              <h1 className="py-4 lg:pb-12 text-[18px] uppercase font-bold">
                {items?.title}
              </h1>
              <div className="flex flex-row">
                <div className="relative">
                  {items?.description.map((list, index) => (
                    <p className="pb-12 flex items-center gap-2" key={index}>
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
                <div className="flex flex-col justify-between">
                  <Image src={EacaImages.bulb} alt="bulb" />
                  <Image src={EacaImages.PenIcon} alt="pen" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* other chattered Accountants */}
        <div className="flex lg:hidden justify-center items-center">
          <Image src={EacaImages.Versus} alt="versus_image" className="" />
        </div>
        <div>
          <h1 className="text-[#050038] pb-4 text-center xl:text-left text-[32px] font-semibold">
            Other chattered <br className="block sm:hidden" /> Accountants
          </h1>
          {PRICINGCOMPARISONDATA.slice(1, 2).map((items, index) => (
            <div
              className="text-[#050038] lg:mt-8 xl:mt-16 relative p-8 lg:p-8 xl:p-12 pt-4 border-t-2 border-b-8 border-r-8 border-l-4 border-[#E20000] rounded-xl"
              key={index}
            >
              <h1 className="py-4 pb-12 text-[18px] uppercase font-bold">
                {items?.title}
              </h1>
              <div className="flex flex-row">
                <div className="relative flex-1 lg:flex-none">
                  {items?.description.map((list, index) => (
                    <p
                      className="pb-14 xl:pb-18 flex items-center gap-2"
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
          className="hidden lg:block absolute top-[40%] left-[42%] xl:left-[44%]"
        />
      </div>
    </div>
  );
}
