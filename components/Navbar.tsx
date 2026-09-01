"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      onClick={closeMenu}
      className={`transition hover:text-yellow-500 ${
        pathname === href
          ? "text-yellow-500 font-semibold"
          : "text-zinc-700"
      }`}
    >
      {label}
    </Link>
  );

    return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur">

       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-12 xl:px-16">
          {/* Logo */}

          <Link href="/" onClick={closeMenu}>
            <Image
  src="/images/logo/pandawa2.png"
  alt="Pandawa Property"
  width={520}
  height={150}
  priority
  className="h-20 lg:h-24 w-auto"
/>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 md:flex">

            {navItem("/", "Home")}

            {navItem("/product", "Produk")}

            {navItem("/partner", "Partner Kami")}

            {navItem("/klien", "Klien")}

            {navItem("/tentang", "Tentang Kami")}

            {navItem("/kontak", "Kontak")}

          </nav>

                    {/* Right */}

          <div className="flex items-center gap-3">

            <a
              href="https://wa.me/6281255558283"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600 md:block"
            >
              WhatsApp
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg border p-2 md:hidden"
            >
              ☰
            </button>

          </div>

        </div>

      </header>

            {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={closeMenu}
          />

          <aside className="fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b p-5">

              <Image
                src="/images/logo/pandawa.png"
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

              {navItem("/", "Home")}

              {navItem("/product", "Produk")}

              {navItem("/partner", "Partner Kami")}

              {navItem("/klien", "Klien")}

              {navItem("/tentang", "Tentang Kami")}

              {navItem("/kontak", "Kontak")}

            </nav>

            <div className="absolute bottom-6 left-6 right-6">

              <a
                href="https://wa.me/6281255558283"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-green-500 py-4 text-center font-semibold text-white"
              >
                Hubungi via WhatsApp
              </a>

            </div>

          </aside>
        </>
      )}

          </>
  );
}