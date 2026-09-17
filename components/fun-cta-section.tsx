"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, MessageCircleCode } from "lucide-react";
import { CloudShader } from "./ui/cloud-shader";

export default function FunCtaSection() {
  return (
    <CloudShader className="py-28 md:py-36 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Konten Utama Terpusat */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/30 text-neutral-800 text-xs font-semibold mb-8 shadow-xs">
            <Flame size={14} className="text-violet-600 animate-pulse" />
            <span>Titik Kritis Anak Organisasi</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 tracking-tight mb-6 leading-[1.15]">
            Udah capek scrolling? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Waktunya berhenti
            </span>{" "}
            jadi penonton.
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-normal max-w-xl mx-auto mb-10">
            Mau nunggu angkatan lain lulus duluan baru sadar serunya berproses
            bareng kita? Gak usah overthinking. Kuliah dapet, circle positif
            dapet, pahala insyaAllah ngikut. Tunggu apa lagi? ⚡
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-1/2"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScYfAOvyqzBDu4o1FEVgGLdYxJ74wr5_k25gyVWFzOskh3bvg/viewform"
                className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-4 rounded-2xl font-semibold text-sm transition-all shadow-xl shadow-neutral-950/10 group w-full"
              >
                <span>Gass Join Sekarang</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-1/2"
            >
              <Link
                href="#kontak"
                className="flex items-center justify-center gap-2 bg-white/70 hover:bg-white backdrop-blur-md border border-white/50 text-neutral-800 px-6 py-4 rounded-2xl font-medium text-sm transition-all shadow-xs w-full"
              >
                <span>Tanya-tanya Dulu</span>
                <MessageCircleCode size={16} className="text-neutral-500" />
              </Link>
            </motion.div>
          </div>

          <p className="text-xs text-neutral-500 mt-6">
            *Pendaftaran gratis, tapi keseruan dan pengalaman dibayar lunas. 😉
          </p>
        </motion.div>
      </div>
    </CloudShader>
  );
}
