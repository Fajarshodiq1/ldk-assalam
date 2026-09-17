"use client";

import { Sparkle } from "lucide-react";
import "./css/hero.css";

const services = [
  "GASKEUN YUKK😎",
  "JOIN🎯",
  "SERU BANGET🤩",
  "LINGKUNGAN SUPPORTIF🖊️",
  "BERKEMBANG🆙",
  "KEBERSAMAAN👥",
];

export default function CrossMarquee() {
  return (
    /* Container penyambung: background ungu Hero di atas, background hitam About di bawah */
    <div className="relative w-full bg-[#121212] overflow-hidden">
      {/* Visual Fill Ungu dari Hero Section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-violet-900 pointer-events-none" />

      {/* Cross Marquee Container */}
      <section className="relative w-full py-12 md:py-24 z-20 overflow-hidden">
        {/* Banner 1: Miring Naik Ke Kanan */}
        <div className="relative z-10 w-[120%] -left-[10%] bg-white py-3 md:py-5 shadow-xl rotate-[-2.5deg] overflow-hidden border-y border-black/15">
          <div className="animate-marquee flex whitespace-nowrap items-center gap-6 sm:gap-8">
            {[...services, ...services, ...services].map((item, index) => (
              <div key={index} className="flex items-center gap-6 sm:gap-8">
                <span className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight text-black font-syne">
                  {item}
                </span>
                <Sparkle
                  className="text-[#7b38f7] fill-[#7b38f7] shrink-0"
                  size={20}
                  sm-size={26}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Banner 2: Miring Menyilang Ke Bawah */}
        <div className="relative z-20 w-[120%] -left-[10%] bg-[#f0e6ff] py-3 md:py-5 shadow-2xl rotate-[2.5deg] -mt-8 sm:-mt-10 md:-mt-14 overflow-hidden border-y border-black/15">
          <div className="animate-marquee-reverse flex whitespace-nowrap items-center gap-6 sm:gap-8">
            {[...services, ...services, ...services].map((item, index) => (
              <div key={index} className="flex items-center gap-6 sm:gap-8">
                <span className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight text-black font-syne">
                  {item}
                </span>
                <Sparkle
                  className="text-[#7b38f7] fill-[#7b38f7] shrink-0"
                  size={20}
                  sm-size={26}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
