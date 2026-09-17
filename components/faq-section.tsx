"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Sparkle,
} from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

// Data Mitos vs Fakta
const mythsAndFacts = [
  {
    myth: "Harus pinter agama atau alumni pesantren dulu buat masuk LDK.",
    fact: "Enggak sama sekali! LDK justru tempat belajar bareng dari nol tanpa di-judge. Banyak anggota yang belajar tajwid dan dasar agama bareng dari awal.",
  },
  {
    myth: "Masuk LDK bikin sibuk dan IPK bisa anjlok.",
    fact: "Justru sebaliknya. Di LDK ada budaya kelompok belajar, mentoring akademik dari kating (kakak tingkat), dan sharing catatan kuliah.",
  },
  {
    myth: "LDK itu kaku, pembahasannya berat, dan kurang seru.",
    fact: "Kegiatan LDK juga ada camping, futsal, rihla/jalan-jalan, workshop desain/public speaking, sampai kumpul santai sambil ngopi.",
  },
];

// Data FAQ Accordion
const faqs = [
  {
    q: "Apakah pendaftaran kader terbuka untuk semua angkatan dan prodi?",
    a: "Ya, pendaftaran terbuka untuk seluruh mahasiswa aktif Universitas Trilogi dari semua program studi dan kualifikasi angkatan.",
  },
  {
    q: "Bagaimana kalau saya sudah aktif di UKM atau Ormawa lain?",
    a: "Tidak masalah sama sekali. Penjadwalan agenda di LDK sangat fleksibel dan menghargai prioritas akademik serta aktivitas organisasi kamu yang lain.",
  },
  {
    q: "Apakah ada biaya pendaftaran untuk bergabung?",
    a: "Pendaftaran 100% gratis tanpa dipungut biaya apapun.",
  },
  {
    q: "Bagaimana alur pendaftaran setelah saya mengisi formulir?",
    a: "Setelah mengisi form, kamu akan dimasukkan ke dalam grup WhatsApp calon kader untuk mendapatkan undangan Welcome Gathering dan info kegiatan selanjutnya.",
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      className="py-20 sm:py-28 md:py-36 bg-violet-900 text-white font-sans relative overflow-hidden"
      id="faq"
    >
      {/* Background Beams Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <BackgroundBeams />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-24 sm:space-y-32 relative z-10">
        {/* ================= SECTION 1: MITOS VS FAKTA ================= */}
        <div className="space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-[#121212] backdrop-blur-md border border-white/20 text-white px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-medium tracking-wide">
                <Sparkle
                  size={12}
                  className="text-white fill-white animate-pulse"
                />
                <span>Luruskan Persepsi</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] font-syne">
                Masih Ragu Buat Gabung? Yuk Cek Ini Dulu
              </h2>
            </div>
            <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-inter">
              Banyak stigma negatif atau ketakutan maba soal LDK yang sebenarnya
              cuma mitos belaka.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {mythsAndFacts.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#121212] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all space-y-6 shadow-2xl relative overflow-hidden group"
              >
                {/* Efek Hover: Gelembung Air Menyatu ke Tengah */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <span className="absolute top-1/2 -left-[10%] -translate-y-1/2 w-[65%] h-[220%] bg-white rounded-[100%] scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left z-0" />
                  <span className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[65%] h-[220%] bg-white rounded-[100%] scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-right z-0" />
                </div>

                {/* Myth Box */}
                <div className="space-y-3 pb-6 border-b border-white/15 group-hover:border-black/15 transition-colors duration-300 relative z-10">
                  <div className="inline-flex items-center gap-1.5 text-rose-300 text-xs font-semibold bg-rose-950/80 border border-rose-500/40 px-3 py-1 rounded-md group-hover:bg-black/10 group-hover:text-rose-700 group-hover:border-rose-700/30 transition-colors">
                    <XCircle
                      size={14}
                      className="text-rose-400 group-hover:text-rose-700"
                    />{" "}
                    Mitos 0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 leading-snug font-inter group-hover:text-neutral-900 transition-colors">
                    "{item.myth}"
                  </p>
                </div>

                {/* Fact Box */}
                <div className="space-y-2.5 pt-1 relative z-10">
                  <div className="inline-flex items-center gap-1.5 text-emerald-300 text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-md group-hover:bg-black/10 group-hover:text-emerald-800 group-hover:border-emerald-700/30 transition-colors">
                    <CheckCircle2
                      size={14}
                      className="text-emerald-400 group-hover:text-emerald-800"
                    />{" "}
                    Fakta LDK
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-inter group-hover:text-neutral-800 transition-colors">
                    {item.fact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: ACCORDION FAQ ================= */}
        <div className="pt-16 sm:pt-20 border-t border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Left Column (Sticky Title & Desc) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-1.5 bg-[#121212] backdrop-blur-md border border-white/20 text-white px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-medium tracking-wide">
              <HelpCircle size={13} className="text-white" />
              <span>Tanya Jawab</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-syne tracking-tight text-white leading-tight">
              Pertanyaan yang Sering Ditanyakan (FAQ)
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-inter max-w-md">
              Punya pertanyaan seputar keanggotaan atau pendaftaran? Temukan
              jawabannya di sini atau langsung hubungi kami melalui narahubung
              resmi.
            </p>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#121212] border border-white/15 rounded-3xl overflow-hidden transition-all shadow-xl relative group"
                >
                  {/* Efek Hover: Gelembung Air Menyatu ke Tengah */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <span className="absolute top-1/2 -left-[10%] -translate-y-1/2 w-[65%] h-[220%] bg-white rounded-[100%] scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left z-0" />
                    <span className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[65%] h-[220%] bg-white rounded-[100%] scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-right z-0" />
                  </div>

                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm md:text-base text-white group-hover:text-neutral-900 transition-colors font-syne relative z-10"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#121212]/10 flex items-center justify-center shrink-0 transition-colors">
                      <ChevronDown
                        size={16}
                        className={`text-white group-hover:text-neutral-900 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-white/80 group-hover:text-neutral-800 border-t border-white/15 group-hover:border-black/15 transition-colors leading-relaxed font-inter">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
