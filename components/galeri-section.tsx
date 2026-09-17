"use client";

import { motion } from "framer-motion";
import { Sparkle, ArrowUpRight } from "lucide-react";
import maulidImg from "@/public/maulid.jpg";
import kamilahImg from "@/public/kamilah.jpg";
import muregImg from "@/public/mureg.jpg";
import banjariImg from "@/public/fesban.jpg";
const galleryItems = [
  {
    title: "Maulid Nabi Muhammad SAW",
    category: "Syiar & Keumatan",
    image: maulidImg.src, // Ambil properti .src untuk gambar lokal
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "Kajian Kemuslimahan Ila Lillah",
    category: "Kemuslimahan",
    image: kamilahImg.src,
    size: "col-span-1 row-span-1",
  },
  {
    title: "Tuan Rumah Musyawarah Regional",
    category: "FEST (FoSSEI)",
    image: muregImg.src,
    size: "col-span-1 row-span-1",
  },
  {
    title: "Festival Banjari Tingkat Provinsi",
    category: "Kesenian Islami",
    image: banjariImg.src,
    size: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function GaleriSection() {
  return (
    <section
      id="galeri"
      className="py-20 md:py-28 bg-violet-900 text-white font-sans relative overflow-hidden border-t border-white/10"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-md">
              <Sparkle
                size={14}
                className="text-violet-400 fill-violet-400 animate-pulse"
              />
              Dokumentasi Kegiatan
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-syne leading-[1.15]">
              Momen Kebersamaan & Pergerakan
            </h2>
          </div>
          <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-inter">
            Merekam jejak langkah dan kehangatan seluruh agenda yang telah kita
            lewati bersama di lingkungan kampus.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative group rounded-3xl overflow-hidden border border-white/15 min-h-[260px] md:min-h-[320px] shadow-2xl bg-neutral-950 ${item.size}`}
            >
              {/* Menggunakan Tag <img> biasa */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
              />

              {/* Overlay Gradient with Violet/Black Tone */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity z-10" />

              {/* Content Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between z-20">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-violet-300 bg-violet-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-violet-500/30">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight font-syne">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
