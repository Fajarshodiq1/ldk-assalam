"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Megaphone,
  HeartHandshake,
  Users2,
  BookOpen,
  Sparkle,
  ArrowRight,
  GraduationCap,
  Trophy,
  Coins,
  UserPlus,
  Compass,
  Zap,
  Radio,
  Building,
  Camera,
  Share2,
  Heart,
  Briefcase,
} from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

const bidangData = [
  {
    id: "fest",
    title: "FEST (Forum Ekonomi Syariah Trilogi)",
    shortName: "FEST (FoSSEI)",
    icon: TrendingUp,
    badge: "Otonom & Keilmuan",
    tagline: "Pusat Riset & Kajian Ekonomi Islam",
    description:
      "Divisi keilmuan yang berfokus pada pengembangan kajian, edukasi, dan riset ekonomi Islam di Universitas Trilogi, serta berjejaring secara nasional di bawah naungan FoSSEI.",
    jobdesk: [
      {
        icon: GraduationCap,
        title: "Kajian & Seminar Syariah",
        desc: "Menyelenggarakan ruang diskusi, webinar, dan seminar rutin mengenai isu-isu ekonomi Islam terkini.",
      },
      {
        icon: Trophy,
        title: "Delegasi Competitions",
        desc: "Mengirimkan kader terbaik untuk berlaga dalam kompetisi keilmuan, olimpiade, dan riset FoSSEI.",
      },
      {
        icon: Coins,
        title: "Literasi Keuangan Syariah",
        desc: "Mengedukasi mahasiswa mengenai manajemen keuangan, investasi halal, dan ekosistem syariah.",
      },
    ],
  },
  {
    id: "kaderisasi",
    title: "Kaderisasi",
    shortName: "Kaderisasi",
    icon: Users2,
    badge: "Pilar Utama",
    tagline: "Jantung Pergerakan & Pembinaan Anggota",
    description:
      "Jantung pergerakan organisasi yang bertanggung jawab atas rekrutmen, pembinaan internal, serta pemetaan potensi kader LDK As-Salam secara terstruktur.",
    jobdesk: [
      {
        icon: UserPlus,
        title: "Open Recruitment",
        desc: "Merancang dan mengeksekusi alur penerimaan anggota baru di setiap awal tahun ajaran.",
      },
      {
        icon: Compass,
        title: "Alur Pembinaan & Mentoring",
        desc: "Mengelola jalannya kelompok pembinaan karakter (halqah/mentoring) rutin bagi seluruh anggota.",
      },
      {
        icon: Zap,
        title: "Upgrading Capacity",
        desc: "Mengadakan pelatihan soft-skill dan leadership untuk mempersiapkan penerus kepengurusan.",
      },
    ],
  },
  {
    id: "syiar",
    title: "Syiar & Keumatan",
    shortName: "Syiar & Keumatan",
    icon: HeartHandshake,
    badge: "Pengabdian & Dakwah",
    tagline: "Garda Depan Syiar & Aksi Sosial Kampus",
    description:
      "Garda depan penggerak suasana islami di kampus melalui kegiatan syiar kreatif, peringatan hari besar Islam, serta program pengabdian masyarakat.",
    jobdesk: [
      {
        icon: Radio,
        title: "Kajian Rutin & Tabligh Akbar",
        desc: "Mengubah suasana kampus menjadi lebih hangat melalui kajian inspiratif yang terbuka untuk umum.",
      },
      {
        icon: Heart,
        title: "Aksi Sosial & Pengabdian",
        desc: "Menyalurkan kepedulian mahasiswa lewat program Jumat Berbagi, bakti sosial, dan relawan bencana.",
      },
      {
        icon: Building,
        title: "Manajemen Kemakmuran",
        desc: "Menjaga kebersihan, kenyamanan, serta fasilitas sarana ibadah/musholla di lingkungan kampus.",
      },
    ],
  },
  {
    id: "media",
    title: "Media",
    shortName: "Media",
    icon: Megaphone,
    badge: "Kreatif & Informasi",
    tagline: "Pusat Publikasi & Kreativitas Visual",
    description:
      "Pusat informasi dan publikasi kreatif yang mengemas pesan dakwah serta dokumentasi kegiatan organisasi ke dalam bentuk konten visual modern.",
    jobdesk: [
      {
        icon: Share2,
        title: "Desain Grafis & Rebranding",
        desc: "Membuat poster, feeds, dan identitas visual kegiatan agar tampil estetik dan informatif.",
      },
      {
        icon: Camera,
        title: "Video & Dokumentasi",
        desc: "Merekam momen penting, pembuatan video singkat recap event, serta materi kreatif TikTok/Reels.",
      },
      {
        icon: Megaphone,
        title: "Pengelolaan Social Media",
        desc: "Menyusun strategi konten dan mengelola seluruh saluran interaksi digital LDK As-Salam.",
      },
    ],
  },
  {
    id: "kemuslimahan",
    title: "Kemuslimahan",
    shortName: "Kemuslimahan",
    icon: BookOpen,
    badge: "Khusus Akhwat",
    tagline: "Ruang Hangat & Pemberdayaan Mahasiswi",
    description:
      "Wadah pembinaan, pemberdayaan, dan ruang diskusi hangat yang dirancang khusus untuk memfasilitasi kebutuhan serta potensi mahasiswi muslimah.",
    jobdesk: [
      {
        icon: BookOpen,
        title: "Kajian Fiqh & Isu Wanita",
        desc: "Membahas problematika dan fiqh kemuslimahan dalam suasana diskusi yang nyaman dan inklusif.",
      },
      {
        icon: Briefcase,
        title: "Workshop Skill Kreatif",
        desc: "Melatih kemandirian dan keterampilan mahasiswi lewat workshop wirausaha serta kerajinan tangan.",
      },
      {
        icon: Heart,
        title: "Ruang Pendampingan",
        desc: "Menyediakan wadah saling merangkul, bercerita, dan mendukung antar sesama mahasiswi.",
      },
    ],
  },
];

export default function BidangSection() {
  const [activeTab, setActiveTab] = useState(bidangData[0].id);

  const activeBidang =
    bidangData.find((b) => b.id === activeTab) || bidangData[0];

  return (
    <section
      id="bidang"
      className="py-16 sm:py-24 md:py-32 bg-violet-900 text-white font-sans relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-md border border-white/20 text-white px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-medium tracking-wide">
              <Sparkle
                size={12}
                className="text-white fill-white animate-pulse"
              />
              <span>Struktur & Divisi Organisasi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Pilih Ruang Kontribusi Anda
            </h2>
          </div>
          <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-inter">
            Temukan bidang yang selaras dengan minat, keahlian, dan visi
            pengembangan diri Anda di LDK As-Salam.
          </p>
        </div>

        {/* Minimalist Interactive Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar border-b border-white/20">
          {bidangData.map((bidang, index) => {
            const isActive = activeTab === bidang.id;
            return (
              <button
                key={bidang.id}
                onClick={() => setActiveTab(bidang.id)}
                className={`relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 group ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white hover:bg-black/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeEditorialTab"
                    className="absolute inset-0 bg-black backdrop-blur-xl border border-white/25 rounded-2xl shadow-xl"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2 font-syne">
                  <span
                    className={`text-[10px] ${isActive ? "text-white" : "text-white/50"}`}
                  >
                    0{index + 1}
                  </span>
                  {bidang.shortName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content Editorial Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBidang.id}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
          >
            {/* Left Big Info Card (Span 5) */}
            <div className="lg:col-span-5 bg-black border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              {/* Layer Efek Hover: Gelembung Air Menyatu ke Tengah */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                <span className="absolute top-1/2 -left-[10%] -translate-y-1/2 w-[65%] h-[220%] bg-white rounded-[100%] scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left z-0" />
                <span className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[65%] h-[220%] bg-white rounded-[100%] scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-right z-0" />
              </div>

              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-semibold text-white bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md group-hover:bg-black/10 group-hover:text-black group-hover:border-black/20 transition-colors">
                    {activeBidang.badge}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-white/50 tracking-widest uppercase group-hover:text-neutral-500 transition-colors">
                    Divisi LDK
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white font-syne leading-tight group-hover:text-black transition-colors">
                    {activeBidang.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm font-medium text-white/90 font-syne tracking-wide uppercase group-hover:text-neutral-700 transition-colors">
                    {activeBidang.tagline}
                  </p>
                </div>

                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-inter group-hover:text-neutral-800 transition-colors">
                  {activeBidang.description}
                </p>
              </div>

              <div className="pt-6 sm:pt-8 relative z-10">
                <a
                  href="#daftar"
                  className="inline-flex items-center justify-between w-full bg-white text-[#7b38f7] px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold shadow-xl transition-all group/btn group-hover:bg-black group-hover:text-white"
                >
                  <span>Gabung ke Divisi Ini</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#7b38f7]/10 flex items-center justify-center transition-transform group-hover/btn:translate-x-1 group-hover:bg-white/10">
                    <ArrowRight
                      size={15}
                      className="text-[#7b38f7] group-hover:text-white"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Stacked Jobdesk List Cards (Span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 justify-between">
              {activeBidang.jobdesk.map((job, idx) => {
                const JobIcon = job.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-[#121212] border border-white/15 p-5 sm:p-6 rounded-3xl flex items-start gap-4 sm:gap-5 transition-all group relative overflow-hidden shadow-lg"
                  >
                    {/* Layer Efek Hover: Gelembung Air Menyatu ke Tengah */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                      <span className="absolute top-1/2 -left-[10%] -translate-y-1/2 w-[65%] h-[220%] bg-white rounded-[100%] scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left z-0" />
                      <span className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[65%] h-[220%] bg-white rounded-[100%] scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-right z-0" />
                    </div>

                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all relative z-10">
                      <JobIcon size={20} className="sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <div className="space-y-1 flex-1 relative z-10">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-white font-syne tracking-tight group-hover:text-black transition-colors">
                          {job.title}
                        </h4>
                        <span className="text-[10px] sm:text-[11px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded-full border border-white/10 group-hover:text-neutral-600 group-hover:bg-black/5 group-hover:border-black/10 transition-colors shrink-0">
                          Fokus 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs sm:text-sm text-white/80 leading-relaxed font-inter group-hover:text-neutral-700 transition-colors">
                        {job.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
