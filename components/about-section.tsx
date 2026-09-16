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
      className="py-20 md:py-28 bg-white text-neutral-900 font-sans border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-black/[0.08] text-neutral-800 px-3.5 py-1.5 rounded-full text-xs font-medium">
              <Sparkle
                size={14}
                className="text-emerald-600 fill-emerald-600"
              />
              Tentang LDK As-Salam
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Mengenal Lebih Dekat Wadah Pergerakan Mahasiswa
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-md leading-relaxed">
            Menjadi ruang tumbuh bersama bagi mahasiswa Universitas Trilogi
            dalam pembinaan karakter, keilmuan, dan kepedulian sosial.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar border-b border-black/[0.08] mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 relative ${
                  isActive
                    ? "text-neutral-900 bg-slate-100"
                    : "text-neutral-500 hover:text-neutral-800 hover:bg-slate-50"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-emerald-600" : "text-neutral-400"}
                />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-slate-50 border border-black/[0.06] rounded-3xl p-6 sm:p-10 min-h-[320px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* 1. PERKENALAN */}
            {activeTab === "perkenalan" && (
              <motion.div
                key="perkenalan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                    Lembaga Dakwah Kampus (LDK) As-Salam Universitas Trilogi
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    LDK As-Salam adalah Unit Kegiatan Mahasiswa (UKM) di
                    Universitas Trilogi yang bergerak di bidang kerohanian
                    Islam, kaderisasi, dan pengabdian masyarakat.
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Kami hadir sebagai tempat berkumpul yang inklusif untuk
                    seluruh mahasiswa muslim—baik untuk belajar agama, mengasah
                    kepemimpinan, maupun berjejaring antarfakultas.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/[0.06]">
                    <div>
                      <span className="block text-2xl font-bold text-neutral-900">
                        5+
                      </span>
                      <span className="text-xs text-neutral-500">
                        Divisi Kerja
                      </span>
                    </div>
                    <div>
                      <span className="block text-2xl font-bold text-neutral-900">
                        100+
                      </span>
                      <span className="text-xs text-neutral-500">
                        Kader Aktif
                      </span>
                    </div>
                    <div>
                      <span className="block text-2xl font-bold text-neutral-900">
                        20+
                      </span>
                      <span className="text-xs text-neutral-500">
                        Program / Tahun
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                    alt="Suasana LDK As-Salam"
                    className="w-full h-64 object-cover rounded-2xl border border-black/[0.08]"
                  />
                </div>
              </motion.div>
            )}

            {/* 2. SEJARAH - Sesuai Design Referensi */}
            {activeTab === "sejarah" && (
              <motion.div
                key="sejarah"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Column: Story Card */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.06] shadow-2xs space-y-4">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-3 py-1 rounded-full text-xs font-medium">
                    📜 Sejarah
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                    Perjalanan LDK As-Salam
                  </h3>
                  <div className="w-10 h-1 bg-emerald-500 rounded-full my-2" />

                  <div className="space-y-3 text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
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
                      kolaborasi eksternal seperti dengan FOSSEI dan BKM.
                    </p>
                  </div>
                </div>

                {/* Right Column: Vertical Timeline UI */}
                <div className="lg:col-span-5 relative pl-6 space-y-6">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-3.5 top-3 bottom-3 w-[2px] bg-emerald-200" />

                  {/* Timeline Item 1 */}
                  <div className="relative pl-6">
                    <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-xs shadow-2xs">
                      🎂
                    </div>
                    <div className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-2xl space-y-1">
                      <span className="inline-block bg-emerald-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Pendirian Organisasi
                      </span>
                      <h4 className="text-sm font-semibold text-neutral-900 pt-1">
                        Masa Awal Berdiri
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Resmi dibentuk sebagai wadah resmi kegiatan Islam
                        mahasiswa di Universitas Trilogi.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative pl-6">
                    <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-xs shadow-2xs">
                      👥
                    </div>
                    <div className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-2xl space-y-1">
                      <span className="inline-block bg-emerald-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Periode Pertama
                      </span>
                      <h4 className="text-sm font-semibold text-neutral-900 pt-1">
                        Pelantikan Pengurus Awal
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Perwakilan mahasiswa dari berbagai program studi
                        dilantik untuk mengoperasikan divisi-divisi utama.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative pl-6">
                    <div className="absolute -left-6 top-0 w-7 h-7 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-xs shadow-2xs">
                      ⭐
                    </div>
                    <div className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-2xl space-y-1">
                      <span className="inline-block bg-emerald-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Pengembangan
                      </span>
                      <h4 className="text-sm font-semibold text-neutral-900 pt-1">
                        Ekspansi Program & Jejaring
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Aktif menjalin jaringan dengan LDK antar-kampus serta
                        gabung dalam keanggotaan FoSSEI Jabodetabek.
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 max-w-2xl"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
                  Visi Utama
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 leading-snug tracking-tight pt-2">
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
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
                      className="p-4 rounded-xl bg-white border border-black/[0.06] flex items-start gap-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight">
                  Agenda & Rutinitas Kader
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {[
                    {
                      freq: "Pekanan",
                      title: "Kajian & MABIT",
                      desc: "Kajian ilmu agama, tahsin, dan malam bina iman taqwa.",
                    },
                    {
                      freq: "Bulanan",
                      title: "Jumat Berbagi & Aksisos",
                      desc: "Penyaluran makanan gratis dan aksi sosial di sekitar campus.",
                    },
                    {
                      freq: "Tahunan",
                      title: "MABIM & Upgrading Kader",
                      desc: "Masa bimbingan mahasiswa baru dan pelatihan kepemimpinan.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-black/[0.06] space-y-2"
                    >
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-md">
                        {item.freq}
                      </span>
                      <h4 className="text-base font-semibold text-neutral-900 pt-1">
                        {item.title}
                      </h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">
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
