"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[380px] items-center overflow-hidden sm:min-h-[460px] lg:min-h-[560px] xl:min-h-[620px]"
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/70 via-40% to-transparent to-75%" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div
          className={`max-w-xl text-left transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#123524] sm:text-5xl">
            <span className="block">{t.hero.titleLine1}</span>
            <span className="block text-[#0f6b3a]">{t.hero.titleLine2}</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-700">
            {t.hero.desc}
          </p>
          <div className="mt-8 flex justify-start">
            <a
              href="#categories"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0f6b3a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0f6b3a]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c5a30] hover:shadow-xl hover:shadow-[#0f6b3a]/30 active:translate-y-0"
            >
              {t.hero.cta}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
