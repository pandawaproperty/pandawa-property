"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [showProductMenu, setShowProductMenu] = useState(false);

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

  const closeMenu = () => setShowProductMenu(false);

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
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

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
            className="h-20 w-auto"
          />
        </Link>

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

        <a
          href="https://wa.me/6281255558283"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1EBE5D] hover:shadow-xl md:inline-flex"
        >
          💬 WhatsApp
        </a>

      </div>
    </header>
  );
}