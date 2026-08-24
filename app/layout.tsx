import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "Dilshan පොහොර වෙළඳසැල | Dilshan Fertilizer Store",
  description:
    "ගුණාත්මක හා විශ්වාසනීය පොහොර විසඳුම් | Quality and reliable fertilizer solutions",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="si" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
