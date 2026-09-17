"use client";

import { motion } from "framer-motion";
import { Users2, Award, HeartHandshake, Compass } from "lucide-react";
import { Sparkle } from "lucide-react";

const benefits = [
  {
    icon: Users2,
    title: "Relasi & Circle Positif",
    desc: "Teman saling jaga dan saling dukung selama masa perkuliahan sampai lulus.",
  },
  {
    icon: Award,
    title: "Asah Soft Skill & Leadership",
    desc: "Pengalaman langsung kelola event, public speaking, leadership, hingga keorganisasian.",
  },
  {
    icon: HeartHandshake,
    title: "Ruang Aksi & Pengabdian",
    desc: "Wadah nyata buat bikin kegiatan sosial, berbagi ke masyarakat, dan syiar di kampus.",
  },
  {
    icon: Compass,
    title: "Lingkungan Growth Mindset",
    desc: "Tempat belajar agama yang santai, inklusif, tanpa saling menghakimi.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#121212] border-t border-white/10 text-white font-sans relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-medium tracking-wide backdrop-blur-md">
            <Sparkle
              size={12}
              className="text-white fill-white animate-pulse"
            />
            <span>Why Join Us</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-syne leading-[1.15]">
            Kenapa Bikin Keputusan Buat Masuk LDK As-Salam?
          </h2>
          <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed font-inter">
            Bukan sekadar organisasi kampus biasa. Ini tempat tumbuh bareng di
            luar jam kuliah.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 sm:p-7 rounded-3xl bg-neutral-950 border border-white/15 flex flex-col justify-between hover:border-white/30 transition-all group relative overflow-hidden shadow-xl"
              >
                {/* Subtle Hover Glow Effect */}
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                    <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white font-syne tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-inter">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
