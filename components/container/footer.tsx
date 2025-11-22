"use client";

import { EacaImages } from "@/constant/image";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { FOOTERLINKSHELPERDATA } from "@/helpers/footer-helpers";
import Link from "next/link";

export default function footer() {
  return (
    <div className="border-t border-t-zinc-200 pt-8">
      <footer className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto">
        {/* main footer */}
        <div className="flex justify-between items-start py-8">
          <div className="">
            <Image
              src={EacaImages.LogoImage}
              alt="footer_logo"
              className="py-4"
            />
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
            </div>
            <div className="social_icons flex gap-12 items-center pt-4">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
              <Linkedin size={18} />
            </div>
          </div>
          <div className="leading-10 text-right">
            {FOOTERLINKSHELPERDATA.map((items, index) => (
              <Link href={items?.link} key={index}>
                <p>{items?.linkName}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* copy right */}
        <div className="text-black flex flex-col-reverse sm:flex-row justify-between items-center gap-10 sm:gap-0 py-6">
          <p className="text-center sm:text-left">
            © 2025 Elevare Advisory & Chartered Accountants. All rights
            reserved.
          </p>
          <div className="flex items-center gap-32">
            <p className="hover:text-orange-400 duration-300 underline">
              Policy
            </p>
            <p className="hover:text-orange-400 duration-300 underline">
              Terms of use
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
