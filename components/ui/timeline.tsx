"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#121212] text-white font-sans md:px-10"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white px-3.5 py-1 rounded-full text-xs font-medium mb-4 backdrop-blur-md">
          <Sparkles
            size={12}
            className="text-violet-400 fill-violet-400 animate-pulse"
          />
          Pathway
        </div>
        <h2 className="text-2xl md:text-4xl font-bold font-syne text-white max-w-4xl tracking-tight">
          Alur Bergabung & Pembinaan Kader
        </h2>
        <p className="text-white/70 text-xs md:text-sm max-w-xl mt-2 leading-relaxed font-inter">
          Proses bergabung dibuat transparan dan simpel. Ikuti 3 langkah
          perjalanan kamu dari pendaftaran hingga resmi berkarya.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div className="flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timeline Indicator Dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/20 shadow-xl">
                <div className="h-4 w-4 rounded-full bg-[#7b38f7] border border-violet-400 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold font-syne text-white">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-syne text-white">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}

        {/* Line Track */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated Line Progress (Warna Ungu) */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#7b38f7] via-violet-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
