"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Home,
  Info,
  Grid,
  Image as ImageIcon,
  HelpCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Beranda", href: "/#beranda", icon: Home },
  { name: "About", href: "/#about", icon: Info },
  { name: "Bidang", href: "/#bidang", icon: Grid },
  { name: "Gallery", href: "/#galeri", icon: ImageIcon },
  { name: "FAQ", href: "/#faq", icon: HelpCircle },
  { name: "Kontak", href: "/#kontak", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ================= DESKTOP & TABLET TOP NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center justify-between border border-neutral-200/80 bg-white/80 backdrop-blur-xl px-4 py-2.5 rounded-full shadow-xs"
          >
            {/* Logo / Brand */}
            <Link href="/" className="flex items-center gap-2.5">
              <span className="font-semibold text-neutral-900 text-sm tracking-tight">
                LDK As-Salam
              </span>
            </Link>

            {/* Navigasi Desktop */}
            <ul className="hidden md:flex items-center gap-1 list-none p-0 m-0 relative">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <li key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
                        isActive
                          ? "text-neutral-900 font-semibold"
                          : "text-neutral-500 hover:text-neutral-900"
                      }`}
                    >
                      <Icon
                        size={14}
                        className={
                          isActive ? "text-violet-600" : "text-neutral-400"
                        }
                      />
                      {item.name}
                    </Link>

                    {/* Indicator Pill Desktop */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill-desktop"
                        className="absolute inset-0 bg-neutral-100 rounded-full -z-0"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Tombol Aksi Top Bar */}
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScYfAOvyqzBDu4o1FEVgGLdYxJ74wr5_k25gyVWFzOskh3bvg/viewform"
                  className="flex items-center gap-1.5 bg-neutral-900 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all hover:bg-neutral-800 shadow-2xs"
                >
                  <span>Gabung</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* ================= MOBILE BOTTOM NAVIGATION ================= */}
      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-md mx-auto border border-neutral-200/90 bg-white/90 backdrop-blur-2xl p-1.5 rounded-3xl shadow-xl shadow-neutral-900/10 flex items-center justify-around"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex flex-col items-center justify-center py-2 px-2.5 rounded-2xl text-[10px] font-medium transition-all ${
                  isActive
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {/* Active Indicator Background */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill-mobile"
                    className="absolute inset-0 bg-violet-50 border border-violet-200/60 rounded-2xl -z-0"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}

                <div className="relative z-10 flex flex-col items-center gap-1">
                  <Icon
                    size={16}
                    className={
                      isActive ? "text-violet-600" : "text-neutral-400"
                    }
                  />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
}
