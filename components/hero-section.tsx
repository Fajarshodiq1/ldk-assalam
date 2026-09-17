"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import { CometCard } from "@/components/ui/comet-card";
import heroImg from "@/public/hero.webp";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: -6,
    transition: { duration: 0.6, ease: "backOut", delay: 0.4 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative bg-violet-900 min-h-screen w-full overflow-x-clip text-white font-inter">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>

      <div className="relative z-10 min-h-screen w-full px-6 md:px-16 py-24 max-w-7xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Kolom kiri: teks */}
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-fredoka text-yellow-300 text-sm sm:text-base md:text-xl -rotate-1 mb-2"
          >
            LDK As-Salam lagi buka pintu, nih ✌️
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="font-fredoka font-bold leading-[0.95] sm:leading-[0.9] tracking-tight text-4xl sm:text-5xl md:text-7xl"
          >
            Hijrah itu seru kok,
            <br />
            bareng kita.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-6 sm:mt-8 max-w-md text-violet-100 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Bukan cuma soal kajian, LDK As-Salam itu rumah buat kamu yang mau
            belajar agama, ketemu circle yang positif, sambil tetap
            ketawa-ketiwi kayak biasa. Serius pas perlu, santai pas bisa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 sm:mt-10"
          >
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScYfAOvyqzBDu4o1FEVgGLdYxJ74wr5_k25gyVWFzOskh3bvg/viewform"
              className="font-fredoka text-xl sm:text-2xl md:text-3xl underline decoration-yellow-300 decoration-4 underline-offset-8 hover:text-yellow-300 transition-colors"
            >
              Yuk gabung, klik sini →
            </a>
          </motion.div>
        </div>

        {/* Kolom kanan: CometCard */}
        <div className="relative flex justify-center md:justify-end">
          <CometCard>
            <button
              type="button"
              className="flex w-80 md:w-[26rem] cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-4"
              aria-label="Lihat kegiatan LDK As-Salam"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-square w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                    alt="Kegiatan LDK As-Salam"
                    src={typeof heroImg === "object" ? heroImg.src : heroImg}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />

                  {/* Stiker nempel langsung di atas foto */}
                  <motion.div
                    variants={popIn}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-3 -left-5 bg-yellow-300 text-violet-950 font-fredoka font-bold px-4 py-2.5 rounded-xl shadow-lg text-[10px] sm:text-xs md:text-sm rotate-[-11deg] z-10 select-none"
                    style={{ transform: "translateZ(40px) rotate(-11deg)" }}
                  >
                    open reg
                    <br />
                    tiap tahun!
                  </motion.div>
                </div>
              </div>
              <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                <div className="text-xs">LDK As-Salam</div>
                <div className="text-xs text-gray-300 opacity-50">#OpenReg</div>
              </div>
            </button>
          </CometCard>
        </div>
      </div>
    </section>
  );
}
