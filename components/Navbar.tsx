"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
 const pathname = usePathname();

const [showProductMenu, setShowProductMenu] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowProductMenu(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

useEffect(() => {
  document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [mobileMenuOpen]);

  const closeMenu = () => {
  setShowProductMenu(false);
  setMobileMenuOpen(false);
};

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`relative font-medium transition duration-300 hover:text-yellow-500
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300
      ${
        pathname === href
          ? "text-yellow-500 after:w-full"
          : "after:w-0 hover:after:w-full"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-200/60 bg-white/90 backdrop-blur-xl">

<div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* Logo */}

        {/* Left Section */}

<div className="flex items-center gap-3">

  {/* Hamburger */}

  <button
    onClick={() => setMobileMenuOpen(true)}
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 md:hidden"
    aria-label="Open Menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>

  {/* Logo */}

  <Link
    href="/"
    className="flex items-center"
  >
    <Image
      src="/images/logo/pandawa.png"
      alt="Pandawa Property"
      width={240}
      height={70}
      priority
      className="h-12 md:h-20 w-auto"
    />
  </Link>

</div>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">

          {navItem("/", "Home")}

          {/* Dropdown */}

          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() =>
                setShowProductMenu(!showProductMenu)
              }
              className="flex items-center gap-2 font-medium transition hover:text-yellow-500"
            >
              Produk

              <svg
                className={`h-4 w-4 transition ${
                  showProductMenu
                    ? "rotate-180"
                    : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                
                <path d="M5 7l5 6 5-6" />
              </svg>
            </button>

            {showProductMenu && (
              <div className="absolute left-0 mt-4 w-80 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl">

                <Link
                  href="/product"
                  onClick={closeMenu}
                  className="flex gap-4 px-6 py-5 transition hover:bg-yellow-50"
                >
                  <span className="text-2xl">🏭</span>

                  <div>
                    <h4 className="font-semibold">
                      Kawasan Industri
                    </h4>

                    <p className="mt-1 text-sm text-zinc-500">
                      Jelajahi seluruh kawasan industri
                    </p>
                  </div>
                </Link>

                <div className="border-t" />

                <Link
                  href="/property?category=Warehouse"
                  onClick={closeMenu}
                  className="flex gap-4 px-6 py-5 transition hover:bg-yellow-50"
                >
                  <span className="text-2xl">📦</span>

                  <div>
                    <h4 className="font-semibold">
                      Warehouse
                    </h4>

                    <p className="mt-1 text-sm text-zinc-500">
                      Gudang siap pakai
                    </p>
                  </div>
                </Link>

                <div className="border-t" />

                <Link
                  href="/property?category=Factory"
                  onClick={closeMenu}
                  className="flex gap-4 px-6 py-5 transition hover:bg-yellow-50"
                >
                  <span className="text-2xl">🏭</span>

                  <div>
                    <h4 className="font-semibold">
                      Factory
                    </h4>

                    <p className="mt-1 text-sm text-zinc-500">
                      Bangunan pabrik industri
                    </p>
                  </div>
                </Link>

                <div className="border-t" />

                <Link
                  href="/property?category=Industrial Land"
                  onClick={closeMenu}
                  className="flex gap-4 px-6 py-5 transition hover:bg-yellow-50"
                >
                  <span className="text-2xl">🌍</span>

                  <div>
                    <h4 className="font-semibold">
                      Industrial Land
                    </h4>

                    <p className="mt-1 text-sm text-zinc-500">
                      Lahan industri siap dikembangkan
                    </p>
                  </div>
                </Link>

              </div>
            )}
          </div>

          {navItem("/partner", "Partner Kami")}

          {navItem("/klien", "Klien")}

          {navItem("/tentang", "Tentang Kami")}

          {navItem("/kontak", "Kontak")}

        </nav>

        {/* WhatsApp */}

       <div className="flex items-center gap-3">

  {/* Mobile */}

  <a
    href="https://wa.me/6281255558283"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white md:hidden"
    aria-label="WhatsApp"
  >
    💬
  </a>

  {/* Desktop */}

  <a
    href="https://wa.me/6281255558283"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1EBE5D] hover:shadow-xl md:inline-flex"
  >
    💬 WhatsApp
  </a>

</div>

            </div>

      {/* ================= MOBILE MENU ================= */}

      {mobileMenuOpen && (
        <>
          {/* Overlay */}

          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
          />

          {/* Drawer */}

          <div
  className={`fixed left-0 top-0 z-50 flex h-full w-80 max-w-[85%] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>

            {/* Header */}

            <div className="flex items-center justify-between border-b px-6 py-5">

              <Image
                src="/images/logo/pandawa.png"
                alt="Pandawa Property"
                width={180}
                height={50}
                className="h-10 w-auto"
              />

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 hover:bg-zinc-100"
              >
                ✕
              </button>

            </div>

            {/* Menu */}

            <nav className="flex-1 overflow-y-auto px-6 py-6">

              <Link
                href="/"
                onClick={closeMenu}
                className={`block rounded-xl px-3 py-3 font-medium transition ${
             pathname === "/"
             ? "bg-yellow-100 text-yellow-700"
             : "hover:bg-yellow-50 hover:text-yellow-600"
            }`}
              >
                Home
              </Link>

              <div className="my-4 border-t" />

              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Produk
              </p>

              <Link
                href="/product"
                onClick={closeMenu}
                className="block rounded-xl py-3 hover:bg-yellow-50"
              >
                🏭 Kawasan Industri
              </Link>

              <Link
                href="/property?category=Warehouse"
                onClick={closeMenu}
                className="block rounded-xl py-3 hover:bg-yellow-50"
              >
                📦 Warehouse
              </Link>

              <Link
                href="/property?category=Factory"
                onClick={closeMenu}
                className="block rounded-xl py-3 hover:bg-yellow-50"
              >
                🏭 Factory
              </Link>

              <Link
                href="/property?category=Industrial Land"
                onClick={closeMenu}
                className="block rounded-xl py-3 hover:bg-yellow-50"
              >
                🌍 Industrial Land
              </Link>

              <div className="my-4 border-t" />

              <Link
                href="/partner"
                onClick={closeMenu}
                className={`block rounded-xl px-3 py-3 transition ${
  pathname === "/partner"
    ? "bg-yellow-100 text-yellow-700"
    : "hover:bg-yellow-50"
}`}
              >
                Partner Kami
              </Link>

              <Link
                href="/klien"
                onClick={closeMenu}
                className={`block rounded-xl px-3 py-3 transition ${
  pathname === "/klien"
    ? "bg-yellow-100 text-yellow-700"
    : "hover:bg-yellow-50"
}`}
              >
                Klien
              </Link>

              <Link
                href="/tentang"
                onClick={closeMenu}
                className={`block rounded-xl px-3 py-3 transition ${
  pathname === "/tentang"
    ? "bg-yellow-100 text-yellow-700"
    : "hover:bg-yellow-50"
}`}
              >
                Tentang Kami
              </Link>

              <Link
                href="/kontak"
                onClick={closeMenu}
                className={`block rounded-xl px-3 py-3 transition ${
  pathname === "/kontak"
    ? "bg-yellow-100 text-yellow-700"
    : "hover:bg-yellow-50"
}`}
              >
                Kontak
              </Link>

            </nav>

            {/* Bottom CTA */}

            <div className="border-t p-6">

              <a
                href="https://wa.me/6281255558283"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#1EBE5D]"
              >
                💬 Hubungi via WhatsApp
              </a>

            </div>

          </div>
        </>
      )}

    </header>
  );
}