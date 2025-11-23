"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ChevronRight, Mail, MapPin, Phone } from "lucide-react"; // prettier-ignore

import { EacaImages } from "@/constant/image";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/others/contact-form";
import { fadeUp, scaleIn, slideUp } from "@/components/animations/variants";
import {
  ACCOUNTINGDATA,
  HOWITWORKSDATA,
  PRICINGDATA,
  WHOWEWORKDATA,
} from "@/helpers/homepage.helpers";

import EnoughCta from "@/components/others/enough-cta";
import Link from "next/link";

export default function Homepage() {
  return (
    <React.Fragment>
      <HomepageBanner />
      <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto">
        <AboutUsComponents />
        <HowItWorks />
        <EnoughCta />
        <ServicesComponents />
        <PricingComponent />
        <ContactUsComponent />
      </div>
    </React.Fragment>
  );
}

export function HomepageBanner() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1150px] mx-auto mt-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <motion.div variants={fadeUp}>
          <h1 className="text-[48px] sm:text-[56px] md:text-[60px] sm:leading-[70px]">
            Reliable <br className="hidden sm:block" /> Accounting That Stirs
            Confidence
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-[#717182] leading-7 sm:text-[16px]"
          >
            Elevare Advisory & Chartered Accountants provides accounting for
            small businesses, sole proprietors, financial services firms,
            contractors <br /> and freelancers. We give you clarity in your
            numbers and the insight to excel with them
          </motion.p>

          <Link href={"/contact"}>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 mt-6 w-full"
            >
              <Button className="w-3/4 py-6 bg-[#F97316] text-white hover:bg-orange-600 hover:text-white duration-300 cursor-pointer">
                <span>Schedule Consultation</span>
                <ChevronRight />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div variants={slideUp} className="relative">
          <Image
            src={EacaImages.BannerImage}
            alt="banner_image"
            className="w-full"
          />
          <motion.div
            variants={scaleIn}
            className="inline-block px-6 py-4 bg-white shadow-lg rounded-xl absolute bottom-0"
          >
            <p className="text-[#717182] capitalize">Your Partner</p>
            <h1 className="text-[#F97316] text-[24px]">{"For Growth"}</h1>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AboutUsComponents() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="my-48"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-start gap-18">
        {/* LEFT SECTION */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 items-start"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          <div>
            <Image
              src={EacaImages.AboutImage}
              alt="about_image"
              width={400}
              height={300}
              className="rounded-xl"
            />
          </div>

          <div className="">
            <div className="mb-4">
              <h1 className="text-[24px] font-normal">
                Seun Adeoye (FCCA, CISA)
              </h1>
              <p>Founder</p>
            </div>
            <p className="text-[#717182] text-[16px] leading-7">
              A seasoned Accountant and Auditor with over 10 years experience at
              leading global Accounting firms including a Big 4 and another Tier
              1 Accounting firm. His career spans a broad spectrum of
              industries, with a particular focus on financial services - from
              large publicly listed corporations to mid-sized enterprises and
              privately held businesses. <br /> <br /> A Fellow of the
              Association of Chartered Certified Accountants (FCCA) & a
              Certified Information System Auditor (CISA).
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 items-start"
        >
          {/* Purpose Box */}
          <motion.div variants={fadeUp} className="border rounded-xl p-6">
            <div className="bg-[#f97316]/20 p-3 rounded-xl inline-block">
              <Image
                src={EacaImages.Precision}
                alt="purpose_images"
                width={25}
                height={25}
              />
            </div>
            <h1 className="text-[24px] lg:text-[24px] font-medium py-4">
              Our Purpose
            </h1>
            <p className="text-[#717182] text-[14px] sm:text-[16px] leading-7">
              Elevare Advisory & Chartered Accountants was founded to close the
              gap in expert accounting and advisory services available to small
              business owners. We recognize that many ambitious entrepreneurs
              lack access to the high-quality Accounting & Advisory services
              typically reserved for larger firms - and we are here to change
              that.
              <br />
              <br />
              By bringing over a decade of experience from top-tier global
              accounting firms, we deliver trusted, insightful, and
              growth-focused support tailored to the unique needs of small
              businesses.
            </p>
          </motion.div>

          {/* Mission Box */}
          <motion.div variants={fadeUp} className="border rounded-xl p-6">
            <div className="bg-[#f97316]/20 p-3 rounded-xl inline-block">
              <Image
                src={EacaImages.Dedication}
                alt="purpose_images"
                width={25}
                height={25}
              />
            </div>
            <h1 className="text-[24px] lg:text-[24px] font-medium py-4">
              Our Mission
            </h1>
            <p className="text-[#717182] text-[14px] sm:text-[16px] leading-7">
              Our mission is to be your trusted partner - delivering expert,
              personalized accounting and advisory services that equip SME
              owners with the clarity, confidence, and strategic insight needed
              to make sound financial decisions, seize growth opportunities, and
              build resilient, thriving enterprises.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function HowItWorks() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className=""
    >
      {/* header contents */}
      <h1 className="text-center text-[48px]" data-aos={"fade-up"}>
        How we are <span className="text-[#f97316]">different</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-5 pt-8">
        {HOWITWORKSDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className={`${
              items?.title === "Our Firm"
                ? "text-white bg-[#f97316]"
                : "text-black bg-[#F9F9FB]"
            } p-5 rounded-xl border`}
            key={index}
          >
            <h2 className={`font-semibold pb-2`}>{items?.title}</h2>
            <div className="">
              {items.description.map((desc, index) => (
                <p
                  className="py-4 pt-6 border-t border-t-[#d2d2d267]"
                  key={index}
                >
                  {desc}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-16">
        <Link href="/contact">
          <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
            <span>Get in touch</span>
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}

export function ServicesComponents() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="bg-[#F9F9FB] p-4 pt-12 sm:p-8 md:p-12 mt-24"
    >
      {/* services banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          {/* header text */}
          <h1 className="text-[32px] sm:text-[32px] md:text-[40px] font-medium">
            Accounting that stirs confidence
          </h1>
          <p className="text-[#717182] leading-7  sm:text-[16px]">
            We help you make smarter financial decisions with clarity and
            confidence.
          </p>
          <div className="flex items-center gap-2 mt-6 w-full">
            <Link href="/contact">
              <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
                <span>Get in touch</span>
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
        {/* image grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src={EacaImages.AccountBanner}
            alt="banner_image"
            className="w-full"
          />
        </motion.div>
      </div>
      <AccountingNeeds />
      <WhoWeWorkWith />
    </motion.section>
  );
}

export function AccountingNeeds() {
  return (
    <div className="my-16">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        className="text-[24px] sm:text-[32px] text-center font-medium"
      >
        Your One-stop shop for all your accounting needs
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {ACCOUNTINGDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="bg-white border rounded-xl p-6"
            key={index}
          >
            <div className="bg-[#f97316]/20 p-3 rounded-xl inline-block">
              <Image src={items?.icon} alt={`accountin_image_${index + 1}`} />
            </div>
            <h1 className="font-medium py-2 pt-6">{items?.title}</h1>
            <p className="text-[14px] text-[#717182]">{items?.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-6 w-full">
        <Link href="/contact">
          <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
            <span>Get in touch</span>
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function WhoWeWorkWith() {
  return (
    <div className="my-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h1 className="text-[24px] sm:text-[40px] text-center font-medium">
          Who We <span className="text-[#f97316]">Work With</span>
        </h1>
        <p className="text-[#717182] leading-7 text-center mx-1 sm:mx-8 md:mx-12 lg:mx-24">
          We work with owner-managed businesses and growth-minded SME owners who
          value clarity, ambition, and strategic direction. Our mission is to be
          your trusted advisor and growth partner - supporting you every step of
          your entrepreneurial journey.
        </p>
        <div className="flex items-center justify-center gap-2 mt-6 w-full">
          <Link href="/contact">
            <Button className="flex items-center justify-between py-6 rounded-xl bg-[#f97316] text-white cursor-pointer hover:bg-orange-500 duration-300">
              <span>Get in touch</span>
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {WHOWEWORKDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="bg-white border rounded-xl p-4"
            key={index}
          >
            <div className="bg-[#f97316]/20 p-3 rounded-xl inline-block">
              <Image src={items?.icon} alt={`accountin_image_${index + 1}`} />
            </div>
            <h1 className="font-normal text-[18px] text-balance py-2 pt-6">
              {items?.title}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// pricing component
export function PricingComponent() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      viewport={{ once: true }}
      className="my-16"
    >
      <div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="text-[24px] sm:text-[32px] md:text-[36px] mb-3 text-center font-medium"
        >
          Fixed, transparent pricing – no surprises, no hidden fees
        </motion.h1>
        <p className="text-[#717182] leading-7 text-center mx-2 sm:mx-8 md:mx-24">
          Each package is curated to support every stage of your business
          journey. We understand that every business has unique needs , get in
          touch to discuss any specific requirements tailored to your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-10 my-12">
        {PRICINGDATA.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className={`bg-white shadow-xl rounded-xl py-6 border ${
              items?.pricingTitle === "Foundation Plan" ? "h-185" : "h-180"
            } sm:h-185 lg:h-185`}
            key={index}
          >
            <div className="p-6 pb-0 border-b">
              <h3 className="uppercase text-[18px] font-semibold">
                {items?.pricingTitle}
              </h3>
              <div className="py-6">
                <p>From</p>
                <h1 className="text-[36px] sm:text-[36px] font-bold">
                  <span>£{items?.pricing}</span>
                  <span className="text-[#717182] text-[24px] font-semibold">
                    <i className="text-[18px] font-extrabold">/</i> mo
                  </span>
                </h1>
                <p className="text-[#717182] pt-4">{items?.pricingTag}</p>
                <p className="text-[#717182] pt-4">
                  {items?.pricingDescription}
                </p>
                <div className="w-full mt-8">
                  <Button
                    className={`${
                      items?.pricingTitle === "Momentum Plan"
                        ? "bg-[#f97316] text-white"
                        : "bg-transparent text-black"
                    } w-full capitalize border p-5 rounded-xl hover:bg-[#f97316] hover:text-white duration-300 cursor-pointer`}
                  >
                    Choose this plan
                  </Button>
                </div>
              </div>
            </div>
            <div className="py-6 p-6">
              <h1 className="uppercase">{items?.pricingData}</h1>
              {items?.pricingList.map((item, index) => (
                <div className="flex gap-1 items-start py-3" key={index}>
                  <p className="bg-[#f97316] p-1 rounded-full text-white inline-block">
                    <Check size={12} />
                  </p>
                  <p className="text-[13px] text-[#8F756C]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// contact us components
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
                  contact@elavareadvisory.com
                </p>
                <p className="text-[#717182] text-[14px]  sm:text-[16px]">
                  Response within 24h
                </p>
              </div>
            </div>
            {/* services information */}
            {/* <div className="flex gap-8 items-center border border-zinc-200 bg-white rounded-xl w-full p-4">
              <div className="bg-[#f97316]/10 text-[#f97316] p-4 rounded-sm">
                <MapPin size={16} />
              </div>
              <div className="">
                <h1 className="text-[#0e0e0e] text-[18px]">Services:</h1>
                <p className="text-[#717182] text-[16px]">100% Online</p>
                <p className="text-[#717182] text-[16px]">Nationwide</p>
              </div>
            </div> */}
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
