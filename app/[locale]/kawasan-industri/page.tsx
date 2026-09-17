"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { industrialAreas } from "@/data/industrialAreas";

type Locale = "id" | "en" | "zh";

export default function IndustrialAreaPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("industrialArea");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {t("badge")}
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            {locale === "id"
              ? "Kawasan Industri"
              : locale === "en"
              ? "Industrial Estates"
              : "工业园区"}
          </h1>
        </div>
      </section>

      {/* List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-4xl font-bold">
            {t("listing")}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industrialAreas.map((area) => (
              <div
                key={area.id}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-2xl"
              >
                <div className="relative h-56 bg-gray-100">
                  <Image
                    src={area.image}
                    alt={area.name[locale]}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {area.name[locale]}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    📍 {area.location[locale]}
                  </p>

                  <p className="mt-4 text-gray-600">
                    {area.description[locale]}
                  </p>

                  <div className="mt-5 space-y-1 text-sm">
                    <p>
                      <b>{t("developer")}:</b>{" "}
                      {area.developer[locale]}
                    </p>

                    <p>
                      <b>{t("area")}:</b> {area.totalArea}
                    </p>

                    <p>
                      <b>{t("access")}:</b>{" "}
                      {area.tollAccess[locale]}
                    </p>
                  </div>

                  <Link
                    href={`/${locale}/kawasan-industri/${area.slug}`}
                    className="mt-6 inline-block rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black hover:bg-yellow-500"
                  >
                    {t("detail")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}