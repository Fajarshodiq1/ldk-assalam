"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  CheckCircle2,
  UserCheck,
  Sparkles,
  Compass,
  Rocket,
} from "lucide-react";

export default function TimelineSection() {
  const data = [
    {
      title: "Langkah 01",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <UserCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-neutral-900">
              Isi Formulir Online
            </h3>
          </div>
          <p className="mb-6 text-xs font-normal text-neutral-600 md:text-sm leading-relaxed max-w-xl">
            Klik tombol pendaftaran, isi data diri singkat, dan pilih minat
            divisi kamu. Prosesnya cuma butuh waktu 1–3 menit tanpa ribet.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
              alt="Pengisian Form"
              className="h-28 w-full rounded-2xl object-cover border border-black/[0.08] shadow-2xs md:h-44 lg:h-52"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              alt="Diskusi Pendaftaran"
              className="h-28 w-full rounded-2xl object-cover border border-black/[0.08] shadow-2xs md:h-44 lg:h-52"
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
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-neutral-900">
              Welcome Gathering
            </h3>
          </div>
          <p className="mb-6 text-xs font-normal text-neutral-600 md:text-sm leading-relaxed max-w-xl">
            Sesi kumpul perdana bareng sesama kader baru dan kakak tingkat.
            Acara dikemas santai, ada sesi kenalan, ice breaking, dan snack
            gratis.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
              alt="Gathering Perdana"
              className="h-28 w-full rounded-2xl object-cover border border-black/[0.08] shadow-2xs md:h-44 lg:h-52"
            />
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
              alt="Suasana Acara"
              className="h-28 w-full rounded-2xl object-cover border border-black/[0.08] shadow-2xs md:h-44 lg:h-52"
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
            <Compass className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-neutral-900">
              Upgrading & Fun Camp
            </h3>
          </div>
          <p className="mb-6 text-xs font-normal text-neutral-600 md:text-sm leading-relaxed max-w-xl">
            Pelatihan soft skill, kepemimpinan, dan kegiatan bonding outdoor
            buat mempererat rasa kekeluargaan antar-kader.
          </p>
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pelatihan Public Speaking & Leadership</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sesi Outbound & Rihla Alam</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Mentoring Akademik & Karir</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=800&auto=format&fit=crop"
              alt="Outbound Fun Camp"
              className="h-28 w-full rounded-2xl object-cover border border-black/[0.08] shadow-2xs md:h-44 lg:h-52"
            />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
              alt="Pelatihan Kepemimpinan"
              className="h-28 w-full rounded-2xl object-cover border border-black/[0.08] shadow-2xs md:h-44 lg:h-52"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Langkah 04",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-neutral-900">
              Resmi Jadi Kader & Eksekusi Proyek
            </h3>
          </div>
          <p className="mb-6 text-xs font-normal text-neutral-600 md:text-sm leading-relaxed max-w-xl">
            Kamu resmi menjadi bagian dari LDK As-Salam dan siap berkontribusi
            langsung sesuai divisi minat yang kamu pilih.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
              alt="Kerja Tim Divisi"
              className="h-28 w-full rounded-2xl object-cover border border-black/[0.08] shadow-2xs md:h-44 lg:h-52"
            />
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop"
              alt="Official Member"
              className="h-28 w-full rounded-2xl object-cover border border-black/[0.08] shadow-2xs md:h-44 lg:h-52"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="alur"
      className="w-full bg-white font-sans border-t border-black/[0.06]"
    >
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
}
