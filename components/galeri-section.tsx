"use client";

import { motion } from "framer-motion";
import { Sparkle, ArrowUpRight } from "lucide-react";

const galleryItems = [
  {
    title: "Kajian & Silaturahmi Akbar",
    category: "Syiar & Keumatan",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "Mabim & Upgrading Kader",
    category: "Kaderisasi",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2532&auto=format&fit=crop",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Seminar Ekonomi Syariah",
    category: "FEST (FoSSEI)",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Jumat Berbagi & Aksisos",
    category: "Pengabdian Sosial",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2670&auto=format&fit=crop",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function GaleriSection() {
  return (
    <section
      id="galeri"
      className="py-20 md:py-28 bg-slate-50 text-neutral-900 font-sans relative"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-white border border-black/[0.08] text-neutral-800 px-3.5 py-1.5 rounded-full text-xs font-medium shadow-2xs">
              <Sparkle
                size={14}
                className="text-emerald-600 fill-emerald-600"
              />
              Dokumentasi Kegiatan
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
              Momen Kebersamaan & Pergerakan
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-md leading-relaxed">
            Merekam jejak langkah dan kehangatan seluruh agenda yang telah kita
            lewati bersama di lingkungan kampus.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden border border-black/[0.08] min-h-[260px] md:min-h-[300px] shadow-[0_2px_20px_-4px_rgba(0,0,0,0.03)] ${item.size}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-medium text-emerald-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight mt-2.5">
                    {item.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
