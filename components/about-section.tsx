"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkle,
  Info,
  History,
  Target,
  Compass,
  CalendarDays,
} from "lucide-react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

type TabKey = "perkenalan" | "sejarah" | "visi" | "misi" | "kegiatan";

const tabs: { id: TabKey; label: string; icon: any }[] = [
  { id: "perkenalan", label: "Perkenalan", icon: Info },
  { id: "sejarah", label: "Sejarah", icon: History },
  { id: "visi", label: "Visi", icon: Target },
  { id: "misi", label: "Misi", icon: Compass },
  { id: "kegiatan", label: "Rutinitas", icon: CalendarDays },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("perkenalan");

  return (
    <section
      id="about"
      className="py-20 bg-[#121212] text-neutral-100 font-sans"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#1c1c1c] border border-white/[0.08] text-neutral-300 px-3.5 py-1.5 rounded-full text-xs font-medium">
              <Sparkle size={14} className="text-[#7b38f7] fill-[#7b38f7]" />
              Tentang LDK As-Salam
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Mengenal Lebih Dekat Wadah Pergerakan Mahasiswa
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md leading-relaxed font-inter">
            Menjadi ruang tumbuh bersama bagi mahasiswa Universitas Trilogi
            dalam pembinaan karakter, keilmuan, dan kepedulian sosial.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar border-b border-white/[0.08] mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 relative ${
                  isActive
                    ? "text-white bg-[#1c1c1c]"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-[#181818]"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-[#7b38f7]" : "text-neutral-500"}
                />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7b38f7] rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-[#181818] border border-white/[0.08] rounded-3xl p-6 sm:p-10 min-h-[320px] relative overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            {/* 1. PERKENALAN */}
            {activeTab === "perkenalan" && (
              <motion.div
                key="perkenalan"
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-12 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#9b63f9] bg-[#7b38f7]/10 border border-[#7b38f7]/20 px-3 py-1 rounded-full">
                      Tentang Kami
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-syne tracking-tight pt-2">
                      Lembaga Dakwah Kampus (LDK) As-Salam Universitas Trilogi
                    </h3>
                  </div>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-inter">
                    <strong className="text-white">LDK As-Salam</strong> adalah
                    wadah resmi Unit Kegiatan Mahasiswa (UKM) di Universitas
                    Trilogi yang bergerak secara aktif di bidang syiar Islam,
                    pembinaan karakter (kaderisasi), dan kontribusi sosial
                    berbasis kolaborasi.
                  </p>

                  <p className="text-neutral-400 text-sm leading-relaxed font-inter">
                    Kami hadir sebagai rumah kedua yang inklusif bagi seluruh
                    mahasiswa muslim Universitas Trilogi. Di sini, kamu tidak
                    hanya akan memperdalam ilmu agama melalui kajian dan
                    pembinaan intensif, tetapi juga mengasah soft skills
                    kepemimpinan, memperluas relasi antarfakultas, serta
                    menyalurkan minat dan bakatmu secara positif.
                  </p>

                  {/* Tambahan Highlight Poin Nilai Plus */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/[0.08]">
                      <h5 className="text-white font-bold text-sm font-syne">
                        Inklusif & Hangat
                      </h5>
                      <p className="text-neutral-400 text-xs mt-1">
                        Terbuka bagi siapa saja yang ingin belajar dan bertumbuh
                        bersama dalam kebaikan.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/[0.08]">
                      <h5 className="text-white font-bold text-sm font-syne">
                        Kaderisasi Unggul
                      </h5>
                      <p className="text-neutral-400 text-xs mt-1">
                        Berfokus melahirkan generasi muslim yang berakhlak
                        mulia, kompeten, dan siap menghadapi tantangan zaman.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#1c1c1c] border border-white/[0.08]">
                      <h5 className="text-white font-bold text-sm font-syne">
                        Aksi Nyata
                      </h5>
                      <p className="text-neutral-400 text-xs mt-1">
                        Aktif berkontribusi lewat kegiatan sosial, seni islami,
                        hingga pengabdian masyarakat.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {/* 2. SEJARAH */}
            {activeTab === "sejarah" && (
              <motion.div
                key="sejarah"
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Column: Story Card */}
                <div className="lg:col-span-7 bg-[#1c1c1c] p-6 sm:p-8 rounded-3xl border border-white/[0.08] space-y-4">
                  <div className="inline-flex items-center gap-1.5 bg-[#7b38f7]/10 text-[#9b63f9] border border-[#7b38f7]/20 px-3 py-1 rounded-full text-xs font-medium">
                    📜 Sejarah
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-syne tracking-tight">
                    Perjalanan LDK As-Salam
                  </h3>
                  <div className="w-10 h-1 bg-[#7b38f7] rounded-full my-2" />

                  <div className="space-y-3 text-neutral-300 text-xs sm:text-sm leading-relaxed font-inter">
                    <p>
                      Lembaga Dakwah Kampus As-Salam (LDK As-Salam) Universitas
                      Trilogi adalah organisasi Unit Kegiatan Mahasiswa (UKM)
                      yang bergerak di bidang kerohanian Islam dan pembinaan
                      karakter di lingkungan kampus Universitas Trilogi, Jakarta
                      Selatan.
                    </p>
                    <p>
                      Berdiri sejak awal perkembangan kampus, LDK As-Salam
                      diinisiasi oleh sekumpulan mahasiswa yang memiliki
                      komitmen untuk menghadirkan wadah syiar Islam yang
                      inklusif, santun, dan relevan bagi seluruh sivitas
                      akademika.
                    </p>
                    <p>
                      Melalui koordinasi intensif antar-fakultas dan dukungan
                      universitas, dibentuklah kepengurusan awal yang bertugas
                      menyusun landasan organisasi, program kaderisasi, serta
                      kolaborasi eksternal.
                    </p>
                  </div>
                </div>

                {/* Right Column: Vertical Timeline UI */}
                <div className="lg:col-span-5 relative pl-6 space-y-6">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-3.5 top-3 bottom-3 w-[2px] bg-white/[0.08]" />

                  {/* Timeline Item 1 */}
                  <div className="relative pl-6">
                    <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-[#1c1c1c] border-2 border-[#7b38f7] flex items-center justify-center text-xs shadow-md">
                      🎂
                    </div>
                    <div className="bg-[#1c1c1c] border border-white/[0.08] p-4 rounded-2xl space-y-1">
                      <span className="inline-block bg-[#7b38f7] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Pendirian Organisasi
                      </span>
                      <h4 className="text-sm font-bold text-white font-syne pt-1">
                        Masa Awal Berdiri
                      </h4>
                      <p className="text-xs text-neutral-400 font-inter leading-relaxed">
                        Resmi dibentuk sebagai wadah resmi kegiatan Islam
                        mahasiswa di Universitas Trilogi.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative pl-6">
                    <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-[#1c1c1c] border-2 border-[#7b38f7] flex items-center justify-center text-xs shadow-md">
                      👥
                    </div>
                    <div className="bg-[#1c1c1c] border border-white/[0.08] p-4 rounded-2xl space-y-1">
                      <span className="inline-block bg-[#7b38f7] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Periode Pertama
                      </span>
                      <h4 className="text-sm font-bold text-white font-syne pt-1">
                        Pelantikan Pengurus Awal
                      </h4>
                      <p className="text-xs text-neutral-400 font-inter leading-relaxed">
                        Perwakilan mahasiswa dari berbagai program studi
                        dilantik untuk mengoperasikan divisi-divisi utama.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative pl-6">
                    <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-[#1c1c1c] border-2 border-[#7b38f7] flex items-center justify-center text-xs shadow-md">
                      ⭐
                    </div>
                    <div className="bg-[#1c1c1c] border border-white/[0.08] p-4 rounded-2xl space-y-1">
                      <span className="inline-block bg-[#7b38f7] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Pengembangan
                      </span>
                      <h4 className="text-sm font-bold text-white font-syne pt-1">
                        Ekspansi Program & Jejaring
                      </h4>
                      <p className="text-xs text-neutral-400 font-inter leading-relaxed">
                        Aktif menjalin jaringan dengan LDK antar-kampus serta
                        kolaborasi luas di wilayah Jabodetabek.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. VISI */}
            {activeTab === "visi" && (
              <motion.div
                key="visi"
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 max-w-2xl"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9b63f9] bg-[#7b38f7]/10 border border-[#7b38f7]/20 px-3 py-1 rounded-full">
                  Visi Utama
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-syne leading-snug tracking-tight pt-2">
                  "Menjadi Lembaga Dakwah Kampus yang professional, inklusif,
                  dan melahirkan kader berkarakter Rabbani di Universitas
                  Trilogi."
                </h3>
              </motion.div>
            )}

            {/* 4. MISI */}
            {activeTab === "misi" && (
              <motion.div
                key="misi"
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white font-syne tracking-tight">
                  Misi Organisasi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {[
                    "Menyelenggarakan pembinaan rutin bagi kader yang sistematis dan berkelanjutan.",
                    "Membangun syiar Islam yang kreatif, santun, dan relevan dengan gaya hidup mahasiswa.",
                    "Memperkuat silaturahmi dan kolaborasi dengan pihak rektorat, ormawa, serta lembaga eksternal.",
                    "Mengembangkan potensi profesionalisme dan leadership kader melalui aksi nyata.",
                  ].map((misiText, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#1c1c1c] border border-white/[0.08] flex items-start gap-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7b38f7]/20 text-[#9b63f9] text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-inter">
                        {misiText}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 5. KEGIATAN RUTIN */}
            {activeTab === "kegiatan" && (
              <motion.div
                key="kegiatan"
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white font-syne tracking-tight">
                  Agenda & Rutinitas Kader
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {[
                    {
                      freq: "Rutinitas",
                      title: "Latihan Hadrah Banjari",
                      desc: "Latihan rutin dengan target pencapaian dan prestasi di lomba banjari tingkat nasional.",
                    },
                    {
                      freq: "Peminatan",
                      title: "Archery",
                      desc: "Latihan olahraga memanah untuk melatih fokus, konsentrasi, dan kebugaran jasmani.",
                    },
                    {
                      freq: "Mingguan",
                      title: "Kajian Mingguan",
                      desc: "Program Baca Tulis Quran (BTQ), belajar kitab kuning, dan pendalaman Bahasa Arab.",
                    },
                    {
                      freq: "Pembinaan",
                      title: "Mentoring Kader",
                      desc: "Pendampingan intensif dan pembinaan karakter untuk meningkatkan kualitas spiritual kader.",
                    },
                    {
                      freq: "Sosial",
                      title: "Pengabdian Masyarakat",
                      desc: "Aksi nyata dan kontribusi langsung kepada masyarakat sekitar sebagai wujud kepedulian sosial.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#1c1c1c] border border-white/[0.08] space-y-2"
                    >
                      <span className="text-[11px] font-semibold text-[#9b63f9] bg-[#7b38f7]/10 border border-[#7b38f7]/20 px-2.5 py-0.5 rounded-md">
                        {item.freq}
                      </span>
                      <h4 className="text-base font-bold text-white font-syne pt-1">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 text-xs leading-relaxed font-inter">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
