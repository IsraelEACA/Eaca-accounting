"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

import { EacaImages } from "@/constant/image";
import Image from "next/image";

export default function EnoughCta() {
  return (
    <section className="my-24">
      <div className="text-[#f97316] relative flex items-center justify-center h-115 border rounded-xl overflow-hidden">
        <div className="text-center">
          <h1
            style={{ fontFamily: "KittenSlant" }}
            className="text-[32px] sm:text-[48px] xl:text-[64px]"
          >
            Enough about us, <br className="" /> tell us about you
          </h1>
          <p className="font-normal mx-6 sm:mx-0 text-[14px] md:text-[20px]">
            We are here to help you better understand, <br className="" />{" "}
            manage and maximize your business potentials.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 w-full">
            <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
              <span>Get in touch</span>
              <ChevronRight />
            </Button>
          </div>
        </div>
        <Image
          src={EacaImages.EnoughImageOne}
          alt="enough_image_one"
          className="absolute top-0 -left-5 w-35 sm:w-46"
        />
        <Image
          src={EacaImages.EnoughImageOne}
          alt="enough_image_one"
          className="absolute top-0 -right-5 w-35 sm:w-46"
        />
        <Image
          src={EacaImages.EnoughImageOne}
          alt="enough_image_one"
          className="absolute -bottom-10 -left-10 w-35 sm:w-46"
        />
        <Image
          src={EacaImages.EnoughImageTwo}
          alt="enough_image_one"
          className="absolute bottom-0 right-0 w-35 sm:w-46"
        />
      </div>
    </section>
  );
}
