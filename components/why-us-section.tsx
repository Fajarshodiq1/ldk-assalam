"use client";

import { motion } from "framer-motion";
import { Users2, Award, HeartHandshake, Compass } from "lucide-react";

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
    <section className="py-20 bg-white border-t border-black/[0.06] text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="max-w-xl mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
            Why Join Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Kenapa Bikin Keputusan Buat Masuk LDK As-Salam?
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Bukan sekadar organisasi kampus biasa. Ini tempat tumbuh bareng di
            luar jam kuliah.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50 border border-black/[0.06] flex flex-col justify-between hover:border-black/15 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center text-neutral-900 shadow-2xs">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
