"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  FileText,
  Wallet,
  HeartHandshake,
  Share2,
  Sparkles,
  PartyPopper,
  UserPlus,
  Users,
} from "lucide-react";

// 1. Ketua Umum
const topLeader = {
  role: "Ketua Umum",
  name: "Muhammad Rizky",
  prodi: "Manajemen '23",
  image:
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
};

// 2. BPH (Badan Pengurus Harian)
const bphList = [
  {
    role: "Sekretaris",
    name: "Aisyah Nurul",
    prodi: "Akuntansi '23",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
  },
  {
    role: "Bendahara",
    name: "Siti Rahma",
    prodi: "Ekonomi Syariah '23",
    icon: Wallet,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
  },
  {
    role: "Kemuslimahan",
    name: "Zahra Annisa",
    prodi: "Sistem Informasi '23",
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
];

// 3. Kadiv & Anggota Divisi
const divisions = [
  {
    name: "Divisi Media",
    icon: Share2,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
    kadiv: {
      name: "Fikri Ardiansyah",
      prodi: "DKV '24",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    members: ["Rian Kurnia", "Nabila Hawa", "Dika Prasetya", "Amalia Rizky"],
  },
  {
    name: "Syiar & Keumatan",
    icon: Sparkles,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    kadiv: {
      name: "Ahmad Fauzi",
      prodi: "Teknik Informatika '24",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    members: ["Farhan Majid", "Siti Latifah", "Bagas Saputra", "Nurul Aini"],
  },
  {
    name: "Divisi Fest",
    icon: PartyPopper,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
    kadiv: {
      name: "Rizky Firmansyah",
      prodi: "Ilmu Komunikasi '24",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
    },
    members: ["Andi Setiawan", "Clara Dewanty", "Ghani Arraji", "Maya Putri"],
  },
  {
    name: "Divisi Kaderisasi",
    icon: UserPlus,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
    kadiv: {
      name: "Hafiz Ridwan",
      prodi: "Manajemen '24",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },
    members: [
      "Taufik Hidayat",
      "Salma Hanifah",
      "Ibal Maulana",
      "Dina Syafiqah",
    ],
  },
];

export default function StructurePage() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-neutral-900 pt-32 pb-24 px-4 font-sans antialiased overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 border border-emerald-200/60 px-3 py-1 rounded-full inline-block">
            Bagan Organisasi
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            Struktur Kepengurusan LDK As-Salam
          </h1>
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
            Hirarki kepemimpinan dan pembagian divisi untuk periode operasional
            2026.
          </p>
        </div>

        {/* TREE CONNECTOR STRUCTURE */}
        <div className="flex flex-col items-center space-y-12 relative">
          {/* LEVEL 1: KETUA UMUM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center z-10"
          >
            <div className="bg-white border-2 border-emerald-500/80 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all w-64 text-center relative group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white p-1.5 rounded-full shadow-sm">
                <Crown size={14} />
              </div>
              <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden mb-3 border border-black/10 mt-1">
                <img
                  src={topLeader.image}
                  alt={topLeader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md uppercase tracking-wider">
                {topLeader.role}
              </span>
              <h3 className="font-semibold text-neutral-900 text-base mt-1 tracking-tight">
                {topLeader.name}
              </h3>
              <p className="text-xs text-neutral-400">{topLeader.prodi}</p>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-0.5 h-12 bg-emerald-300"></div>
          </motion.div>

          {/* LEVEL 2: BPH (Sekretaris, Bendahara, Kemuslimahan) */}
          <div className="w-full max-w-4xl relative">
            {/* Top Connector Line for BPH */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-neutral-200 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {bphList.map((bph, idx) => {
                const Icon = bph.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="bg-white border border-black/[0.08] rounded-2xl p-4 flex items-center gap-3.5 shadow-2xs hover:border-black/20 transition-all"
                  >
                    <img
                      src={bph.image}
                      alt={bph.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-black/[0.06]"
                    />
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-emerald-600">
                        <Icon size={12} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                          {bph.role}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-neutral-900 tracking-tight">
                        {bph.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400">
                        {bph.prodi}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Connecting Vertical Line down to Divisions */}
            <div className="w-0.5 h-12 bg-neutral-200 mx-auto mt-6"></div>
          </div>

          {/* LEVEL 3: KADIV & ANGGOTA DIVISI */}
          <div className="w-full relative pt-2">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                Divisi & Operasional
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {divisions.map((div, idx) => {
                const DivIcon = div.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * idx }}
                    className="bg-white border border-black/[0.08] rounded-3xl p-5 flex flex-col justify-between space-y-5 shadow-2xs hover:border-black/20 transition-all"
                  >
                    {/* Header Divisi */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
                        <div className="flex items-center gap-2">
                          <DivIcon size={16} className="text-neutral-700" />
                          <h3 className="font-semibold text-sm text-neutral-900 tracking-tight">
                            {div.name}
                          </h3>
                        </div>
                      </div>

                      {/* Ketua Divisi */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 block">
                          Ketua Divisi
                        </span>
                        <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-black/[0.04]">
                          <img
                            src={div.kadiv.image}
                            alt={div.kadiv.name}
                            className="w-10 h-10 rounded-xl object-cover shrink-0"
                          />
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-semibold text-neutral-900 leading-snug">
                              {div.kadiv.name}
                            </h4>
                            <p className="text-[10px] text-neutral-400">
                              {div.kadiv.prodi}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Anggota Divisi */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                            Anggota
                          </span>
                          <span className="text-[10px] font-medium text-neutral-400 flex items-center gap-1">
                            <Users size={10} /> {div.members.length} Orang
                          </span>
                        </div>
                        <ul className="space-y-1.5 list-none p-0 m-0">
                          {div.members.map((member, mIdx) => (
                            <li
                              key={mIdx}
                              className="text-xs text-neutral-600 bg-slate-50/60 px-2.5 py-1 rounded-lg border border-black/[0.03] flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              {member}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
