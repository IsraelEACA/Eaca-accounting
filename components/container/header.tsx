"use client";

import Image from "next/image";
import Link from "next/link";
import { EacaImages } from "@/constant/image";

import { Button } from "../ui/button";
import { HEADERLINKSHELPERDATA } from "@/helpers/homepage.helpers";

export default function header() {
  return (
    <div className="border-0 border-b-[0.5px] py-4">
      <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1150px] mx-auto flex justify-between items-center">
        <div className="">
          <Image src={EacaImages.LogoImage} alt="logo_image" />
        </div>
        <div className="flex items-center gap-12 text-[#717182]">
          {HEADERLINKSHELPERDATA.map((menu, index) => (
            <Link href={menu.link} key={index}>
              <p className="cursor-pointer capitalize hover:text-[#F97316] duration-300">
                {menu.linkName}
              </p>
            </Link>
          ))}
        </div>
        <div>
          <Link href={"/contact"}>
            <Button className="bg-[#F97316] text-white hover:bg-orange-600 hover:text-[#171717] duration-300 cursor-pointer">
              Free consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
