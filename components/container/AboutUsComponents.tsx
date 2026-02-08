"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { EacaImages } from "@/constant/image";
import { fadeUp } from "@/components/animations/variants";

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
                ‘Seun Adeoye (FCCA, CISA)
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
