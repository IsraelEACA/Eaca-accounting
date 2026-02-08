"use client";

import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react"; // prettier-ignore

import { EacaImages } from "@/constant/image";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/others/contact-form";

export function ContactUsComponent() {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h1 className="text-[48px]">Contact</h1>
        <p className="text-[18px] text-[#717182]">
          Get in touch to discuss your business needs and discover how we can
          help <br /> you achieve your goals.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[45%_45%] items-start gap-10 mt-16">
        <div>
          <ContactForm />
        </div>
        {/* contact information */}
        <div className="">
          <div className="relative">
            <Image
              src={EacaImages.ContactBanner}
              alt="contact_banner_image"
              className="rounded-xl"
            />
            <div className="absolute bottom-3 left-10 text-white">
              <h1 className="text-[32px] font-normal">Ready to serve</h1>
              <p>Your partner in financial management.</p>
            </div>
          </div>
          {/* company contact information */}
          <div className="flex flex-col gap-6 items-start">
            {/* phone contact details */}
            <div className="flex gap-8 items-center border border-zinc-200 bg-white rounded-xl w-full p-4 mt-8">
              {/* icon */}
              <div className="bg-[#f97316]/10 text-[#f97316] p-4 rounded-sm">
                <Phone size={16} />
              </div>
              {/* text contents */}
              <div className="">
                <h1 className="text-[#0e0e0e] text-[18px]">Phone/Whatsapp:</h1>
                <p className="text-[#717182] text-[14px] sm:text-[16px]">
                  +1 (555) 123-4567
                </p>
                <p className="text-[#717182] text-[14px] sm:text-[16px]">
                  Quick Response
                </p>
              </div>
            </div>
            {/* email contact details */}
            <div className="flex gap-8 items-center border border-zinc-200 bg-white rounded-xl w-full p-4">
              {/* icon */}
              <div className="bg-[#f97316]/10 text-[#f97316] p-4 rounded-sm">
                <Mail size={16} />
              </div>
              {/* text contents */}
              <div className="">
                <h1 className="text-[#0e0e0e] text-[18px]">Email:</h1>
                <p className="text-[#717182] text-[14px] sm:text-[16px]">
                  contact@eaca.co.uk
                </p>
                <p className="text-[#717182] text-[14px]  sm:text-[16px]">
                  Response within 24h
                </p>
              </div>
            </div>
            {/* hours available */}
            <div className="flex gap-8 items-center border border-zinc-200 bg-white rounded-xl w-full p-4">
              {/* icon */}
              <div className="bg-[#f97316]/10 text-[#f97316] p-4 rounded-sm">
                <MapPin size={16} />
              </div>
              {/* text contents */}
              <div className="">
                <h1 className="text-[#0e0e0e] text-[18px]">Hours:</h1>
                <p className="text-[#717182] text-[14px] sm:text-[16px]">
                  Mondays - Fridays
                </p>
                <p className="text-[#717182] text-[14px] sm:text-[16px]">
                  9:00AM - 6:00PM
                </p>
              </div>
            </div>
          </div>
          <div className="contact_informations">
            <div className="contact_cards bg-[#f97316] h-60 p-6 rounded-xl my-8 flex flex-col items-center justify-center gap-4 text-white">
              <h1 className="text-[24px] font-thin">Book an initial call</h1>
              <p className="text-center py-2 sm:py-4 font-thin">
                Book a brief introductory session to discuss your business needs
                and how we can best support you
              </p>
              <Button className="bg-white hover:bg-[#0e0e0e] hover:text-white  text-[#0e0e0e] w-full capitalize cursor-pointer py-6 rounded-xl duration-300">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
