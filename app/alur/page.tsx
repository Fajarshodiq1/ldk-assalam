"use client";

import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  CheckCircle2,
  UserCheck,
  Sparkles,
  Compass,
  Rocket,
  Send,
  ClipboardCheck,
  Handshake,
  UserPlus,
  ArrowRight,
} from "lucide-react";

export default function AlurPage() {
  const [activeTab, setActiveTab] = useState<"recruitment" | "collaboration">(
    "recruitment",
  );

  // DATA 1: ALUR PENDAFTARAN ANGGOTA
  const recruitmentData = [
    {
      title: "Langkah 01",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
              Isi Formulir Online
            </h3>
          </div>
          <p className="mb-4 sm:mb-6 text-xs text-neutral-600 sm:text-sm leading-relaxed max-w-xl">
            Klik tombol pendaftaran, isi data diri singkat, dan pilih minat
            divisi kamu. Prosesnya cuma butuh waktu 1–3 menit tanpa ribet.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
              alt="Pengisian Form"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              alt="Diskusi Pendaftaran"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Langkah 02",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
              Welcome Gathering
            </h3>
          </div>
          <p className="mb-4 sm:mb-6 text-xs text-neutral-600 sm:text-sm leading-relaxed max-w-xl">
            Sesi kumpul perdana bareng sesama kader baru dan pengurus. Acara
            dikemas santai, ada sesi kenalan, ice breaking, dan penjelasan
            singkat divisi.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
              alt="Gathering Perdana"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
              alt="Suasana Acara"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Langkah 03",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
              Upgrading & Fun Camp
            </h3>
          </div>
          <p className="mb-4 sm:mb-6 text-xs text-neutral-600 sm:text-sm leading-relaxed max-w-xl">
            Pelatihan soft skill, kepemimpinan, dan kegiatan bonding outdoor
            buat mempererat rasa kekeluargaan antar-kader.
          </p>
          <div className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span>Pelatihan Public Speaking & Leadership</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span>Sesi Outbound & Rihla Alam</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span>Mentoring Akademik & Karir</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=800&auto=format&fit=crop"
              alt="Outbound Fun Camp"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
              alt="Pelatihan Kepemimpinan"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Langkah 04",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
              Resmi Jadi Kader & Eksekusi Proyek
            </h3>
          </div>
          <p className="mb-4 sm:mb-6 text-xs text-neutral-600 sm:text-sm leading-relaxed max-w-xl">
            Kamu resmi menjadi bagian dari LDK As-Salam dan siap berkontribusi
            langsung sesuai divisi minat yang kamu pilih.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
              alt="Kerja Tim Divisi"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop"
              alt="Official Member"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
          </div>
        </div>
      ),
    },
  ];

  // DATA 2: ALUR PENGAJUAN KOLABORASI
  const collaborationData = [
    {
      title: "Tahap 01",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
              Pengajuan Proposal / Surat
            </h3>
          </div>
          <p className="mb-4 sm:mb-6 text-xs text-neutral-600 sm:text-sm leading-relaxed max-w-xl">
            Kirimkan proposal kegiatan, permohonan pembicara, atau surat ajakan
            kerja sama via email/WhatsApp resmi LDK As-Salam.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
              alt="Pengajuan Surat"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
            <img
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop"
              alt="Diskusi Proposal"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Tahap 02",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
              Review & Klarifikasi Agenda
            </h3>
          </div>
          <p className="mb-4 sm:mb-6 text-xs text-neutral-600 sm:text-sm leading-relaxed max-w-xl">
            Tim Humas & Eksternal akan mereview kesesuaian jadwal, target
            audiens, serta bentuk kontribusi yang diajukan.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
              alt="Review Agenda"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop"
              alt="Diskusi Tim"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Tahap 03",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
              MOU & Finalisasi Eksekusi
            </h3>
          </div>
          <p className="mb-4 sm:mb-6 text-xs text-neutral-600 sm:text-sm leading-relaxed max-w-xl">
            Sesi konsolidasi teknis, kesepakatan media partner/sponsor, dan
            pelaksanaan acara secara bersama-sama.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
              alt="Kerja Sama Syiar"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
              alt="Pelaksanaan Event"
              className="h-24 sm:h-44 lg:h-52 w-full rounded-xl sm:rounded-2xl object-cover border border-black/[0.08] shadow-2xs"
            />
          </div>
        </div>
      ),
    },
  ];

  const currentTimelineData =
    activeTab === "recruitment" ? recruitmentData : collaborationData;

  return (
    <main className="min-h-screen bg-slate-50/50 text-neutral-900 pt-20 sm:pt-32 pb-16 sm:pb-24 font-sans antialiased overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-2">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 border border-emerald-200/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full inline-block">
            Panduan & Prosedur
          </span>

          <h1 className="text-2xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
            Alur & Tahapan Kegiatan
          </h1>

          <p className="text-neutral-500 text-xs sm:text-base leading-relaxed">
            Petunjuk langkah demi langkah untuk bergabung menjadi bagian dari
            LDK As-Salam maupun mengajukan kerja sama kemitraan.
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="flex justify-center px-2">
          <div className="bg-white border border-black/[0.08] p-1 sm:p-1.5 rounded-full shadow-2xs flex gap-1 w-full max-w-xs sm:max-w-none sm:w-auto">
            <button
              onClick={() => setActiveTab("recruitment")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-medium transition-all ${
                activeTab === "recruitment"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <UserPlus size={13} className="shrink-0" />
              <span className="whitespace-nowrap">Pendaftaran</span>
            </button>

            <button
              onClick={() => setActiveTab("collaboration")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-medium transition-all ${
                activeTab === "collaboration"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              <Handshake size={13} className="shrink-0" />
              <span className="whitespace-nowrap">Kolaborasi</span>
            </button>
          </div>
        </div>

        {/* TIMELINE COMPONENT UI */}
        <div className="bg-white border border-black/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xs">
          <Timeline data={currentTimelineData} />
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-white border border-black/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 shadow-2xs">
          <h3 className="text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-snug">
            {activeTab === "recruitment"
              ? "Siap Menjadi Bagian dari LDK As-Salam?"
              : "Ingin Mengajukan Kerja Sama atau Kolaborasi?"}
          </h3>
          <p className="text-xs text-neutral-500 leading-relaxed max-w-md mx-auto">
            {activeTab === "recruitment"
              ? "Pendaftaran terbuka bagi seluruh mahasiswa aktif Universitas Trilogi yang ingin berkembang bersama."
              : "Kami terbuka untuk kolaborasi event, media partner, serta program kepemudaan antarkomunitas."}
          </p>
          <div className="pt-1">
            <a
              href={activeTab === "recruitment" ? "/daftar" : "/kontak"}
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-neutral-800 transition-all w-full sm:w-auto"
            >
              <span>
                {activeTab === "recruitment"
                  ? "Daftar Sekarang"
                  : "Hubungi Humas"}
              </span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
