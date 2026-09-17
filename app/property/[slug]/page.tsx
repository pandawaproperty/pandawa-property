"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { developers } from "@/data/developers";

type Locale = "id" | "en" | "zh";

export default function PartnerPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("partner");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">{t("title")}</h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Partner List */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {developers.map((developer) => (
              <div
                key={developer.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-56 items-center justify-center bg-gray-100 p-10">
                  <div className="relative h-full w-full">
                    <Image
                      src={developer.logo}
                      alt={developer.name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {developer.name}
                  </h2>

                  <p className="mt-2 text-sm font-medium text-yellow-600">
                    {t("developer")}
                  </p>

                  <p className="mt-5 leading-7 text-gray-600">
                    {developer.description[locale]}
                  </p>

                  {developer.website && (
                    <a
                      href={developer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center font-semibold text-yellow-600 hover:text-yellow-700"
                    >
                      🌐 {t("visitWebsite")}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}