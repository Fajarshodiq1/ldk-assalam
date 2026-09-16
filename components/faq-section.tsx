"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

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
    <section className="py-20 md:py-28 bg-white border-t border-black/[0.06] text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-5 md:px-12 space-y-20">
        {/* ================= SECTION 1: MITOS VS FAKTA ================= */}
        <div className="space-y-10">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
              <Sparkles size={13} className="text-emerald-600" />
              Luruskan Persepsi
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
              Masih Ragu Buat Gabung? Yuk Cek Ini Dulu
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Banyak stigma negatif atau ketakutan maba soal LDK yang sebenarnya
              cuma mitos belaka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mythsAndFacts.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 border border-black/[0.06] rounded-3xl p-6 flex flex-col justify-between hover:border-black/15 transition-all space-y-6"
              >
                {/* Myth Box */}
                <div className="space-y-2.5 pb-5 border-b border-black/[0.06]">
                  <div className="inline-flex items-center gap-1.5 text-rose-600 text-xs font-semibold bg-rose-50 border border-rose-200/60 px-2.5 py-0.5 rounded-md">
                    <XCircle size={14} /> Mitos
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                    "{item.myth}"
                  </p>
                </div>

                {/* Fact Box */}
                <div className="space-y-2.5 pt-1">
                  <div className="inline-flex items-center gap-1.5 text-emerald-700 text-xs font-semibold bg-emerald-100/60 border border-emerald-200/60 px-2.5 py-0.5 rounded-md">
                    <CheckCircle2 size={14} /> Fakta
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: ACCORDION FAQ ================= */}
        <div className="pt-10 border-t border-black/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-black/[0.08] text-neutral-800 px-3 py-1 rounded-full text-xs font-medium">
              <HelpCircle size={14} className="text-neutral-600" />
              Tanya Jawab
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Pertanyaan yang Sering Ditanyakan (FAQ)
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              Punya pertanyaan seputar keanggotaan atau pendaftaran? Temukan
              jawabannya di sini atau langsung hubungi kami via WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-black/[0.06] rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-medium text-xs sm:text-sm text-neutral-900 hover:text-emerald-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-neutral-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs text-neutral-600 border-t border-black/[0.04] leading-relaxed">
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
