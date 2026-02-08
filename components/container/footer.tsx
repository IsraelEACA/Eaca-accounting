"use client";

import { EacaImages } from "@/constant/image";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapIcon,
  Phone,
  Twitter,
} from "lucide-react";
import { FOOTERLINKSHELPERDATA } from "@/helpers/footer-helpers";
import Link from "next/link";

export default function footer() {
  return (
    <div className="border-t border-t-zinc-200 pt-8">
      <footer className="max-w-[90%] lg:max-w-[90%] xl:max-w-300 mx-auto">
        {/* main footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 sm:gap-0 py-8">
          <div>
            <div className="flex items-center justify-center sm:justify-start">
              <Image
                src={EacaImages.LogoImage}
                alt="footer_logo"
                className="py-4"
              />
            </div>
            {/* company footer information */}
            <div className="location py-4 flex flex-col items-center sm:items-start">
              <div className="flex gap-4 items-center">
                <Phone size={18} color="#f97316" />
                <p>077653068915</p>
              </div>
              <div className="flex gap-4 items-center py-3">
                <Mail size={18} color="#f97316" />
                <p>contact@elevareaca.co.uk</p>
              </div>
              <div className="flex gap-4 items-center py-3">
                <MapIcon size={18} color="#f97316" />
                <p>Bartle House, Oxford Court, Manchester, M2 3WQ</p>
              </div>
            </div>
            <div className="social_icons flex gap-12 items-center pt-4">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
              <Linkedin size={18} />
            </div>
          </div>
          <div className="leading-10 text-center sm:text-right">
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
            © All rights reserved Elevare Advisory & Certified Accountants
          </p>
          <div className="flex items-center gap-12 sm:gap-32">
            <p className="hover:text-orange-400 duration-300 underline">
              Privacy Policy
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
