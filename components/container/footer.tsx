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

const FOOTERHELPERSDATA = [
  {
    title: "Services",
    links: [
      "Tax Accounting",
      "Payroll Services",
      "Business Consulting",
      "Business Formation",
      "Tax Planning",
      "Management Reports",
    ],
  },
  {
    title: "Resources",
    links: [
      "About the Professional",
      "Qualifications",
      "Accounting Blog",
      "Tax Tips",
      "Tax Calendar",
      "Downloads",
    ],
  },
  {
    title: "Support",
    links: [
      "Schedule Consultation",
      "WhatsApp",
      "Email",
      "FAQ",
      "Hours",
      "Client Portal",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Code of Ethics",
      "Data Protection",
      "Certifications",
      "Active CPA",
    ],
  },
];

export default function footer() {
  return (
    <div className="border-t border-t-zinc-200 pt-8">
      <footer className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto">
        {/* main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-[35%_20%_20%_20%] gap-16 items-start py-8">
          {/* first contents */}
          <div className="">
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
              <h1 className="text-[#0A0A0A] text-[20px]">{footers.title}</h1>
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
        <div className="flex items-center justify-between border-t border-t-zinc-300 py-8">
          <div className="">
            <h1 className="font-semibold text-[20px]">
              Recieve accounting tips
            </h1>
            <p className="text-[#717182]">
              Subscribe to our newsletter and receive information about <br />
              legislation, deadlines, and opportunities.
            </p>
          </div>
          <div className="">
            {/*  newsletter */}
            <div className="flex items-center gap-2">
              <Input
                type="text"
                className="w-100"
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
        <div className="text-[#717182] flex justify-between items-center border-t border-t-zinc-300 py-8">
          <p>
            © 2025 Elevare Advisory & Chartered Accountants. All rights
            reserved.
          </p>
          <div className="flex items-center gap-12">
            <p>Policy</p>
            <p>Terms of use</p>
            <p>Code Ethics</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
