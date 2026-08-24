"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-[#0f3d24] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-white/80">{t.footer}</p>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
              <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.3 3.57c-2.3 0-3.9 1.4-3.9 4v2.32H7.7V13h2.7v8h3.1Z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
              <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3Zm0 1.8a7.2 7.2 0 0 1 6.1 11 7.2 7.2 0 0 1-9.9 2.6l-.4-.2-2.7.8.8-2.6-.2-.4A7.2 7.2 0 0 1 12 4.8Zm-2.7 3.6c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.1-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.6-.9-2.1-.2-.5-.4-.4-.6-.4Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
