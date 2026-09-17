"use client";

import { useTranslations } from "next-intl";

export default function Statistics() {
  const t = useTranslations("statistics");

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          <div>
            <h2 className="text-5xl font-bold text-yellow-400">250+</h2>
            <p className="mt-4 text-gray-300">{t("listing")}</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">15+</h2>
            <p className="mt-4 text-gray-300">{t("estate")}</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">120+</h2>
            <p className="mt-4 text-gray-300">{t("client")}</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-yellow-400">8+</h2>
            <p className="mt-4 text-gray-300">{t("experience")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}