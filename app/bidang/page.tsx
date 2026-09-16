"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Share2,
  Sparkles,
  PartyPopper,
  UserPlus,
  CheckCircle2,
  Calendar,
  Target,
} from "lucide-react";

const divisions = [
  {
    id: "media",
    title: "Divisi Media & Informasi",
    subtitle: "Branding, Publikasi, & Konten Kreatif",
    icon: Share2,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
    desc: "Bertanggung jawab mengelola seluruh media komunikasi publik, visual branding, pembuatan konten syiar kreatif, serta pengelolaan website dan dokumentasi kegiatan.",
    responsibilities: [
      "Pengelolaan media sosial resmi LDK As-Salam",
      "Desain grafis dan edisi video dakwah kreatif",
      "Liputan dan dokumentasi seluruh agenda organisasi",
      "Pengembangan aset digital dan website lembaga",
    ],
    prokja: [
      { name: "As-Salam Media Academy", frequency: "Bulanan" },
      { name: "Content Creation Routine", frequency: "Mingguan" },
      { name: "Buletin & Magazine Digital", frequency: "Per Semester" },
    ],
  },
  {
    id: "syiar",
    title: "Syiar & Keumatan",
    subtitle: "Kajian, Pembinaan, & Pelayanan Umat",
    icon: Sparkles,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    desc: "Menjadi garda terdepan dalam menyebarkan nilai-nilai Islam inklusif di lingkungan kampus melalui kajian rutin, peringatan hari besar Islam, dan bakti sosial.",
    responsibilities: [
      "Penyelenggaraan kajian rutin keislaman kampus",
      "Peringatan Hari Besar Islam (PHBI)",
      "Program bakti sosial dan kepedulian masyarakat",
      "Penyediaan sarana ibadah dan kenyamanan musala",
    ],
    prokja: [
      { name: "Kajian Rutin Kampus (KARK)", frequency: "2 Minggu Sekali" },
      { name: "As-Salam Peduli Umat", frequency: "Kondisional / Insidental" },
      { name: "Tabligh Akbar Kampus", frequency: "Tahunan" },
    ],
  },
  {
    id: "fest",
    title: "Divisi Fest & Event Management",
    subtitle: "Event Skala Besar & Networking",
    icon: PartyPopper,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
    desc: "Merancang dan mengeksekusi event unggulan skala universitas maupun antar-kampus, guna membangun citra LDK yang dinamis, adaptif, dan menyenangkan.",
    responsibilities: [
      "Perencanaan dan manajemen operasional event besar",
      "Negosiasi kerja sama sponsor dan media partner",
      "Penyusunan konsep acara dan logistik teknis",
      "Membangun kolaborasi dengan ORMAWA lain",
    ],
    prokja: [
      { name: "Islamic Cultural Festival", frequency: "Tahunan" },
      { name: "Seminar & Workshop Pemuda", frequency: "Per Semester" },
      { name: "Lomba & Kompetisi Keislaman", frequency: "Tahunan" },
    ],
  },
  {
    id: "kaderisasi",
    title: "Divisi Kaderisasi & PSDM",
    subtitle: "Rekrutmen, Pembinaan, & Pengembangan Diri",
    icon: UserPlus,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
    desc: "Fokus pada pengelolaan sumber daya manusia, alur penerimaan anggota baru, pendampingan karakter, serta pengembangan soft skill kepemimpinan kader.",
    responsibilities: [
      "Rekrutmen dan onboarding pengurus/anggota baru",
      "Pemetaan potensi dan pengembangan bakat kader",
      "Penyelenggaraan training kepemimpinan (LDKM)",
      "Evaluasi kinerja dan keharmonisan internal",
    ],
    prokja: [
      { name: "Open Recruitment & Welcoming Party", frequency: "Awal Periode" },
      {
        name: "Latihan Keterampilan Manajemen (LKM)",
        frequency: "Per Tahunan",
      },
      { name: "Gathering & Bonding Internal", frequency: "Bulanan" },
    ],
  },
];

export default function BidangPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-neutral-900 pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 font-sans antialiased overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 border border-emerald-200/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full inline-block"
          >
            Fokus & Operasional
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-5xl font-semibold tracking-tight text-neutral-900"
          >
            Bidang & Divisi Kerja
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-xs sm:text-base leading-relaxed"
          >
            Empat pilar utama yang menggerakkan seluruh program kerja, pelayanan
            mahasiswa, dan syiar di LDK As-Salam Universitas Trilogi.
          </motion.p>
        </div>

        {/* DIVISIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {divisions.map((div, idx) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white border border-black/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-2xs hover:border-black/20 transition-all flex flex-col justify-between h-full"
              >
                {/* Header Divisi */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <span
                        className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border inline-block ${div.badgeColor}`}
                      >
                        {div.subtitle}
                      </span>
                      <h2 className="text-lg sm:text-2xl font-semibold text-neutral-900 tracking-tight leading-snug">
                        {div.title}
                      </h2>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-100 flex items-center justify-center text-neutral-800 shrink-0 border border-black/[0.04]">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {div.desc}
                  </p>
                </div>

                {/* Tugas Utama & Prokja */}
                <div className="space-y-5 pt-4 border-t border-black/[0.05]">
                  {/* Responsibilities */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                      <Target size={14} className="text-emerald-600 shrink-0" />
                      <span>Fokus Tugas Utama</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0 m-0">
                      {div.responsibilities.map((res, rIdx) => (
                        <li
                          key={rIdx}
                          className="text-xs text-neutral-600 flex items-start gap-2 bg-slate-50 p-2.5 sm:p-2 rounded-xl border border-black/[0.03]"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500 shrink-0 mt-0.5"
                          />
                          <span className="leading-tight">{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Program Kerja Unggulan */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                      <Calendar
                        size={14}
                        className="text-emerald-600 shrink-0"
                      />
                      <span>Program Kerja Unggulan</span>
                    </div>
                    <div className="space-y-2 sm:space-y-1.5">
                      {div.prokja.map((pj, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex flex-wrap items-center justify-between gap-1.5 text-xs bg-slate-50/80 px-3 py-2 sm:py-2 rounded-xl border border-black/[0.03]"
                        >
                          <span className="font-medium text-neutral-800">
                            {pj.name}
                          </span>
                          <span className="text-[10px] text-neutral-500 bg-white px-2 py-0.5 rounded-md border border-black/[0.05] shrink-0">
                            {pj.frequency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
