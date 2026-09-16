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
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
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

const bidangData = [
  {
    id: "fest",
    title: "FEST (Forum Ekonomi Syariah Trilogi)",
    shortName: "FEST (FoSSEI)",
    icon: TrendingUp,
    badge: "Otonom & Keilmuan",
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
  const [carouselIndex, setCarouselIndex] = useState(0);

  const activeBidang =
    bidangData.find((b) => b.id === activeTab) || bidangData[0];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setCarouselIndex(0); // Reset carousel ke slide pertama saat ganti tab
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % activeBidang.jobdesk.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? activeBidang.jobdesk.length - 1 : prev - 1,
    );
  };

  const currentJob = activeBidang.jobdesk[carouselIndex];
  const JobIcon = currentJob.icon;

  return (
    <section
      id="bidang"
      className="py-20 md:py-28 bg-white text-neutral-900 font-sans relative"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-black/[0.06] text-neutral-800 px-3.5 py-1.5 rounded-full text-xs font-medium">
              <Sparkle size={14} className="text-neutral-600" />
              Divisi & Struktur
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
              Ruang Kontribusi LDK As-Salam
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-md leading-relaxed">
            Setiap divisi memiliki fokus peran dan tugas spesifik untuk
            mendukung pengembangan skill serta ruang pengabdian kamu di kampus.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-black/[0.06]">
          {bidangData.map((bidang) => {
            const isActive = activeTab === bidang.id;
            return (
              <button
                key={bidang.id}
                onClick={() => handleTabChange(bidang.id)}
                className={`relative px-4 py-2.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "text-white"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-slate-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-neutral-900 rounded-full"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{bidang.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBidang.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="bg-slate-50 border border-black/[0.08] rounded-3xl p-6 sm:p-10 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center text-neutral-900 shadow-sm">
                    <activeBidang.icon size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                      {activeBidang.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mt-1">
                      {activeBidang.title}
                    </h3>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed pt-2">
                  {activeBidang.description}
                </p>
              </div>

              <a
                href="#daftar"
                className="inline-flex items-center justify-between w-full sm:w-auto gap-4 bg-neutral-900 text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-neutral-800 transition-colors group self-start mt-4"
              >
                <span>Pilih Divisi Ini</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>

            {/* Right Jobdesk Carousel Card */}
            <div className="lg:col-span-6 bg-white border border-black/[0.08] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-2xs relative overflow-hidden min-h-[260px]">
              {/* Carousel Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Fokus Jobdesk & Peran ({carouselIndex + 1}/
                  {activeBidang.jobdesk.length})
                </span>

                {/* Navigasi Panah Carousel */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous jobdesk"
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-neutral-900 hover:text-white text-neutral-700 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next jobdesk"
                    className="p-1.5 rounded-full bg-slate-100 hover:bg-neutral-900 hover:text-white text-neutral-700 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Carousel Slide Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="my-auto py-4 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-black/[0.05] flex items-center justify-center text-neutral-900">
                    <JobIcon size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 tracking-tight">
                    {currentJob.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {currentJob.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5 pt-2">
                {activeBidang.jobdesk.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === carouselIndex
                        ? "w-6 bg-neutral-900"
                        : "w-1.5 bg-neutral-200 hover:bg-neutral-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
