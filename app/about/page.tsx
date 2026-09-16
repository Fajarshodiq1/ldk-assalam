"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Award,
  History,
  Compass,
  Milestone,
} from "lucide-react";

const historyTimeline = [
  {
    year: "2010",
    title: "Awal Berdiri",
    desc: "Inisiasi pembentukan kelompok kajian kecil oleh sekelompok mahasiswa Universitas Trilogi untuk memfasilitasi kegiatan keislaman di lingkungan kampus.",
  },
  {
    year: "2015",
    title: "Resmi Menjadi UKM LDK",
    desc: "Pengesahan LDK As-Salam sebagai Unit Kegiatan Mahasiswa (UKM) resmi di bawah naungan Rektorat Universitas Trilogi.",
  },
  {
    year: "2020",
    title: "Transformasi Digital & Syiar Media",
    desc: "Adaptasi kegiatan dakwah ke platform digital dan pembentukan divisi kreatif untuk menjangkau mahasiswa lebih luas secara online.",
  },
  {
    year: "2026",
    title: "Sinergi & Akselerasi Kader",
    desc: "Penguatan jaringan eksternal antar-LDK Jabodetabek serta peningkatan kapasitas kepemimpinan dan profesionalisme kader.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Ukhuwah Islamiyah",
    desc: "Membangun persaudaraan yang erat antar sesama mahasiswa berasaskan nilai-nilai keislaman.",
  },
  {
    icon: BookOpen,
    title: "Pembinaan & Edukasi",
    desc: "Menyediakan wadah belajar, diskusi, dan pengembangan karakter islami yang holistik.",
  },
  {
    icon: ShieldCheck,
    title: "Integritas & Moral",
    desc: "Membentuk kepribadian mahasiswa yang jujur, amanah, dan berakhlakul karimah.",
  },
  {
    icon: Award,
    title: "Kontribusi Akademik",
    desc: "Mendorong kader untuk unggul tidak hanya dalam spiritual, tapi juga prestasi akademik.",
  },
];

const stats = [
  { label: "Kader Aktif", value: "150+" },
  { label: "Program Kerja / Thn", value: "24+" },
  { label: "Tahun Berdiri", value: "2010" },
  { label: "Alumni Tersebar", value: "500+" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-neutral-900 pt-32 pb-24 px-4 font-sans antialiased overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* HERO SECTION ABOUT */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5"
          >
            <Sparkles size={13} className="text-emerald-600" />
            Mengenal Lebih Dekat
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900"
          >
            Lembaga Dakwah Kampus{" "}
            <span className="text-emerald-700">As-Salam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-sm sm:text-base leading-relaxed"
          >
            Wadah kolaborasi dan pembinaan karakter mahasiswa Universitas
            Trilogi. Kami hadir untuk melahirkan generasi muda yang unggul
            secara intelektual, spiritual, dan sosial.
          </motion.p>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white border border-black/[0.08] rounded-3xl p-6 text-center shadow-2xs space-y-1"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xs text-neutral-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SEJARAH LDK AS-SALAM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-black/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xs space-y-8"
        >
          <div className="flex items-center gap-3 border-b border-black/[0.06] pb-6">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700">
              <History size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
                Sejarah Singkat & Perjalanan
              </h2>
              <p className="text-xs text-neutral-500">
                Jejak langkah LDK As-Salam Universitas Trilogi dalam membina
                karakter civitas akademika.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-600 text-sm leading-relaxed">
            <p>
              LDK As-Salam Universitas Trilogi berawal dari semangat sekumpulan
              mahasiswa yang ingin menghadirkan ruang diskusi, kajian, serta
              kegiatan sosial berbasis keislaman di lingkungan kampus. Seiring
              berjalannya waktu, komunitas ini bertransformasi menjadi Lembaga
              Dakwah Kampus resmi di bawah naungan rektorat.
            </p>
            <p>
              Nama{" "}
              <strong className="text-neutral-900 font-medium">As-Salam</strong>{" "}
              diambil dari salah satu Asmaul Husna yang berarti "Maha Sejahtera
              / Kedamaian", mencerminkan visi lembaga untuk menjadi wadah yang
              menyejukkan, inklusif, serta membawa manfaat nyata bagi seluruh
              civitas akademika tanpa membeda-bedakan latar belakang.
            </p>
          </div>

          {/* TIMELINE MILESTONE */}
          <div className="pt-6 border-t border-black/[0.04]">
            <div className="flex items-center gap-2 mb-6">
              <Milestone size={16} className="text-emerald-600" />
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                Milestone Utama
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {historyTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-4 rounded-2xl border border-black/[0.04] space-y-2"
                >
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-md inline-block">
                    {item.year}
                  </span>
                  <h4 className="font-semibold text-neutral-900 text-sm tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* VISI & MISI SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/[0.08] rounded-3xl p-8 space-y-4 shadow-2xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700">
                <Eye size={20} />
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
                Visi Kami
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Menjadi pusat syiar Islam dan pembentukan karakter kader
                mahasiswa yang profesional, berakhlak mulia, serta kontributif
                bagi kampus dan masyarakat luas.
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.04]">
              <span className="text-xs font-semibold text-emerald-700">
                LDK As-Salam 2026
              </span>
            </div>
          </motion.div>

          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/[0.08] rounded-3xl p-8 space-y-4 shadow-2xs"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700">
              <Target size={20} />
            </div>
            <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
              Misi Utama
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 list-none p-0">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span>
                  Menyelenggarakan pembinaan rutin keislaman berlandaskan
                  Al-Qur'an dan As-Sunnah.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span>
                  Mempererat ukhuwah antarcivitas akademika dan organisasi
                  kemahasiswaan kampus.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                <span>
                  Mengembangkan potensi kepemimpinan, media kreatif, dan
                  wirausaha kader.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* NILAI-NILAI UTAMA (CORE VALUES) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Nilai-Nilai Utama
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Prinsip dasar yang menjadi landasan setiap langkah dan program
              kerja kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="bg-white border border-black/[0.08] rounded-3xl p-6 space-y-3 shadow-2xs hover:border-black/20 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-neutral-800">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-base tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
