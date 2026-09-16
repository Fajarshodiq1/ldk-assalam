"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, MapPin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      id="kontak"
      className="bg-white text-neutral-900 font-sans border-t border-black/[0.08] pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 space-y-16">
        {/* Minimalist CTA Box */}
        <div className="bg-slate-100 border border-black/[0.06] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
              Open Recruitment 2026
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              Pendaftaran Kader LDK As-Salam
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Terbuka untuk seluruh mahasiswa Universitas Trilogi. Pilih divisi
              yang sesuai dan mulai dari sini.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="https://forms.google.com" // Ganti dengan link Google Form asli
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white font-medium text-xs px-6 py-3.5 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Isi Formulir <ArrowUpRight size={15} />
            </a>
            <a
              href="https://wa.me/6281234567890" // Ganti nomor WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border border-black/[0.08] text-neutral-800 font-medium text-xs px-6 py-3.5 rounded-full hover:bg-slate-50 transition-colors"
            >
              <MessageCircle size={15} /> Tanya via WA
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-neutral-900 text-white text-[10px] font-bold">
                AS
              </div>
              <span className="font-semibold text-neutral-900 text-sm tracking-tight">
                LDK As-Salam
              </span>
            </div>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-sm">
              Lembaga Dakwah Kampus Universitas Trilogi, Jakarta Selatan.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Navigasi
            </span>
            <ul className="space-y-1.5 m-0 p-0 list-none text-xs">
              <li>
                <a
                  href="#about"
                  className="text-neutral-500 hover:text-neutral-900"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#bidang"
                  className="text-neutral-500 hover:text-neutral-900"
                >
                  Divisi
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className="text-neutral-500 hover:text-neutral-900"
                >
                  Galeri
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Sekretariat
            </span>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Gedung Student Center Lt. 2, Universitas Trilogi, Kalibata,
              Jakarta Selatan.
            </p>
          </div>
        </div>

        <div className="border-t border-black/[0.06] pt-6 text-xs text-neutral-400">
          © 2026 LDK As-Salam Universitas Trilogi.
        </div>
      </div>
    </footer>
  );
}
