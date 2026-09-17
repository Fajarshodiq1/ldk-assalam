"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Share2,
  User,
} from "lucide-react";

const socialMedias = [
  {
    name: "Instagram",
    handle: "@ldk_assalam",
    url: "https://www.instagram.com/ldk_assalam/",
    desc: "Update kegiatan, dokumentasi acara, & konten dakwah harian.",
    icon: (
      <svg className="w-5 h-5 fill-current text-pink-400" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Ldk As-Salam",
    url: "https://web.facebook.com/ldk.assalam.10",
    desc: "Berita kegiatan kampus, galeri foto, & forum silaturahmi.",
    icon: (
      <svg className="w-5 h-5 fill-current text-blue-500" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "LDK AS-SALAM",
    url: "https://www.youtube.com/@ldkas-salam8449",
    desc: "Tayangan kajian rutin, podcast keislaman, & dokumenter.",
    icon: (
      <svg className="w-5 h-5 fill-current text-red-500" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const directContacts = [
  {
    title: "Kontak Ikhwan (Putra)",
    desc: "Layanan informasi umum, pendaftaran, & koordinasi kegiatan untuk ikhwan.",
    value: "+62 898 4856 210",
    actionText: "Chat Ikhwan",
    actionUrl: "https://wa.me/628984856210",
    icon: MessageCircle,
  },
  {
    title: "Kontak Akhwat (Putri)",
    desc: "Layanan informasi umum, pendaftaran, & koordinasi kegiatan untuk akhwat.",
    value: "+62 857 7033 3472",
    actionText: "Chat Akhwat",
    actionUrl: "https://wa.me/6285770333472",
    icon: MessageCircle,
  },
  {
    title: "Email Sekretariat",
    desc: "Pengiriman proposal formal, surat dinas, & kerja sama lembaga.",
    value: "ldkassalam@gmail.com",
    actionText: "Kirim Email Formal",
    actionUrl: "mailto:ldk.assalam@trilogi.ac.id",
    icon: Mail,
  },
];

export default function KontakPage() {
  return (
    <main
      className="min-h-screen bg-[#121212] text-neutral-100 pt-32 pb-24 font-sans antialiased overflow-x-hidden"
      id="kontak"
    >
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/60 border border-violet-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Pusat Informasi & Kontak
          </span>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-syne">
            Terhubung Langsung Bersama Kami
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-inter">
            Pilih jalur komunikasi yang kamu butuhkan. Kami siap melayani
            informasi pendaftaran, kerjasama media, maupun kolaborasi kegiatan.
          </p>
        </div>

        {/* SECTION 1: DIRECT CONTACTS (IKHWAN, AKHWAT, & EMAIL) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-violet-400" />
            <h2 className="text-xl font-semibold tracking-tight text-white font-syne">
              Kontak Layanan Tim
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directContacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#18181b] border border-white/10 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl hover:border-violet-500/40 transition-all"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-violet-950/80 text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/30">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-white text-base tracking-tight font-syne">
                        {contact.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed font-inter">
                        {contact.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <span className="text-xs font-bold text-violet-300 font-mono block">
                      {contact.value}
                    </span>
                    <a
                      href={contact.actionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-white/10 text-white hover:bg-violet-600 hover:text-white px-4 py-2.5 rounded-2xl text-xs font-medium transition-all"
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
            <Share2 size={18} className="text-violet-400" />
            <h2 className="text-xl font-semibold tracking-tight text-white font-syne">
              Kanal Media Sosial Official
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {socialMedias.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#18181b] border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl hover:border-violet-500/40 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      {social.icon}
                    </div>
                    <span className="text-[10px] font-medium text-neutral-500 group-hover:text-violet-400 transition-colors">
                      Kunjungi →
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base tracking-tight font-syne">
                      {social.name}
                    </h3>
                    <p className="text-xs font-medium text-violet-400 font-mono">
                      {social.handle}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-inter">
                    {social.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 3: LOCATION & SEKRETARIAT */}
        <div className="bg-[#18181b] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-violet-400 font-semibold text-xs uppercase tracking-wider">
                <MapPin size={14} />
                <span>Sekretariat Fisik</span>
              </div>
              <h2 className="text-xl font-semibold text-white tracking-tight font-syne">
                Lokasi Masjid As-Salam Universitas Trilogi
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 w-fit">
              <Clock size={13} className="text-violet-400" />
              <span>Buka: Senin – Jumat (09.00 – 17.00 WIB)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-inter">
            [Masjid As-Salam Universitas Trilogi -
            STEKPI](http://googleusercontent.com/map_location_reference/1),
            Kampus Universitas Trilogi, Jl. H. Mahmud Raya No.31, RT.4/RW.4,
            Duren Tiga, Pancoran, Jakarta Selatan 12760.
          </p>

          <div className="rounded-2xl overflow-hidden border border-white/10 h-72 w-full filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <iframe
              title="Lokasi Masjid As-Salam Universitas Trilogi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0825227711016!2d106.8489041!3d-6.2533096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b3c1c75771%3A0x95535bfe03895c32!2sMasjid%20As-Salam%20Universitas%20Trilogi%20-%20STEKPI!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
