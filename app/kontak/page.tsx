"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Globe,
  Share2,
} from "lucide-react";

const socialMedias = [
  {
    name: "Instagram",
    handle: "@ldk_assalam",
    url: "https://instagram.com",
    desc: "Update kegiatan, dokumentasi acara, & konten dakwah harian.",
    icon: (
      <svg className="w-5 h-5 fill-current text-pink-600" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "LDK As-Salam Trilogi",
    url: "https://youtube.com",
    desc: "Tayangan kajian rutin, podcast keislaman, & dokumenter.",
    icon: (
      <svg className="w-5 h-5 fill-current text-red-600" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@ldk_assalam",
    url: "https://tiktok.com",
    desc: "Konten video pendek, reminder islami, & keseruan kegiatan.",
    icon: (
      <svg
        className="w-5 h-5 fill-current text-neutral-900"
        viewBox="0 0 24 24"
      >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.29-2.92 1.12-5.87 3.56-7.38 1.28-.79 2.78-1.14 4.28-1.07V13c-.83-.08-1.68.14-2.38.58-.87.53-1.45 1.48-1.52 2.5-.09 1.16.42 2.3 1.34 2.94.88.62 2.05.74 3.03.32.91-.38 1.58-1.2 1.78-2.16.12-.66.1-1.34.1-2.01V.02z" />
      </svg>
    ),
  },
  {
    name: "Spotify Podcast",
    handle: "As-Salam Podcast",
    url: "https://spotify.com",
    desc: "Obrolan santai seputar kehidupan kampus, kepemudaan, & Islam.",
    icon: (
      <svg
        className="w-5 h-5 fill-current text-emerald-600"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
];

const directContacts = [
  {
    title: "Humas & Hubungan Eksternal",
    desc: "Undangan event, permohonan pembicara, media partner, & kolaborasi.",
    value: "+62 812-3456-7890",
    actionText: "Chat via WhatsApp",
    actionUrl: "https://wa.me/6281234567890",
    icon: MessageCircle,
  },
  {
    title: "Divisi Kaderisasi (Info Oprec)",
    desc: "Pertanyaan seputar pendaftaran anggota baru & alur seleksi.",
    value: "+62 898-7654-3210",
    actionText: "Tanya Kaderisasi",
    actionUrl: "https://wa.me/6289876543210",
    icon: Phone,
  },
  {
    title: "Email Sekretariat",
    desc: "Pengiriman proposal formal, surat dinas, & kerja sama lembaga.",
    value: "ldk.assalam@trilogi.ac.id",
    actionText: "Kirim Email Formal",
    actionUrl: "mailto:ldk.assalam@trilogi.ac.id",
    icon: Mail,
  },
];

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 text-neutral-900 pt-32 pb-24 font-sans antialiased overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block">
            Pusat Informasi & Kontak
          </span>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
            Terhubung Langsung Bersama Kami
          </h1>

          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            Pilih jalur komunikasi yang kamu butuhkan. Kami siap melayani
            informasi pendaftaran, kerjasama media, maupun kolaborasi kegiatan.
          </p>
        </div>

        {/* SECTION 1: DIRECT CONTACTS (WHATSAPP & EMAIL) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-emerald-600" />
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
              Kontak Langsung Tim
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directContacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-black/[0.08] rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-2xs hover:border-black/20 transition-all"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-neutral-900 text-base tracking-tight">
                        {contact.title}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {contact.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/[0.05] space-y-3">
                    <span className="text-xs font-bold text-neutral-900 font-mono block">
                      {contact.value}
                    </span>
                    <a
                      href={contact.actionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-slate-100 text-neutral-900 hover:bg-neutral-900 hover:text-white px-4 py-2.5 rounded-2xl text-xs font-medium transition-all"
                    >
                      <span>{contact.actionText}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: SOCIAL MEDIA CHANNELS */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Share2 size={18} className="text-emerald-600" />
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
              Kanal Media Sosial Official
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMedias.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-black/[0.08] rounded-3xl p-6 space-y-4 shadow-2xs hover:border-black/20 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-black/[0.04]">
                      {social.icon}
                    </div>
                    <span className="text-[10px] font-medium text-neutral-400 group-hover:text-emerald-600 transition-colors">
                      Kunjungi →
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-base tracking-tight">
                      {social.name}
                    </h3>
                    <p className="text-xs font-medium text-emerald-700">
                      {social.handle}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {social.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 3: LOCATION & SEKRETARIAT */}
        <div className="bg-white border border-black/[0.08] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-600 font-semibold text-xs uppercase tracking-wider">
                <MapPin size={14} />
                <span>Sekretariat Fisik</span>
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
                Lokasi Sekretariat LDK As-Salam
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 bg-slate-50 px-3.5 py-1.5 rounded-full border border-black/[0.04] w-fit">
              <Clock size={13} className="text-emerald-600" />
              <span>Buka: Senin – Jumat (09.00 – 17.00 WIB)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl">
            Gedung Student Center / Ruang UKM LDK As-Salam, Kampus Universitas
            Trilogi, Jl. Kalibata Timur No.1, RT.6/RW.4, Rawajati, Pancoran,
            Jakarta Selatan 12750.
          </p>

          <div className="rounded-2xl overflow-hidden border border-black/[0.08] h-72 w-full">
            <iframe
              title="Lokasi Universitas Trilogi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0272827110935!2d106.84809287586884!3d-6.260067661286088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3a18359fffd%3A0x868cb5a34d6f83b6!2sUniversitas%20Trilogi!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
