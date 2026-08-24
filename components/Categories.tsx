"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { categoryIcons } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function Categories() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="text-center text-2xl font-bold text-[#123524] sm:text-3xl">
          {t.categoriesTitle}
        </h2>
        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#0f6b3a]" />
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
        {t.categories.map((cat, i) => {
          const Icon = categoryIcons[cat.icon];
          return (
            <Reveal key={cat.label} delay={i * 80}>
              <a
                href="#"
                className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0f6b3a]/20 hover:shadow-lg hover:shadow-[#0f6b3a]/10"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e9f5ec] text-[#0f6b3a] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0f6b3a] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </span>
                <span className="text-sm font-semibold text-zinc-700 group-hover:text-[#123524]">
                  {cat.label}
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
