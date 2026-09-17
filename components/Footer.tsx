"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              Pandawa Property
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {t("description")}
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              {t("menu")}
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">{t("home")}</Link></li>
              <li><Link href="/jual">{t("sale")}</Link></li>
              <li><Link href="/sewa">{t("rent")}</Link></li>
              <li><Link href="/klien">{t("client")}</Link></li>
              <li><Link href="/tentang">{t("about")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              {t("contact")}
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>📞 0812-5555-8283</li>
              <li>✉ pandawaglobalindustri@gmail.com</li>
              <li>🌐 pandawaproperty.com</li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              {t("office")}
            </h3>

            <p className="leading-8 text-gray-400">
              The Hive Cendana Spark N105
              <br />
              Lippo Cikarang
              <br />
              Bekasi, West Java
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-700 pt-8 md:flex-row">
          <p className="text-gray-500">
            © 2026 Pandawa Property. {t("rights")}
          </p>

          <div className="mt-4 flex gap-6 md:mt-0">
            <a
              href="https://wa.me/6281255558283"
              target="_blank"
              className="transition hover:text-yellow-400"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/pandawaproperty"
              target="_blank"
              className="transition hover:text-yellow-400"
            >
              Instagram
            </a>

            <a
              href="https://linkedin.com/company/pandawaproperty"
              target="_blank"
              className="transition hover:text-yellow-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}