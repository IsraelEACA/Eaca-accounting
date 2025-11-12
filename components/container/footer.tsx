"use client";

import { EacaImages } from "@/constant/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { FOOTERHELPERSDATA } from "@/helpers/footer-helpers";

export default function footer() {
  return (
    <div className="border-t border-t-zinc-200 pt-8">
      <footer className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto">
        {/* main footer */}
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-[35%_20%_20%_20%] gap-16 items-start py-8">
          {/* first contents */}
          <div className="col-span-2">
            <Image
              src={EacaImages.LogoImage}
              alt="footer_logo"
              className="py-4"
            />
            <p className="text-[#717182]">
              Elevare Advisory & Chartered Accountants provides accounting for
              small businesses, sole proprietors, financial services firms,
              contractors and freelancers. We give you clarity in your numbers
              and the insight to excel with them
            </p>
            {/* company footer information */}
            <div className="location py-4">
              <div className="flex gap-4 items-center">
                <Phone size={18} color="#f97316" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex gap-4 items-center py-3">
                <Mail size={18} color="#f97316" />
                <p>contact@elavareadvisory.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <MapPin size={18} color="#f97316" />
                <p>100% Online Service - Nationwide</p>
              </div>
            </div>
            <div className="social_icons flex gap-12 items-center pt-4">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
              <Linkedin size={18} />
            </div>
          </div>
          {/* helpers lists */}
          {FOOTERHELPERSDATA.map((footers, index) => (
            <div key={index}>
              <h1 className="text-[20px] text-orange-400 font-semibold">
                {footers.title}
              </h1>
              {footers.links.map((footerlinks, index) => (
                <p key={index} className="text-[#717182] leading-10">
                  {footerlinks}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div></div>
        {/* sub footer */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between border-t border-t-zinc-300 py-8 gap-8 sm:gap-0">
          <div className="">
            <h1 className="font-semibold text-[20px] text-orange-400 capitalize">
              Recieve accounting tips
            </h1>
            <p className="text-[#717182] text-[16px]">
              Subscribe to our newsletter and receive information about{" "}
              <br className="hidden sm:block" />
              legislation, deadlines, and opportunities.
            </p>
          </div>
          <div className="">
            {/*  newsletter */}
            <div className="flex items-center gap-2">
              <Input
                type="text"
                className="sm:w-100"
                placeholder="Enter your email"
              />
              <Button className="bg-[#f97316] text-white hover:bg-orange-500 duration-300 cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className=""></div>
        {/* copy right */}
        <div className="text-[#717182] flex flex-col-reverse sm:flex-row justify-between items-center gap-10 sm:gap-0 border-t border-t-zinc-300 py-8">
          <p className="text-center sm:text-left">
            <span className="text-orange-400 font-medium">
              © 2025 Elevare Advisory & Chartered Accountants.
            </span>{" "}
            All rights reserved.
          </p>
          <div className="flex items-center gap-12">
            <p className="hover:text-orange-400 duration-300">Policy</p>
            <p className="hover:text-orange-400 duration-300">Terms of use</p>
            <p className="hover:text-orange-400 duration-300">Code Ethics</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
