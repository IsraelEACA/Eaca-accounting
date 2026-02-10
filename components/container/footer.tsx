"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { MapIcon, Phone, Twitter } from "lucide-react";

import { EacaImages } from "@/constant/image";
import { FOOTERLINKSHELPERDATA } from "@/helpers/footer-helpers";

export default function footer() {
  return (
    <div className="border-t border-t-zinc-200 pt-8">
      <footer className="max-w-[90%] lg:max-w-[90%] xl:max-w-300 mx-auto">
        {/* main footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start  gap-0 py-8">
          <div>
            <div className="flex items-start justify-start sm:justify-start">
              <Image
                src={EacaImages.LogoImage}
                alt="footer_logo"
                className="py-4"
              />
            </div>
            {/* company footer information */}
            <div className="location py-4 flex flex-col items-start sm:items-start">
              <div className="flex gap-4 items-center">
                <Phone size={18} color="#f97316" />
                <p className="text-[#717182] text-[14px] sm:text-[16px]">
                  <a href="tel:07765306891">07765306891</a>
                </p>
              </div>
              <div className="flex gap-4 items-center py-3">
                <Mail size={18} color="#f97316" />
                <p className="text-[#717182] text-[14px] sm:text-[16px]">
                  <a href="mailto:contact@elevareaca.co.uk">
                    contact@elevareaca.co.uk
                  </a>
                </p>
              </div>
              <div className="flex gap-4 items-center py-3">
                <MapIcon size={18} color="#f97316" />
                <p className="text-[#717182] text-[14px] sm:text-[16px]">
                  Bartle House, Oxford Court, Manchester, M2 3WQ
                </p>
              </div>
            </div>
            <div className="social_icons flex gap-8 sm:gap-12 items-start pt-4 text-[#f97316]">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
              <Linkedin size={18} />
            </div>
          </div>
          <div className="leading-10 text-[#717182] text-left text-[14px] sm:text-[16px] pt-12 sm:pt-0 sm:text-right w-full">
            {FOOTERLINKSHELPERDATA.map((items, index) => (
              <Link href={items?.link} key={index}>
                <p>{items?.linkName}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* copy right */}
        <div className="text-[#717182] text-[14px] flex flex-col-reverse sm:flex-row justify-between items-start gap-10 sm:gap-0 py-6">
          <p className="text-left">
            © All rights reserved Elevare Advisory & Certified Accountants
          </p>
          <div className="flex items-center gap-12 sm:gap-32">
            <Link href="/privacy">
              <p className="hover:text-orange-400 duration-300 underline">
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-of-use">
              <p className="hover:text-orange-400 duration-300 underline">
                Terms of use
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
