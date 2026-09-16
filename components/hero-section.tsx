"use client";

import {
  ArrowUpRight,
  Sparkle,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-slate-50 min-h-screen w-full overflow-hidden text-neutral-900 font-sans antialiased">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Floating Sparkles */}
      <motion.div
        animate={{ y: [0, -6, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-6 md:left-20 text-emerald-600/40 pointer-events-none z-10"
      >
        <Sparkle size={24} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 right-6 md:right-24 text-emerald-600/30 pointer-events-none z-10"
      >
        <Sparkle size={20} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 flex flex-col justify-between min-h-[calc(100vh-140px)]"
      >
        {/* Main Banner / Headline Area */}
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          {/* Badge Active Status */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white border border-black/[0.08] px-3.5 py-1.5 rounded-full shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)]"
          >
            <span className="text-xs font-medium text-neutral-600 tracking-tight">
              Open Recruitment Kader 2026
            </span>
          </motion.div>

          {/* Large Typography */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
              Ruang Tumbuh & <br />
              <span className="text-neutral-400 font-normal">
                Mengabdi Bersama.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed font-normal"
          >
            LDK As-Salam hadir sebagai wadah pembinaan karakter, kolaborasi
            positif, dan tempat berpulang mahasiswa muslim di lingkungan kampus.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <motion.a
              href="#daftar"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm hover:bg-neutral-800"
            >
              Daftar Sekarang <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-white text-neutral-800 border border-black/[0.08] px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-neutral-50 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.02)]"
            >
              Pelajari Profil
            </motion.a>
          </motion.div>
        </div>

        {/* Visual Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-12 md:mt-16"
        >
          {/* Card Left: Stats */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-4 bg-white border border-black/[0.08] p-6 rounded-3xl flex flex-col justify-between shadow-[0_2px_20px_-4px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-2.5 bg-slate-100 rounded-2xl text-neutral-800">
                <Users size={20} />
              </div>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                Aktif & Solid
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-neutral-900 tracking-tight">
                500+
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Kader aktif yang tersebar di berbagai fakultas dan angkatan.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative md:col-span-8 h-[220px] md:h-[260px] rounded-3xl overflow-hidden border border-black/[0.08] bg-slate-50 group shadow-[0_2px_20px_-4px_rgba(0,0,0,0.03)]"
          >
            {/* Gambar Utama */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
              alt="Aktivitas Kebersamaan Mahasiswa LDK"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlay Teks */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Teks Deskripsi */}
            <div className="absolute bottom-5 left-6 text-white pointer-events-none z-10">
              <p className="text-xs font-medium text-white/80">
                Dokumentasi Kegiatan
              </p>
              <h4 className="text-base font-semibold">
                Kajian & Silaturahmi Akbar
              </h4>
            </div>

            {/* Area Notch Putih/Slate di Pojok Kanan Bawah */}
            <div className="absolute -bottom-[1px] -right-[1px] w-[68px] h-[68px] bg-slate-50 rounded-tl-2xl flex items-center justify-center z-10">
              {/* Lekukan Cekung Atas */}
              <div className="absolute -top-4 right-0 w-4 h-4 overflow-hidden pointer-events-none">
                <div className="w-full h-full rounded-br-2xl shadow-[5px_5px_0_0_#f8fafc]" />
              </div>

              {/* Lekukan Cekung Kiri */}
              <div className="absolute bottom-0 -left-4 w-4 h-4 overflow-hidden pointer-events-none">
                <div className="w-full h-full rounded-br-2xl shadow-[5px_5px_0_0_#f8fafc]" />
              </div>

              {/* Tombol Panah */}
              <a
                href="#galeri"
                className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
