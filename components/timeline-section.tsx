"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  UserCheck,
  Sparkles,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import regisImg from "@/public/regis.png";
import keluargaImg from "@/public/keluarga.jpg";
import welcomeImg from "@/public/welcome.jpg";

export default function TimelineSection() {
  const data = [
    {
      title: "Langkah 01",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <UserCheck className="w-5 h-5 text-violet-400" />
            <h3 className="text-lg font-bold text-white font-syne">
              Isi Formulir Online
            </h3>
          </div>
          <p className="mb-5 text-xs font-normal text-white/70 md:text-sm leading-relaxed max-w-xl font-inter">
            Klik tombol di bawah ini, isi data diri singkat, dan pilih minat
            divisi kamu. Prosesnya cuma butuh waktu 1–3 menit tanpa ribet!
          </p>

          {/* Tombol Pendaftaran dipindah ke Langkah 01 */}
          <div className="mb-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYfAOvyqzBDu4o1FEVgGLdYxJ74wr5_k25gyVWFzOskh3bvg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7b38f7] hover:bg-[#6c2ee2] text-white px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold shadow-xl transition-all group"
            >
              <span>Daftar Sekarang via Google Form</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={regisImg.src}
              alt="Pengisian Form"
              className="h-28 w-full rounded-2xl object-cover border border-white/15 shadow-xl md:h-44 lg:h-52 opacity-85"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Langkah 02",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <h3 className="text-lg font-bold text-white font-syne">
              Welcome Gathering & Upgrading
            </h3>
          </div>
          <p className="mb-4 text-xs font-normal text-white/70 md:text-sm leading-relaxed max-w-xl font-inter">
            Sesi kumpul perdana, pelatihan soft skill, serta perkenalan hangat
            bareng sesama kader baru dan pengurus.
          </p>
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-white/80 md:text-sm font-inter">
              <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Sesi kenalan, ice breaking, & kebersamaan</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/80 md:text-sm font-inter">
              <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Pelatihan dasar kepemimpinan & organisasi</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={welcomeImg.src}
              alt="Gathering Perdana"
              className="h-28 w-full rounded-2xl object-cover border border-white/15 shadow-xl md:h-44 lg:h-52 opacity-85"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Langkah 03",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="w-5 h-5 text-violet-400" />
            <h3 className="text-lg font-bold text-white font-syne">
              Resmi Jadi Kader & Eksekusi Proyek
            </h3>
          </div>
          <p className="mb-6 text-xs font-normal text-white/70 md:text-sm leading-relaxed max-w-xl font-inter">
            Kamu resmi menjadi bagian dari keluarga besar LDK As-Salam dan siap
            berkontribusi aktif di divisi pilihanmu.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={keluargaImg.src}
              alt="Kerja Tim Divisi"
              className="h-28 w-full rounded-2xl object-center border border-white/15 shadow-xl md:h-44 lg:h-72 opacity-85"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="alur"
      className="w-full bg-[#121212] font-sans border-t border-white/10 relative overflow-hidden text-white"
    >
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
}
