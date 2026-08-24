"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: "home", label: t.nav.home, active: true },
    { key: "products", label: t.nav.products },
    { key: "about", label: t.nav.about },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#0f3d24] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-2 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.9c0-.5.4-1 1-1h3.5c.5 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8Z"
              strokeLinejoin="round"
            />
          </svg>
          <span className="opacity-90">{t.callLabel}:</span>
          <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="font-medium tracking-wide">
            {t.phone}
          </a>
        </div>
      </div>

      <div className="border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9f5ec] text-[#0f6b3a]">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8">
                <path d="M12 21c0-6 4-9 8-10-1 6-4 9-8 10Z" strokeLinejoin="round" />
                <path d="M12 21c0-7-4.5-11-9-12 1 7 4.5 11 9 12Z" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-bold text-[#0f3d24]">{t.brand}</span>
              <span className="block text-xs text-zinc-500">{t.brandSub}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href="#"
                className={`relative py-1 text-[15px] font-medium transition-colors hover:text-[#0f6b3a] ${
                  item.active ? "text-[#0f3d24]" : "text-zinc-600"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#0f6b3a]" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1 rounded-full border border-[#0f6b3a]/30 px-3 py-1.5 text-sm font-semibold text-[#0f6b3a] transition-all duration-200 hover:border-[#0f6b3a] hover:bg-[#e9f5ec] active:scale-95"
              aria-label="Toggle language"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" />
              </svg>
              <span>{lang === "si" ? "EN" : "සිං"}</span>
            </button>

            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 hover:text-[#0f6b3a] sm:flex"
              aria-label="Search"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 hover:text-[#0f6b3a]"
              aria-label="Cart"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
                <path d="M3 4h2l2.6 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="21" r="1.4" />
                <circle cx="18" cy="21" r="1.4" />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#0f6b3a] text-[10px] font-bold text-white">
                0
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 md:hidden"
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href="#"
                className={`rounded-lg px-3 py-2 text-[15px] font-medium ${
                  item.active ? "bg-[#e9f5ec] text-[#0f6b3a]" : "text-zinc-600"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
