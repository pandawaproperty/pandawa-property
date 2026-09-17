"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setLanguageOpen(false);
  };

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      onClick={closeMenu}
      className={`transition hover:text-yellow-500 ${
        pathname === href
          ? "font-semibold text-yellow-500"
          : "text-zinc-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/logo/pandawa4.png"
              alt="Pandawa Property"
              width={520}
              height={150}
              priority
              className="h-12 w-auto lg:h-14"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItem("/", t("home"))}
            {navItem("/product", t("product"))}
            {navItem("/partner", t("partner"))}
            {navItem("/klien", t("client"))}
            {navItem("/tentang", t("about"))}
            {navItem("/kontak", t("contact"))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Language Switcher */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50"
              >
                {locale === "id" && "🇮🇩 ID"}
                {locale === "en" && "🇬🇧 EN"}
                {locale === "zh" && "🇨🇳 中文"}

                <svg
                  className={`h-4 w-4 transition ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 7l5 6 5-6" />
                </svg>
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border bg-white shadow-xl">
                  <Link
                    href={pathname}
                    locale="id"
                    onClick={closeMenu}
                    className="block px-4 py-3 hover:bg-zinc-50"
                  >
                    🇮🇩 Indonesia
                  </Link>

                  <Link
                    href={pathname}
                    locale="en"
                    onClick={closeMenu}
                    className="block px-4 py-3 hover:bg-zinc-50"
                  >
                    🇬🇧 English
                  </Link>

                  <Link
                    href={pathname}
                    locale="zh"
                    onClick={closeMenu}
                    className="block px-4 py-3 hover:bg-zinc-50"
                  >
                    🇨🇳 中文
                  </Link>
                </div>
              )}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281255558283"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600 md:block"
            >
              WhatsApp
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg border p-2 md:hidden"
            >
              ☰
            </button>

          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={closeMenu}
          />

          <aside className="fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b p-5">
              <Image
                src="/images/logo/pandawa4.png"
                alt="Pandawa"
                width={180}
                height={45}
                className="h-10 w-auto"
              />

              <button
                onClick={closeMenu}
                className="text-2xl"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col gap-5 p-6">
              {navItem("/", t("home"))}
              {navItem("/product", t("product"))}
              {navItem("/partner", t("partner"))}
              {navItem("/klien", t("client"))}
              {navItem("/tentang", t("about"))}
              {navItem("/kontak", t("contact"))}

              <div className="my-2 border-t pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Language
                </p>

                <div className="flex gap-2">
                  <Link
                    href={pathname}
                    locale="id"
                    onClick={closeMenu}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      locale === "id"
                        ? "border-yellow-500 bg-yellow-50"
                        : ""
                    }`}
                  >
                    🇮🇩
                  </Link>

                  <Link
                    href={pathname}
                    locale="en"
                    onClick={closeMenu}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      locale === "en"
                        ? "border-yellow-500 bg-yellow-50"
                        : ""
                    }`}
                  >
                    🇬🇧
                  </Link>

                  <Link
                    href={pathname}
                    locale="zh"
                    onClick={closeMenu}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      locale === "zh"
                        ? "border-yellow-500 bg-yellow-50"
                        : ""
                    }`}
                  >
                    🇨🇳
                  </Link>
                </div>
              </div>
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
              <a
                href="https://wa.me/6281255558283"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-green-500 py-4 text-center font-semibold text-white"
              >
                {t("whatsapp")}
              </a>
            </div>

          </aside>
        </>
      )}
    </>
  );
}