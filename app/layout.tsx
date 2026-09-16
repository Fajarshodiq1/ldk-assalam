import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar"; // Sesuaikan path file Navbar kamu
import FooterSection from "@/components/footer-section"; // Sesuaikan path file Footer kamu
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LDK As-Salam",
  description: "Wadah pembinaan karakter dan kolaborasi mahasiswa muslim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-neutral-900">
        {/* Navbar Global (Selalu melayang di atas) */}
        <Navbar />

        {/* Konten Halaman (Flex grow agar footer selalu terdorong ke bawah jika konten pendek) */}
        <div className="flex-1">{children}</div>

        {/* Footer Global */}
        <FooterSection />
      </body>
    </html>
  );
}
