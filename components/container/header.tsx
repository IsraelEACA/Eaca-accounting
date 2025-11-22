"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EacaImages } from "@/constant/image";
import { Button } from "../ui/button";
import { HEADERLINKSHELPERDATA } from "@/helpers/homepage.helpers";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-0 border-b-[0.5px] py-6 fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[90%] xl:max-w-[1150px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={EacaImages.LogoImage}
            alt="logo_image"
            className="w-[120px] sm:w-[150px]"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-12 text-[#717182]">
          {HEADERLINKSHELPERDATA.map((menu, index) => (
            <Link href={menu.link} key={index}>
              <p className="cursor-pointer capitalize hover:text-[#F97316] duration-300">
                {menu.linkName}
              </p>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href={"/contact"}>
            <Button className="px-12 py-5 bg-[#F97316] text-white hover:bg-orange-600 hover:text-white duration-300 cursor-pointer">
              Contact us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <X size={28} className="text-[#171717]" />
            ) : (
              <Menu size={28} className="text-[#171717]" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay + Slide-In Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Slide Menu */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 w-[80%] h-full bg-white shadow-xl z-50 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Close Button inside */}
                <div className="flex justify-end mb-6">
                  <button onClick={closeMenu}>
                    <X size={28} className="text-[#171717]" />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex flex-col gap-6 text-[#717182] text-lg">
                  {HEADERLINKSHELPERDATA.map((menu, index) => (
                    <Link href={menu.link} key={index} onClick={closeMenu}>
                      <p className="cursor-pointer capitalize hover:text-[#F97316] duration-300">
                        {menu.linkName}
                      </p>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link href={"/contact"} onClick={closeMenu}>
                  <Button className="w-full bg-[#F97316] text-white hover:bg-orange-600 hover:text-[#171717] duration-300 cursor-pointer">
                    Contact us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
