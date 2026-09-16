"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function LdkNavbar() {
  // Menu navigasi khas brosur LDK As-Salam
  const navItems = [
    { name: "Beranda", link: "#hero" },
    { name: "Profil", link: "#about" },
    { name: "Bidang", link: "#bidang" },
    { name: "Galeri", link: "#galeri" },
    { name: "Kontak", link: "#kontak" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-neutral-950 min-h-[120px]">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="border border-neutral-800 bg-neutral-900/80 backdrop-blur-md">
          {/* Logo Custom LDK As-Salam */}
          <a
            href="#hero"
            className="relative z-20 flex items-center space-x-3 px-2 py-1"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white text-xs shadow-md shadow-emerald-900/30">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm leading-none">
                LDK As-Salam
              </span>
              <span className="text-[10px] text-emerald-400 font-medium tracking-wider uppercase mt-0.5">
                Lembaga Dakwah Kampus
              </span>
            </div>
          </a>

          {/* Links Navigasi */}
          <NavItems items={navItems} />

          {/* Tombol Aksi */}
          <div className="flex items-center gap-3">
            <NavbarButton
              href="#daftar"
              variant="dark"
              className="bg-emerald-600 text-white hover:bg-emerald-500 hover:-translate-y-0.5 transition-all rounded-full px-5 py-2 text-xs border-none"
            >
              Gabung Sekarang
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="border border-neutral-800 bg-neutral-900/90 backdrop-blur-md">
          <MobileNavHeader>
            <a href="#hero" className="flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white text-xs">
                AS
              </div>
              <span className="font-bold text-white text-sm">LDK As-Salam</span>
            </a>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="border border-neutral-800 bg-neutral-900/95 text-neutral-200"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-300 hover:text-emerald-400 py-1 font-medium text-sm transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-3 pt-2">
              <NavbarButton
                href="#daftar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-emerald-600 text-white hover:bg-emerald-500 rounded-xl py-2.5 text-center text-sm border-none"
              >
                Gabung Sekarang
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
