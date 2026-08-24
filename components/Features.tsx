"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { featureIcons } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function Features() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#f4faf5] p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.map((f, i) => {
            const Icon = featureIcons[f.icon];
            return (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-white text-[#0f6b3a] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#123524]">{f.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
