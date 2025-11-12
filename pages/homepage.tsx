"use client";

import { Fragment } from "react/jsx-runtime";
import Image from "next/image";
import {
  ChevronRight,
  CircleCheckBig,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { EacaImages } from "@/constant/image";
import { Button } from "@/components/ui/button";
import {
  PROFESSIONALVALUES,
  SERVICESDATA,
  WHYCHOOSEUSDATA,
} from "@/helpers/homepage.helpers";
import ContactForm from "@/components/others/contact-form";
import Link from "next/link";

export default function Homepage() {
  return (
    <Fragment>
      <HomepageBanner />
      <div className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1200px] mx-auto">
        <ComprehensiveServices />
        <AboutComponent />
        <ProfessionalValue />
        <WhyChooseUs />
        <ContactUsComponent />
      </div>
    </Fragment>
  );
}

export function HomepageBanner() {
  return (
    <section className="max-w-[90%] lg:max-w-[90%] xl:max-w-[1150px] mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
        <div>
          {/* header text */}
          <h1 className="text-[48px] sm:text-[56px] md:text-[60px] sm:leading-[70px]">
            <span className="text-[#f97316]">Reliable</span>{" "}
            <br className="hidden sm:block" /> Accounting That Stirs Confidence
          </h1>
          <p className="text-[#717182] leading-7 sm:text-[18px]">
            Elevare Advisory & Chartered Accountants provides accounting for
            small businesses, sole proprietors, financial services firms,
            contractors and freelancers. We give you clarity in your numbers and
            the insight to excel with them
          </p>
          {/* flex bullet points */}
          <div className="mt-4 text-[#0A0A0A]">
            <div className="flex items-center gap-3">
              <CircleCheckBig color="#00C950" size={18} />
              <p>Strategic financial planning and advisory</p>
            </div>
            <div className="flex items-center gap-3 my-5">
              <CircleCheckBig color="#00C950" size={18} />
              <p>Comprehensive tax optimization strategies</p>
            </div>
            <div className="flex items-center gap-3">
              <CircleCheckBig color="#00C950" size={18} />
              <p>Dedicated support for ambitious entrepreneurs</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6 w-full">
            <Button className="w-1/2 py-6 bg-[#F97316] text-white hover:bg-orange-500 hover:text-[#171717] duration-300 cursor-pointer">
              <span>Free Consultation</span>
              <ChevronRight />
            </Button>
            <Button className="w-1/2 py-6 bg-transparent text-[#0a0a0a] border border-[#0a0a0a] cursor-pointer">
              View Services
            </Button>
          </div>
          {/* business statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-8 sm:gap-4 mt-16">
            <div className="text-center">
              <h1 className="sm:text-[24px] text-[#f97316]">Chatered</h1>
              <p className="text-[#717182] text-[14px]">Qualified Accountant</p>
            </div>
            <div className="text-center">
              <h1 className="sm:text-[24px] text-[#f97316]">10+ Years</h1>
              <p className="text-[#717182] text-[14px]">Experience</p>
            </div>
            <div className="text-center col-span-2">
              <h1 className="sm:text-[24px] text-[#f97316]">100% Online</h1>
              <p className="text-[#717182] text-[14px]">Remote services</p>
            </div>
          </div>
        </div>
        {/* image grid */}
        <div className="relative">
          <Image
            src={EacaImages.BannerImage}
            alt="banner_image"
            className="w-full"
          />
          <div className="inline-block px-6 py-4 bg-white shadow-lg rounded-xl absolute right-0 top-0">
            <p className="text-[#717182] capitalize">Specialization</p>
            <h1 className="text-[#00C950] text-[24px]">Tax Advisory</h1>
          </div>
          <div className="inline-block px-6 py-4 bg-white shadow-lg rounded-xl absolute bottom-0">
            <p className="text-[#717182] capitalize">Your Partner</p>
            <h1 className="text-[#2B7FFF] text-[24px]">For Growth</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComprehensiveServices() {
  return (
    <div className="bg-[#ECECF04D] py-12 mt-48 w-full">
      <div className="text-center">
        <h1 className="text-[42px] sm:text-[48px]">
          <span className="text-[#f97316]">Complete</span> Services for your
          company
        </h1>
        <p className="sm:text-[18px] text-[#717182] mt-4">
          Personalized accounting solutions that accompany your business growth{" "}
          <br />
          with safety and efficiency.
        </p>
      </div>
      <div className="services_data grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-12 mx-4 sm:mx-12 mt-12">
        {SERVICESDATA.map((service, index) => (
          <div key={index} className="bg-white h-90 p-6 rounded-xl border">
            <div className="bg-[#f97316]/10 p-4 rounded-xl inline-block">
              <Image src={service.iconImage} alt={`${service.title} icon`} />
            </div>
            <h3 className="text-[18px] font-medium py-3">{service.title}</h3>
            <p className="text-[16px] text-[#717182] pb-4">
              {service.description}
            </p>
            <ul className="list-disc list-inside marker:text-orange-400 text-[#717182] text-sm space-y-1">
              {service.features.map((feature, i) => (
                <li key={i} className="text-[16px]">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutComponent() {
  return (
    <div className="py-12 mt-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <div>
            <h1 className="text-[48px] sm:text-[60px] leading-[66px]">
              Your partner in <br className="hidden sm:block" />
              <span className="text-[#F97316]">financial excellence</span>
            </h1>
            <p className="text-[#717182] leading-7 sm:text-[18px] sm:text-balance">
              As a chartered accountant with over 10 years of experience, I
              specialize in helping ambitious businesses achieve their goals
              through strategic financial guidance. At Elevare Advisory, we
              drive bold ambition with clarity.
              <br />
              <br />
              Throughout my career, I have developed deep expertise in tax
              planning, strategic advisory, and financial optimization. My
              mission is to provide clarity in complex financial matters,
              empowering businesses to make bold decisions with confidence.
              <br />
              <br />
              At Elevare Advisory, I am dedicated to building lasting
              partnerships with ambitious entrepreneurs and business owners,
              offering expert guidance with individual attention and unwavering
              commitment to your success.
            </p>
          </div>
          {/* grad experience */}
          <div className="mt-4">
            <div className="flex flex-row items-center gap-3">
              <GraduationCap color="#f97316" />
              <p>Qualifications and Certifications:</p>
            </div>
            {/* about grid items */}
            <div className="grid sm:grid-cols-2 items-center gap-8 sm:gap-4">
              <div className="flex items-center gap-3">
                <CircleCheckBig color="#00C950" size={18} />
                <p>Chartered Accountant (CA)</p>
              </div>
              <div className="flex items-center gap-3 sm:my-5">
                <CircleCheckBig color="#00C950" size={18} />
                <p> Bachelor&apos;s in Accounting & Finance</p>
              </div>
              <div className="flex items-center gap-3">
                <CircleCheckBig color="#00C950" size={18} />
                <p>Specialization in Tax Law</p>
              </div>
              <div className="flex items-center gap-3">
                <CircleCheckBig color="#00C950" size={18} />
                <p>IFRS Certified</p>
              </div>
              <div className="flex items-center gap-3">
                <CircleCheckBig color="#00C950" size={18} />
                <p>Advanced Tax Planning</p>
              </div>
              <div className="flex items-center gap-3">
                <CircleCheckBig color="#00C950" size={18} />
                <p>Continuous Professional Development</p>
              </div>
            </div>
            {/* about scheduling button */}
            <div className="mt-4">
              <Link href={"/contact"}>
                <Button className="w-1/2 py-6 bg-[#F97316] text-white hover:bg-orange-500 hover:text-[#171717] duration-300 cursor-pointer">
                  <span>Free consultation</span>
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={EacaImages.AboutFounder}
            alt="about-us-image"
            className="w-full"
          />
          <div className="grid grid-cols-2 items-center gap-6 mt-8">
            <div className="bg-[#ECECF080] py-8 px-3 sm:p-8 rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-[#F97316] text-[18px] sm:text-[24px]">10+</h1>
              <p className="text-[#717182] capitalize text-center">
                Years Experience
              </p>
            </div>
            <div className="bg-[#ECECF080] py-8 px-3 sm:p-8 rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-[#F97316] text-[18px] sm:text-[24px]">
                100%
              </h1>
              <p className="text-[#717182] capitalize text-center">
                Client dedication
              </p>
            </div>
            <div className="bg-[#ECECF080] py-8 px-3 sm:p-8 rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-[#F97316] text-[18px] sm:text-[24px]">24h</h1>
              <p className="text-[#717182] capitalize text-center">
                Response time
              </p>
            </div>
            <div className="bg-[#ECECF080] py-8 px-3 sm:p-8 rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-[#F97316] text-[18px] sm:text-[24px]">
                Online
              </h1>
              <p className="text-[#717182] capitalize text-center">
                Remote services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProfessionalValue() {
  return (
    <div className="mt-16">
      <div className="text-center mb-16">
        <h1 className="text-[48px] capitalize">My professional values</h1>
        <p className="text-[18px] text-[#717182]">
          The principles that guide my work and define my commitment <br /> to
          each client.
        </p>
      </div>
      {/* values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 items-center gap-10">
        {PROFESSIONALVALUES.map((values, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="bg-[#f97316]/10 p-6 rounded-full inline-block">
              <Image src={values.iconImage} alt={`${values.title} icon`} />
            </div>
            <p className="text-[18px] text-[#0A0A0A] my-4">{values.title}</p>
            <p className="text-[16px] text-[#717182]">{values.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <div className="bg-[#ECECF04D] py-12 mt-24 sm:mt-48 w-full">
      <div className="text-center">
        <h1 className="text-[42px] sm:text-[48px]">
          Why choose <span className="text-[#f97316]">Elevare Advisory</span> ?
        </h1>
        <p className="sm:text-[18px] text-[#717182]">
          Benefits of working with a dedicated, qualified professional committed
          to your company&apos;s success.
        </p>
      </div>
      <div className="services_data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12 mx-4 sm:mx-12 mt-12 pb-8 border-b border-b-zinc-200">
        {WHYCHOOSEUSDATA.map((choose, index) => (
          <div key={index} className="bg-white h-75 p-6 rounded-xl border">
            <div className="bg-[#f97316]/10 p-4 rounded-xl inline-block">
              <Image src={choose.iconImage} alt={`${choose.title} icon`} />
            </div>
            <h3 className="text-[18px] font-medium py-3">{choose.title}</h3>
            <p className="text-[16px] text-[#717182] pb-4">
              {choose.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// contact us components
export function ContactUsComponent() {
  return (
    <div className="mt-8">
      <div className="text-center">
        <h1 className="text-[48px]">
          Let&apos;s <span className="text-[#f97316]">Talk</span> ?
        </h1>
        <p className="text-[18px] text-[#717182]">
          Schedule a free consultation to learn more about our services and
          discover <br /> how I can help your business grow.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[40%_55%] items-start gap-10 mt-16">
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
                <p className="text-[#717182] text-[16px]">+1 (555) 123-4567</p>
                <p className="text-[#717182] text-[16px]">Quick Response</p>
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
                <p className="text-[#717182] text-[16px]">
                  contact@elavareadvisory.com
                </p>
                <p className="text-[#717182] text-[16px]">
                  Response withing 24h
                </p>
              </div>
            </div>
            {/* services information */}
            <div className="flex gap-8 items-center border border-zinc-200 bg-white rounded-xl w-full p-4">
              {/* icon */}
              <div className="bg-[#f97316]/10 text-[#f97316] p-4 rounded-sm">
                <MapPin size={16} />
              </div>
              {/* text contents */}
              <div className="">
                <h1 className="text-[#0e0e0e] text-[18px]">Services:</h1>
                <p className="text-[#717182] text-[16px]">100% Online</p>
                <p className="text-[#717182] text-[16px]">Nationwide</p>
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
                <p className="text-[#717182] text-[16px]">Mondays - Fridays</p>
                <p className="text-[#717182] text-[16px]">9:00AM - 6:00PM</p>
              </div>
            </div>
          </div>
          <div className="contact_informations">
            <div className="contact_cards bg-[#f97316] h-60 p-6 rounded-xl my-8 flex flex-col items-center justify-center gap-4 text-white">
              <h1 className="text-[24px] font-normal">
                First consultation Free.
              </h1>
              <p className="text-[16px] text-center w-[80%]">
                Schedule a no-commitment conversation to discuss your
                company&apos;s needs and learn about our solutions.
              </p>
              <Button className="bg-white hover:bg-[#0e0e0e] hover:text-white  text-[#0e0e0e] w-full capitalize cursor-pointer py-6 rounded-xl duration-300">
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
